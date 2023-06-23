import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

loadFonts()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
app.config.globalProperties.$axios = axios
app.config.globalProperties.$url = 'http://127.0.0.1:8000/api'