<template>
  <div>
    <div class="homeBtn">
        <OptionBtn
            :icon="'house-door-fill'"
            :size="'lg'"
            @click.native="toHome"
        />
    </div>
    <b-row class="mt-5 header" align-h="end">
        <b-col cols="1" class="px-2">
            <div class="title mt-5">
                <span>我的最愛列表</span>
            </div>
        </b-col>
        <b-col cols="auto">
            <div class="clipped">
                <img src="../assets/favorite_header.jpg"/>
            </div>
        </b-col>
    </b-row>
    <div class="list">
        <b-row>                
            <template v-if="listTable.length==0">
                <b-col class="mt-5 text-center">
                    <span class="tip_text">尚未新增我的最愛資料</span>
                </b-col>
            </template>
            <template v-else>
                <b-col class="mt-5">
                    <ListItem   
                        v-for="(item,index) in listTable"
                        :key="'coffeeList-'+index"
                        :striped="index%2==0?'colored':'light'"
                        :title="item.name"
                        :address="item.address"
                        :favorite="item.isFavorite"
                        :editView="false"
                        @goAddFavorite="goAddFavorite(item)"
                    />
                </b-col>
            </template>
        </b-row>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/CoffeeListitem'
import getApi from '@/mixin/getApi'
import OptionBtn from '@/components/ButtonOption.vue'
export default {
    mixins:[getApi],
    data:()=>({
        listTable:[]
    }),
    components:{
        ListItem,
        OptionBtn
    },
    mounted(){
        this.goSearch()
    },
    methods:{
        goSearch() {
            this.gettheApi('/favorite')
                .then((res)=>{
                    this.listTable = res.data.list
                })
        },
        goAddFavorite(item){
            //刪除
            this.deletetheApi('/favorite/1/'+item.cafeshopId)
                .then(()=>{
                    this.goSearch()
                })
        },
        toHome(){
            this.$router.push('/home')
        },
    }
}
</script>