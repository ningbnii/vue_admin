import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import router from './router'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/beyond.min.css'
import './assets/css/demo.min.css'
import './assets/css/animate.min.css'
import Modals from './components/modals'

Vue.config.productionTip = false
Vue.use(Modals)


new Vue({
    router,
    store:store,
    render: h => h(App)
}).$mount('#app')

