import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)

AOS.init({
  duration: 1000,
  once: true,
})

app.use(pinia)

app.use(router)

app.mount('#app')
