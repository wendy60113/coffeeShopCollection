<template>
  <div 
    class="button" 
    :style="{'background-color':backgroundColor,'color':textColor,'border':borderStyle,'border-radius':borderRound?'3.125rem':'0rem'}"
    :class="size?size:''"
  >
    {{name}}
  </div>
</template>

<script>
export default {
    props:['name','backgroundColor','textColor','size','borderStyle','borderRound']
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
    text-align: center;
}
.sm{
  padding: 0.5rem 2rem;
  font-size: 0.9rem;
}
.button:hover{
    filter: brightness(95%);
}
.button:active{
    filter: brightness(95%);
    scale: 0.95;
}
</style>