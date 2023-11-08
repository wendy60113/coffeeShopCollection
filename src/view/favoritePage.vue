<template>
  <div>
    <div class="menuButton">
        <b-row align-h="end">
            <b-col cols="auto" align-self="end" class="mb-5">
                <MenuButton @click.native="toHome"/>
            </b-col>
        </b-row>
    </div>
    <div class="header">
        <section>
            <h1>我的最愛列表</h1>
        </section>
        <parallax :fixed="true">
            <div class="bg"></div>
            <div class="overlay"></div>
        </parallax>
    </div>
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
import Parallax from 'vue-parallaxy'
import ListItem from '@/components/CoffeeListitem'
import getApi from '@/mixin/getApi'
import MenuButton from '@/components/MenuButton'
export default {
    mixins:[getApi],
    data:()=>({
        listTable:[]
    }),
    components:{
        Parallax,
        ListItem,
        MenuButton
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