<template>
  <div class="profile_wrapper_background">
      <div class="profile_container">
            <i class="user_picture fas fa-user"></i>
            <h3>{{ user.email }}</h3>
            <form class="change_users_email_form">
                <input class="change_user_email" type="text" maxlength="20" placeholder="Change User Email" aria-labelledby="Account Email">
                <br>
                <button aria-label="Update" class="update_button">update</button>
            </form>
            <br>
            <button aria-label="Close" @click.prevent="exit_profile" class="close_button">Close</button>
      </div>
  </div>
</template>

<script>
import getUser from '../composables/getUser'

export default {
  setup(context) {
    const { user } = getUser()

    return { user }
  },
  methods:{
    exit_profile(){
      this.$emit('exit')
    }
  }
}
</script>