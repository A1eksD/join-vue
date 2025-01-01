<template>
  <div>
    <h1>Login Page</h1>
    <input type="text" name="loginName" id="loginName">
    <input type="password" name="password" id="loginPassword">
    <button @click="login">Login</button>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  methods: {
  },
};
</script>
<style>

</style>
