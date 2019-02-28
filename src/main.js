import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

import Adminpanel from './components/Adminpanel.vue'

import store from './store'
import VueProgressBar from 'vue-progressbar'
import Transactions from './components/Transactions.vue'
import AccountStats from './components/AccountStats.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.use(VueProgressBar, {
  color: 'green',
  failedColor: 'red',
  height: '25px'
})

const routes = [
  {path:'/',component:Login},
  {path:'/signup',component:Signup},
  {path:'/dashboard',component:Adminpanel, children:
  [
    {
      path:'',
      component:AccountStats
    },
    {
      path:'transactions',
      component:Transactions
    }
 
]
},
  
 
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})


new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
});
