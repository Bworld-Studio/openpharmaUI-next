import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import './assets/styles/op.css'
import './assets/styles/opwebui.css'

createApp(App).use(router).mount('#app')
