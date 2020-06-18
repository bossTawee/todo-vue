import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
export default new VueRouter({
    routes // short for `routes: routes`
})



  