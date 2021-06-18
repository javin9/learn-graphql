/*
 * @Desc: 
 * @FilePath: /learn-graphql/packages/graphql-client/src/main.js
 * @Author: liujianwei1
 * @Date: 2021-06-18 11:19:52
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueApollo from 'vue-apollo'
import { apolloProvider } from "./apollo-provider"

Vue.use(VueApollo)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
