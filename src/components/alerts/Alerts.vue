<template>
    <div v-show="show">
        <div class="alert alert-danger fade in radius-bordered alert-shadowed" v-show="type == 'success'">
            <button class="close" data-dismiss="alert">
                ×
            </button>
            <i class="fa-fw fa fa-times"></i>
            <strong>Error!</strong> Update has failed.
        </div>

        <div class="alert alert-success fade in radius-bordered alert-shadowed" v-show="type == 'error'">
            <button class="close" data-dismiss="alert">
                ×
            </button>
            <i class="fa-fw fa fa-check"></i>
            <strong>Success</strong> Two Tasks Are Completed.
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Alerts',
        computed: {
            show() {
                return this.$store.state.alerts.show
            },
            msg() {
                return this.$store.state.alerts.msg
            },
            type() {
                return this.$store.state.alerts.type
            }
        },
        methods: {
            hidden() {
                this.$store.commit('alertsHide')
            }
        }
    }
</script>