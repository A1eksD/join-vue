<template>
  <div>
    <h1>Login Page</h1>
    <input type="text" name="loginName" id="loginName" v-model="loginName" />
    <input
      type="password"
      name="password"
      id="loginPassword"
      v-model="password"
    />
    <button @click="login">Login</button>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
import { loginService } from "@/services/login-service";
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importiere useRouter

export default {
  name: "AppLogin",
  setup() {
    //ref verwendet, um reaktive Variablen zu erstellen
    const loginName = ref("");
    const password = ref("");
    const router = useRouter(); 

    const login = async () => {
      try {
        const response = await loginService().login(
          loginName.value,
          password.value
        );
        if (response.success) {
          localStorage.setItem("userUID", JSON.stringify(response.user.uid));
          router.push({ path: "/summary" });
        } else {
          console.error(
            "Login fehlgeschlagen:",
            response.errorCode,
            response.errorMessage
          );
        }
      } catch (error) {
        console.error("Unerwarteter Fehler:", error);
      }
    };

    // Rückgabe der Variablen und der login-Funktion, damit sie im Template verwendet werden können
    return {
      loginName,
      password,
      login, // Verknüpfe die Methode mit der Template-Aktion
    };
  },
};
</script>
<style></style>
