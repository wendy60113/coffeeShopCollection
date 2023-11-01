<template>
  <div class="modal">
    <b-modal v-model="modalControl" centered hide-header hide-footer size="sm">
        <template #default>
            <b-row v-if="type=='modal'">
                <b-col>
                    <label>{{title}}</label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <slot name="content"></slot>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <slot name="footer"></slot>
                </b-col>
            </b-row>
        </template>
    </b-modal>
  </div>
</template>

<script>
export default {
    props:['type','title'],
    computed:{
        modalControl:{
            get: function() {
                return this.value
            },
            set: function(value) {
                this.$emit('control',value)
            }
        }
    },
}
</script>

<style lang="scss">
.modal{
    color: #4F453D;

    label{
        letter-spacing: 0.05rem;
    }
}
.modal-footer{
    border-top: 0px;
}
</style>