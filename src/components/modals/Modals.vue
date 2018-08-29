<template>
    <div v-show="show">
        <!--Success Modal Templates-->
        <div id="modal-success" class="modal modal-message modal-success animated bounceIn" style="display: block;"
             v-show="type == 'success'">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <i class="glyphicon glyphicon-check"></i>
                    </div>
                    <div class="modal-title">Success</div>

                    <div class="modal-body">{{msg}}</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="hidden()">OK
                        </button>
                    </div>
                </div> <!-- / .modal-content -->
            </div> <!-- / .modal-dialog -->
        </div>
        <!--End Success Modal Templates-->

        <!--Danger Modal Templates-->
        <div id="modal-danger" class="modal modal-message modal-danger animated bounceIn" style="display: block;"
             v-show="type == 'error'">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <i class="glyphicon glyphicon-fire"></i>
                    </div>
                    <div class="modal-title">Error</div>

                    <div class="modal-body">{{msg}}</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="hidden()">OK
                        </button>
                    </div>
                </div> <!-- / .modal-content -->
            </div> <!-- / .modal-dialog -->
        </div>
        <!--End Danger Modal Templates-->
        <!--End Info Modal Templates-->
        <div class="modal-backdrop fade in"></div>
    </div>
</template>

<script>
    export default {
        name: 'Modals',
        computed: {
            show() {
                return this.$store.state.modals.show
            },
            msg() {
                return this.$store.state.modals.msg
            },
            type() {
                return this.$store.state.modals.type
            }
        },
        methods: {
            hidden() {
                this.$store.commit('modalsHide')
            }
        }


    }
</script>