import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import Varlet from '@varlet/ui'
import App from './App.vue'

import '@unocss/reset/tailwind-compat.css'

// import '@varlet/ui/es/style'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(Varlet)
app.use(router)
app.mount('#app')
