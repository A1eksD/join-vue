<template>
  <div class="body-div">
    <SharedHeader class="shared-header" />
    <div>
      <h1>Summary Component</h1>
    </div>
  </div>
</template>

<script>
import SharedHeader from "@/shared/SharedHeader.vue";

export default {
  name: "AppSummary",
  components: {
    SharedHeader,
  },
};
</script>

<style lang="scss" scoped>
.body-div {
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .shared-header {
    height: 100px;
    width: 100%;
    background-color: #0d1117;
  }
  div {
    height: calc(100dvh - 100px);
    width: 100%;
    background-color: cadetblue;
  }
}
</style>
