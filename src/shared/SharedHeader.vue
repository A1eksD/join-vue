<template>
  <img src="" alt="" />
  <div>
    <h1>
      {{ firstName.substring(0, 1).toUpperCase() }}
      {{ lastNamesubstring(0, 1).toUpperCase() }}
    </h1>
  </div>
</template>

<script>
import { UserService } from "@/services/user-service";

export default {
  name: "SharedHeader",
  setup() {
    const userService = UserService();

    return {
      firstName: userService.firstName,
      lastName: userService.lastName,
    };
  },
};
</script>

<style  lang="scss">
template {
  width: 100vw;
  height: 100px;
  background-color: #0d1117;
}
</style>
