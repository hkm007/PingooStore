import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.component('Navbar', {
  templates: Navbar
})

Vue.component('Footer', {
  templates: Footer
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
