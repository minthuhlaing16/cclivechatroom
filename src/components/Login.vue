<template>
  <h2>Login form</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase/config";
export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let login = async () => {
      // console.log(email.value, password.value);
      try {
        let res = await auth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        if (!res) {
          throw new Error("Could not complete the login");
        }
        console.log(res.user);
      } catch (err) {
        console.log(err.message);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style></style>
