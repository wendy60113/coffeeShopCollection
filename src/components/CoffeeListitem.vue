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
                <b-col cols="auto" v-if="editView">
                    <OptionBtn
                        :icon="'pencil-square'"
                        @click.native="goEdit"
                    />
                </b-col>
                <b-col cols="auto">
                    <OptionBtn
                        :icon="favorite=='1'?'heart-fill':'heart'"
                        @click.native="goAddFavorite"
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
    props:{
        striped: String,
        title: String,
        address: String,
        favorite: String,
        editView: {
            type: Boolean,
            default: true
        }
    },
    components:{
        OptionBtn
    },
    methods:{
        goEdit(){
            this.$emit('goEdit')
        },
        goAddFavorite(){
            this.$emit('goAddFavorite')
        }
    }
}
</script>

<style lang="scss" scoped>
.listItem{
    .title{
        color: #333;
        font-weight: 500;
    }
    .address{
        color: #333;
        font-weight: 300;
    }
}
.light{
    background-color: #fff;
}
.colored{
    background-color: rgba(151, 151, 151, 0.07);
}
</style>