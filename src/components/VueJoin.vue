<template>
  <div>
    <AppLogin />
    <AppRegister />
    <AppAddTask />
    <AppSummary />
    <AppBoard />
    <AppContacts />
  </div>
</template>

<script>

import AppAddTask from './body/AppAddTask.vue';
import AppBoard from './body/AppBoard.vue';
import AppContacts from './body/AppContacts.vue';
import AppSummary from './body/AppSummary.vue';
import AppLogin from './login/AppLogin.vue';
import AppRegister from './login/AppRegister.vue';

export default {
  name: 'VueJoin',
  props: {
    msg: String
  },
  components: {
    AppLogin,
    AppRegister,
    AppAddTask,
    AppSummary,
    AppBoard,
    AppContacts,
  }
}
</script>

<style></style>
