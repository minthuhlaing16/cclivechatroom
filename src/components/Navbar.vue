<template>
  <nav>
    <div>
      <p>Hi Display Name</p>
      <p class="email">Logged in as email</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
export default {
  setup() {
    let { error, loggedOut } = useLogout();
    let logout = async () => {
      await loggedOut();
    };
    return { logout, error };
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
