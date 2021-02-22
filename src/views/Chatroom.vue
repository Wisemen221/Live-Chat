<template>
  <div class="chat_page_wrapper">
    <div v-if="close">
      <Profile @exit="exit_module"/>
    </div>
    <Navbar @open="open_profile"/>
    <Chat_window />
    <Chat_box />
  </div>
</template>

<script>
import Chat_box from '../components/Chat_box.vue'
import Chat_window from '../components/Chat_window.vue'
import Navbar from '../components/Navbar.vue'
import Profile from '../components/Profile.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { Profile, Navbar, Chat_box, Chat_window },
  data(){
    return{
      close: false
    }
  },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })
  },
  methods:{
    exit_module(){
      this.close = !this.close
    },
    open_profile(){
      this.close = !this.close
    }
  }
}
</script>