<template>
  <div class="listItem px-5 py-3" :class="striped">
    <b-row align-h="between">
        <b-col cols="8">
            <b-row>
                <b-col cols="12 mb-1">
                    <span class="title">{{title}}</span>
                </b-col>
                <b-col cols="12">
                    <span class="address">{{address}}</span>
                </b-col>
            </b-row>
        </b-col>
        <b-col>
            <b-row align-h="end" style="height:100%" align-v="center">
                <b-col cols="auto">
                    <OptionBtn
                        :icon="'pencil-square'"
                    />
                </b-col>
                <b-col cols="auto">
                    <OptionBtn
                        :icon="'heart'"
                    />
                </b-col>
            </b-row>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import OptionBtn from '@/components/ButtonOption.vue'
export default {
    props:['striped','title','address'],
    components:{
        OptionBtn
    }
}
</script>

<style lang="scss" scoped>
.listItem{
    .title{
        color: #4F453D;
        font-weight: 500;
    }
    .address{
        color: #4F453D;
        font-weight: 300;
    }
}
.light{
    background-color: #fff;
}
.colored{
    background-color: #FBF8F6;
}
</style>