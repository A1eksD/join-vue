import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { firebaseApp } from './firebase/firebaseConfig';
import './assets/style.scss';


const app = createApp(App);

app.use(router);
app.config.globalProperties.$firebaseApp = firebaseApp;
app.mount('#app');



// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import { auth, firestore } from './firebase/firebaseConfig'; // Nutze die exportierten Dienste
// import './assets/style.scss';

// const app = createApp(App);

// app.use(router);

// // Falls du Firebase-Dienste global verfügbar machen willst
// app.config.globalProperties.$auth = auth;
// app.config.globalProperties.$firestore = firestore;

// app.mount('#app');
