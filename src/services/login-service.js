// src/services/authService.js
import { ref } from 'vue';

export function useAuth() {
  const isAuthenticated = ref(false);

  const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated,
    login,
    logout
  };
}
