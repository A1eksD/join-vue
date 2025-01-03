<template>
  <SharedHeader class="shared-header" />
  <div>
    <h1>Summary Component</h1>
  </div>
</template>

<script>
import { SharedHeader } from "@/shared/SharedHeader.vue";

export default {
  name: "AppSummary",
  components: {
    SharedHeader,
  },
};
</script>

<style lang="scss">
template {
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .shared-header {
    height: 100px;
    width: 100%;
  }
  div {
    height: 100%;
    width: 100%;
    background-color: cadetblue;
  }
}
</style>
