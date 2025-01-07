import { createRouter, createWebHistory } from 'vue-router';
import AppLogin from '../components/login/AppLogin.vue';
import AppRegister from '../components/login/AppRegister.vue';
import MainLayout from '../components/MainLayout.vue';
import AppAddTask from '../components/body/AppAddTask.vue';
import AppSummary from '../components/body/AppSummary.vue';
import AppBoard from '../components/body/AppBoard.vue';
import AppContacts from '../components/body/AppContacts.vue';

const routes = [
  // Login-Seite (Vollbild)
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,
  },
  // Register-Seite (Vollbild)
  {
    path: '/register',
    name: 'Register',
    component: AppRegister,
  },
  // Geschützte Seiten mit Layout
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'add-task',
        name: 'AddTask',
        component: AppAddTask,
      },
      {
        path: 'summary',
        name: 'Summary',
        component: AppSummary,
      },
      {
        path: 'board',
        name: 'Board',
        component: AppBoard,
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: AppContacts,
      },
    ],
  },
  // Default route
  {
    path: '/',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
