import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Header from './components/UI/Header.vue';
import Footer from './components/UI/Footer.vue';
import router from './routes';
import store from './store/index';

const app = createApp(App)

app.use(store)
app.use(router)
app.component('app-header', Header)
app.component('app-footer', Footer)
app.mount('#app');

