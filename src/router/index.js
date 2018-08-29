import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/vuex'
import Login from '@/view/Login'
import Main from '@/view/Main'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/:redirect?',
            name:'Login',
            component:Login
        },
        {
            path:'/main',
            name:'Main',
            component:Main,
            meta:{
                requireAuth:true
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
    // 判断路由是否需要登录权限
    if(to.meta.requireAuth){
        // 通过vuex state获取当前的token是否存在
        if(store.state.token){
            next()
        }else{
            next({
                path:'/login',
                query:{redirect:to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }else{
        next()
    }
})

export default router


