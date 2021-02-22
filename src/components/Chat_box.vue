<template>
  <div class="chat_box_wrapper">
    <form class="chat_box_form">
      <textarea class="chat_box" v-model="message" aria-labelledby="Enter Text To Chat" @keypress.enter.prevent="handleSubmit" name="" placeholder="Enter Text Here.." cols="30" rows="1"></textarea>
      <button class="submit_message_button" @click.enter.prevent="handleSubmit" aria-label="Send Message"><i class="submit_message_icon fas fa-paper-plane"></i><span class="send">Send</span></button>
      <div v-if="error" class="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import { ref } from 'vue'

export default {
  setup() {
    const { user } = getUser()
    const { addDoc, error } = useCollection('messages')
    const message = ref('')

    const handleSubmit = async () => {
      if(message.value === ''){
        return
      }
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }
      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error }
  }
}
</script>