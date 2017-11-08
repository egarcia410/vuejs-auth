import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-hobby.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

// You can intercept requests or responses before they are handled by then or catch
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('REQUEST INTERCEPTORS', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('RESPONSE INTERCEPTORS', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
