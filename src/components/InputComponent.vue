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
    border-radius: 4px;
    border: 1px solid #C8B09C;
    width:100%;
    height: 2.5rem;
    
    color: #4F453D;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    
}
input::placeholder {
    color: #4f453d65;
}
</style>