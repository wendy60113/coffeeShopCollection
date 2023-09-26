<template>
  <div class="optionbtn">
    <b-icon :icon="icon" style="color: #C8B09C"></b-icon>
  </div>
</template>

<script>
export default {
    props:['icon']
}
</script>

<style lang="scss">
.optionbtn{
    width: 2rem;
    height: 2rem;
    // padding: 0.5rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 30px;
    cursor: pointer;
}
.optionbtn:hover{
    background-color: #f3ece7;
}
.optionbtn:active{
    scale: 0.95;
    background-color: #eaded6;
}
</style>