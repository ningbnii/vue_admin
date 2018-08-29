import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        modals: {
            show: false,
            msg: '',
            type: 'success',
        },
        alerts: {
            show: false,
            msg: '',
            type: 'success'
        },
        token: ''
    },
    mutations: {
        /**
         * modal success
         * @param state
         * @param msg
         */
        modalsSuccess(state, msg) {
            state.modals.show = true
            state.modals.msg = msg
            state.modals.type = 'success'
        },
        /**
         * modal error
         * @param state
         * @param msg
         */
        modalsError(state,msg){
            state.modals.show = true
            state.modals.msg = msg
            state.modals.type = 'error'
        },
        /**
         * hide modal
         * @param state
         */
        modalsHide(state){
            state.modals.show = false
        },
        /**
         * alerts success
         * @param state
         * @param msg
         */
        alertsSuccess(state,msg){
            state.alerts.show = true
            state.alerts.msg = msg
            state.alerts.type = 'success'
        },
        /**
         * alerts error
         * @param state
         * @param msg
         */
        alertsError(state,msg){
            state.alerts.show = true
            state.alerts.msg = msg
            state.alerts.type = 'error'
        },
        /**
         * alerts hide
         * @param state
         */
        alertsHide(state){
            state.alerts.show = false
        }
    }
})

export default store