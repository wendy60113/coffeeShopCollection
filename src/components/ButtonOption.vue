<template>
  <div class="option">
    <div class="optionbtn" :class="size?size:''">
      <b-icon :icon="icon" style="color: #979797" :scale="size=='lg'?'1.2':'1'"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
    props:['icon','size']
}
</script>

<style lang="scss">
.option{
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
      background-color: rgba(151, 151, 151, 0.1);
  }
  .optionbtn:active{
      scale: 0.95;
      background-color: rgba(151, 151, 151, 0.1);
  }
  .lg{
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    background-color: #F8F8F8;
  }
}
</style>