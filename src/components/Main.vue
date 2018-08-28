<template>
    <div>
        <a href="javascript:void(0);" class="btn btn-success shiny" @click="success()">success</a>
        <a href="javascript:void(0);" class="btn btn-danger shiny" @click="error()">error</a>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        methods:{
            success() {
                this.$store.commit('setShowModal',{showModal:true,msg:'hello world',type:'success'})
            },
            error(){
                this.$store.commit('setShowModal',{showModal:true,msg:'发生了错误',type:'error'})
            }
        }
    }
</script>