<template>
  <h2>Sign Up form</h2>
  <form @submit.prevent="SignUp">
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let SignUp = () => {
      console.log(displayName.value, email.value, password.value);
    };

    return {
      displayName,
      email,
      password,
      SignUp,
    };
  },
};
</script>

<style></style>
