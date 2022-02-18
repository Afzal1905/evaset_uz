import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ScrollAnimation from './directives/scrollAnimation'
import animateCards from './directives/animateCards'

Vue.directive('scrollanimation', ScrollAnimation);
Vue.directive('animatecards', animateCards);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
