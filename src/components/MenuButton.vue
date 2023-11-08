<template>
    <div class="menu">
        <div 
            class="button" 
            :style="{'background-color':backgroundColor,'color':textColor}"
        >
            <b-icon icon="house-fill"></b-icon>
        </div>
    </div>
</template>

<script>
export default {
    props:['name','backgroundColor','textColor','size','borderStyle']
}
</script>

<style scoped lang='scss'>
.menu{
    .button{
        cursor: pointer;
        background: #C8B09C;
        color: #fff;
        padding: 0.8rem;
        justify-content: center;
        align-items: center;
        border-radius: 0;
    }
    .button:hover{
        filter: brightness(90%);
    }
    .button:active{
        filter: brightness(80%);
        scale: 0.95;
    }

}
</style>