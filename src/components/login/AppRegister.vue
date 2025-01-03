<template>
  <div>
    <h1>Register Page</h1>

    <div>
      <input
        type="text"
        name="firstnName"
        id="firstnName"
        v-model="firstName"
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        v-memo="lastName"
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div>
      <router-link to="/login">Login</router-link>
      <button @click="register">register</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginService } from "@/services/login-service";

export default {
  name: "Register",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const register = async () => {
      const response = await loginService().register(
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );
      if (response.success) {
        console.log("Registration successful:", response.user);
        router.push({ path: "/summary" }); // Redirect nach erfolgreicher Registrierung
      } else {
        console.error(
          "Registration failed:",
          response.errorCode,
          response.errorMessage
        );
      }
    };

    return {
      firstName,
      lastName,
      email,
      password,
      register,
    };
  },
};
</script>
