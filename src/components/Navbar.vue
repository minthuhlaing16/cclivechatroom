<template>
  <nav v-if="user">
    <div>
      <p>Hi {{ user.displayName }}</p>
      <p class="email">Logged in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase/config";
export default {
  setup() {
    let error = ref(null);
    let user = ref(auth.currentUser);
    let logout = async () => {
      try {
        await auth.signOut();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    // console.log(auth.currentUser);
    auth.onAuthStateChanged((_user) => {
      // console.log("user state change. current user is ", _user);
      user.value = _user;
    });
    return { logout, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
