import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        modals:{
            showModal:false,
            msg:'',
            type:1
        }
    },
    mutations: {
        setShowModal(state, data) {
            state.modals.showModal = data.showModal || false
            state.modals.msg = data.msg || ''
            state.modals.type = data.type || 1
        }
    }
})

export default store