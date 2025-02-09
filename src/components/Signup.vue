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
import { auth } from "@/firebase/config";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let error = ref(null);
    let SignUp = async () => {
      // console.log(displayName.value, email.value, password.value);
      try {
        let res = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        if (!res) {
          throw new Error("Could not complete the signup");
        }
        console.log(res.user);
        // display name update
        res.user.updateProfile({ displayName: displayName.value });
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return {
      displayName,
      email,
      password,
      error,
      SignUp,
    };
  },
};
</script>

<style></style>
