<template>
  <div class="button" :style="{'background-color':backgroundColor,'color':textColor}">
    {{name}}
  </div>
</template>

<script>
export default {
    props:['name','backgroundColor','textColor']
}
</script>

<style lang='scss'>
.button{
    cursor: pointer;
    border-radius: 3.125rem;
    background: #C8B09C;
    color: #fff;
    letter-spacing: 0.1rem;
    padding: 0.8rem 2.8rem;
    justify-content: center;
    align-items: center;
}
.button:hover{
    filter: brightness(90%);
}
.button:active{
    filter: brightness(80%);
    scale: 0.95;
}
</style>