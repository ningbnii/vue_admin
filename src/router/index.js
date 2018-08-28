import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'Login',
            component:Login
        },
        {
            path:'/main',
            name:'Main',
            component:Main
        }
    ]
})


