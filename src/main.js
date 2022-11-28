import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import api from "@/plugins/api";
import store from './store/modules'
import axios from "axios";
import mitts from "mitt";

const app = createApp(App)
    app.config.productionTip =false

const emitter = mitts();
app.config.globalProperties.emitter = emitter;
app.provide('emitter', emitter);

app.use(router).use(store)
app.use(api,{store,router})
app.config.globalProperties.$axios = axios;
app.mount('#app')
