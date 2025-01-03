<template>
  <div class="body-div">
    <img src="" alt="" />
    <div class="name-div">
      <h1>
        {{ firstName ? firstName[0].toUpperCase() : "" }}
        {{ lastName ? lastName[0].toUpperCase() : "" }}
      </h1>
    </div>
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

<style lang="scss" scoped>
.body-div {
  width: 100vw;
  height: 100px;
  display: flex;
  align-content: space-between;
  justify-content: center;
  .name-div {
    width: 80px;
    height: 80px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      color: black;
      margin: 0;
    }
  }
}
</style>
