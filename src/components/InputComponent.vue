<template>
    <input 
        v-model="inputData"
        :placeholder="placeholder"
    />
</template>

<script>
export default {
    props:['placeholder'],
    computed:{
        inputData:{
            get: function() {
                return this.value
            },
            set: function(value) {
                this.$emit('input',value)
            }
        }
    },
}
</script>

<style lang="scss">
input{
    border: 1px solid #979797;
    width:100%;
    height: 2.5rem;
    
    color: #333;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    
}
input::placeholder {
    color: #adadad;
}
</style>