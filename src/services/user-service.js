import { ref } from "vue";

export function UserService() {
  const firstName = ref("");
  const lastName = ref("");

  return {
    firstName,
    lastName,
  };
}
