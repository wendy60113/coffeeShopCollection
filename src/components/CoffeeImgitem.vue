<template>
  <div class="imgItem">
    <div class="bg"></div>
    <div class="mt-2"><span>店名</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.imgItem{
    cursor: pointer;
    text-align: center;
    width: 250px;
    .bg{
        background-image: url('../assets/shop1.jpg'); 
        background-position: center;
        width: 250px;
        height: 250px;
    }
    span{
        font-weight: 300;
    }
}
.imgItem:active{
    scale: 0.95;
}
</style>