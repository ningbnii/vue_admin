import MyAlerts from './Alerts.vue'

const Alerts = {
    install(Vue) {
        Vue.component('Alerts', MyAlerts)
    }
}

export default Alerts