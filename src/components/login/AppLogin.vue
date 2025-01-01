<template>
  <div>
    <h1>Login Page</h1>
    <input type="text" name="loginName" id="loginName" v-model="loginName">
    <input type="password" name="password" id="loginPassword" v-model="password">
    <button @click="login">Login</button>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
import { useAuth } from '@/services/login-service';
import { ref } from 'vue';


export default {
  name: 'AppLogin',
  setup() {
     //ref verwendet, um reaktive Variablen zu erstellen
    const loginName = ref('');
    const password = ref('');

    // Nutze den Authentifizierungs-Service
    const { login, isAuthenticated } = useAuth();

    // Login-Funktion, die den Login-Service aufruft
    const loginUser = () => {
      login(loginName.value, password.value);
      if (isAuthenticated.value) {
        console.log('Login successful!');
        // Weiterleitung oder weitere Logik
      } else {
        console.log('Login failed!');
      }
    };

    return {
      loginName,
      password,
      login: loginUser, // Verknüpfe die Methode mit der Template-Aktion
    };
  },
};
</script>
<style>

</style>
