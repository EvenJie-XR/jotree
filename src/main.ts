import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from "./routes/index"
import * as Potree from "potree-and-type"

window.Potree = Potree;
window.Potree.scriptPath = `${window.Potree.scriptPath}${import.meta.env.BASE_URL}`;
window.Potree.resourcePath = `${window.Potree.scriptPath}/resources`;


createApp(App).use(ElementPlus).use(router).mount("#app");