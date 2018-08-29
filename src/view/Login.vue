<template>
    <div>

        <div class="login-container animated fadeInDown">
            <div class="loginbox bg-white">
                <div class="loginbox-title">登录</div>
                <div class="loginbox-textbox">
                    <input type="text" class="form-control" v-model="username" placeholder="用户名"/>
                </div>
                <div class="loginbox-textbox">
                    <input type="password" class="form-control" v-model="password" placeholder="密码"/>
                </div>
                <div class="loginbox-submit">
                    <input type="button" class="btn btn-primary btn-block" value="登录" v-on:click="login()">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            login(){
                if(!this.username){
                    this.$store.commit('modalsError','请填写用户名')
                    return false
                }
                if(!this.password){
                    this.$store.commit('modalsError','请填写密码')
                    return false
                }
                this.$router.push({name:'Main'})
            }
        }
    }
</script>