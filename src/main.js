import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { firebaseApp } from './firebase/firebaseConfig';
import './assets/style.scss';


const app = createApp(App);

app.use(router);
app.config.globalProperties.$firebaseApp = firebaseApp;
app.mount('#app');