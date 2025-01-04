<template>
  <div class="body-div">
    <SharedHeader class="shared-header" /> <!-- Statischer Header -->
    <div class="main-layout">
      <SharedSidebar class="shared-sidebar" /> <!-- Statische Sidebar -->
      <router-view v-slot="{ Component }">
        <!-- <transition name="fade" mode="out-in" class="main-content"> -->
          <component :is="Component" /> <!-- Dynamischer Bereich für Inhalte -->
        <!-- </transition> -->
      </router-view>
    </div>
  </div>
</template>

<script>
import SharedHeader from "@/shared/SharedHeader.vue";
import SharedSidebar from "@/shared/SharedSidebar.vue";

export default {
  components: {
    SharedHeader,
    SharedSidebar,
  },
};
</script>

<style scoped lang="scss">
.body-div {
  width: 100vw;
  height: 100dvh;
  // display: flex;
  // flex-direction: column;

  .shared-header {
    height: 100px;
    width: 100%;
    background-color: #0d1117;
  }
  .main-layout {
    display: flex;
    .shared-sidebar {
      width: 200px;
      height: calc(100dvh - 100px);
      background-color: slateblue;
    }
    .main-content {
      width: calc(100vw - 200px);
      height: calc(100dvh - 100px);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
