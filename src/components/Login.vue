<template>
  <h2>Login form</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">
      <p>{{ error }}</p>
    </div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let { error, signIn } = useLogin();
    let login = async () => {
      // console.log(email.value, password.value);
      let res = await signIn(email.value, password.value);
      if (res) {
        console.log(res.user);
      }
    };

    return {
      email,
      password,
      login,
      error,
    };
  },
};
</script>

<style></style>
