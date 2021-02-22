<template>
  <div ref="b" id="chat_window" class="chat_window_wrapper">
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div v-if="formattedDocuments" ref="messages" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="message_wrapper">
        
        <div class="user_time_wrapper">
          <i class="fas fa-user"></i>
        </div>
        <div class="user_message">
          <div class="message_top">
            <span ref="p" class="name">{{ doc.name }}</span>
            <span class="created-at">{{ doc.createdAt }}</span>
          </div>
          <div class="message_bottom">
            <span class="message">{{ doc.message }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import getUser from '../composables/getUser'
import { computed, onUpdated, ref } from 'vue'
import { formatDistanceToNow } from 'date-fns'

export default {
  setup() {
    const { error, documents } = getCollection('messages')
    const { user } = getUser()
    const messages = ref(null)
    const p = ref(null)
    const b = ref(null)

    // format timestamp
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    onUpdated(() => {
      for(let i = 0; i < messages.value.children.length; i++){
        if(messages.value.children[i].querySelector('.name').innerHTML === user.value.displayName){
          messages.value.children[i].style.flexDirection = 'row-reverse'
          messages.value.children[i].querySelector('.user_time_wrapper').style.color = '#30AABC'
          messages.value.children[i].querySelector('.user_message').style.background = "#30AABC"
        }
      }
      b.value.scrollTop = b.value.clientHeight + 10000
    })

    return { error, documents, formattedDocuments, user, messages, p, b }
  }
}
</script>