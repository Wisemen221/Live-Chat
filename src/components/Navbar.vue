<template>
  <nav class="navbar_wrapper" v-if="user">
    <div @click="open_profile" class="user_picture_wrapper">
      <i class="user_picture fas fa-user"></i>
      <span class="users_name">Hi, {{ user.displayName }}</span>
    </div>
    <div class="sign_out_wrapper">
      <button @click="handleClick" aria-label="Sign Out" class="sign_out_button"><i class="sign_out_icon fas fa-sign-out-alt"></i></button>
    </div>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { logout } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
    }

    return { handleClick, user }
  },
  methods:{
    open_profile(){
      this.$emit('open')
    }
  }
}
</script>