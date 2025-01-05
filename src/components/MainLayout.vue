<template>
    <div class="layout">
      <SharedHeader class="shared-header" />
      <div class="layout-content">
        <SharedSidebar class="shared-sidebar" />
        <div class="main-content">
          <router-view /> <!-- Dynamische Inhalte der geschützten Seiten -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SharedHeader from '@/shared/SharedHeader.vue';
  import SharedSidebar from '@/shared/SharedSidebar.vue';
  
  export default {
    name: 'MainLayout',
    components: {
      SharedHeader,
      SharedSidebar,
    },
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .shared-header {
    height: 100px;
    background-color: #0d1117;
  }
  
  .layout-content {
    display: flex;
    flex: 1;
  }
  
  .shared-sidebar {
    width: 200px;
    background-color: slateblue;
  }
  
  .main-content {
    flex: 1;
    background-color: #f5f5f5;
    overflow-y: auto;
  }
  </style>
  