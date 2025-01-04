<template>
  <div class="body-div">
    <div>
      <router-link to="/summary" style="margin-top: 16px;">Summary</router-link>
      <router-link to="/add-task">Add Task</router-link>
      <router-link to="/board">Board</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SharedSidebar",
};
</script>

<style scoped lang="scss">
.body-div {
  width: 100%;
  height: 100%;
  background-color: slateblue;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
