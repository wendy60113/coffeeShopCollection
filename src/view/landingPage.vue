<template>
    <div>
        <b-row class="mt-5 landing">
            <b-col cols="12" md="5">
                <b-row align-h="end" class="px-3 info">
                    <b-col cols="12" class="title">
                        <span>咖 啡 地 圖</span>
                    </b-col>
                    <b-col cols="auto" md="6">
                        <b-row align-h="end">
                            <b-col cols="auto" class="mb-3">
                                <Button
                                    :name="'查看列表'"
                                    :borderStyle="'1px solid #979797'"
                                    :backgroundColor="'#fff'"
                                    :textColor="'#979797'"
                                    :borderRound="false"
                                    @click.native="toList"
                                />
                            </b-col>
                            <b-col cols="auto">
                                <Button
                                    :name="'我的最愛'"
                                    :borderStyle="'1px solid #979797'"
                                    :backgroundColor="'#fff'"
                                    :textColor="'#979797'"
                                    :borderRound="false"
                                    @click.native="toFavorite"
                                />
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="7">
                <div class="bg">
                    <svg class="svg" width="450" height="507" viewBox="0 0 450 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="my-clip-path">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71571 0 15V457.778C10.5354 463.298 20.3131 469.653 29.9341 475.907L29.9346 475.908C53.7543 491.391 76.6137 506.25 107.635 506.25C136.778 506.25 166.587 496.091 199.376 484.916C239.453 471.257 283.983 456.081 337.196 456.081C387.129 456.081 420.794 465.806 450 476.693V15C450 6.71573 443.284 0 435 0H15Z" fill="#D9D9D9"/>
                        </clipPath>
                    </svg>
                </div>
                <div class="clipped">
                    <img src="../assets/landing_bg.jpg"/>
                </div>
            </b-col>
        </b-row>
        <b-row class="recommend mb-5" align-h="center">
            <b-col cols="12" class="title text-center">
                <span>隨 機 推 薦</span>
            </b-col>
            <b-col
                v-for="(item,idx) in recommendData"
                :key="'shop-'+idx"
                cols="auto" 
                class="shop_card"
                :style="'margin-top:'+(5+idx*4)+'rem'"
            >
                <div class="bg">
                    <svg class="svg" width="250" height="300" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect id="rect-clip" width="250" height="300" fill="#000"/>
                    </svg>
                </div>
                <div class="clipped">
                    <img :src="require(`../assets/${item.img}.jpg`)"/>
                </div>
                <span class="title">{{item.name}}</span>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Button from '@/components/ButtonComponent'
import getApi from '@/mixin/getApi'
export default {
    mixins:[getApi],
    data:()=>({
        recommendData:[],
    }),
    components:{
        Button,
    },
    mounted(){
        this.getDetail()
    },
    methods:{
        toList(){
            this.$router.push('/list')
        },
        toFavorite(){
            this.$router.push('/favorite')
        },
        getDetail() {
            this.posttheApi('/cafelist/query',{
                userId:'1'
            })
                .then((res)=>{
                    for(let i=0;i<3;i++){
                        let num
                        num = Math.floor(Math.random() * res.data.data.length)+1
                        this.recommendData.push({
                            img:'shop_bg_'+(this.recommendData.length+1),
                            name: res.data.data[num-1].name
                        })
                    }
                })
                .finally(()=>{
                    this.Loading=false
                })
        },
    }
}
</script>