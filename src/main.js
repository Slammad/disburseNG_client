import Vue from 'vue'
import App from './App.vue'
import Contacts from './components/Contacts.vue'
import Transactions from './components/Transactions.vue'
import AccountStats from './components/AccountStats.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter);


const routes = [
  {path:'/',component:AccountStats},
  {path:'/transactions',component:Transactions},
  {path:'/contacts',component:Contacts}
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
});
