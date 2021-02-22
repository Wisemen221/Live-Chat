<template>
  <form autocomplete="on" @submit.prevent="handleSubmit">
    <input class="user_name" id="name" type="text" aria-labelledby="Account Name" maxlength="20" required placeholder="Name" v-model="displayName">
    <br>
    <input class="email" id="signup_email" type="email" aria-labelledby="Account Email" required placeholder="Email" v-model="email">
    <br>
    <input class="password" id="signup_password" type="password" aria-labelledby="Account Password" maxlength="10" required placeholder="Password" v-model="password">
    <div class="error">
      <p>{{ error }}</p>
    </div>
    <button aria-label="Sign up" id="signup_button" class="signup_button">Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }      
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>