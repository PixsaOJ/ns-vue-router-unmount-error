import { createApp } from 'nativescript-vue';
import App from './App.vue';
import router from './router'



const app = createApp(App)
app.use(router)
app.start()
