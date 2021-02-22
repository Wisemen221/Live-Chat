<template>
  <form autocomplete="on" @submit.prevent="handleSubmit">
    <input class="email" id="email" type="email" aria-labelledby="Account Email" required placeholder="Email" v-model="email">
    <br>
    <input class="password" id="password" aria-labelledby="Account Password" type="password" maxlength="10" required placeholder="Password" v-model="password">
    <div class="error">
      <p>{{ error }}</p>
    </div>
    <button aria-label="Log in" id="login_button" class="login_button">Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>