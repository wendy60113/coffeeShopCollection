<template>
    <div>
        <div class="landing">
            <section>
                <b-row align-h="center">
                    <b-col cols="12">
                        <h1>Coffee Shop Collection</h1>
                    </b-col>
                    <b-col cols="auto" class="mt-5">
                        <Button 
                            :name="'咖啡廳列表'" 
                            :backgroundColor="'#C8B09C'" 
                            :textColor="'#fff'"
                            @click.native="toList"
                        />
                    </b-col>
                    <b-col  cols="auto" class="mt-5">
                        <Button 
                            :name="'我的最愛'" 
                            :backgroundColor="'#fff'" 
                            :textColor="'#4F453D'"
                        />
                    </b-col>
                </b-row>
            </section>
            <parallax :fixed="true">
                <div class="bg"></div>
                <div class="overlay"></div>
            </parallax>
        </div>
        <div class="recommendPage">
            <h1>隨機推薦</h1>
            <b-row class="mt-5" align-h="around">
                <b-col cols="auto" class="mb-3">
                    <CoffeeImgitem/>
                </b-col>
                <b-col cols="auto" class="mb-3">
                    <CoffeeImgitem/>
                </b-col>
                <b-col cols="auto" class="mb-3">
                    <CoffeeImgitem/>
                </b-col>
            </b-row>
            <b-row align-h="center" class="mt-3">
                <b-col cols="auto">
                    <Button 
                        :name="'查看更多'" 
                        :backgroundColor="'#C8B09C'" 
                        :textColor="'#fff'"
                        @click.native="toList"
                    />
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import Button from '@/components/ButtonComponent'
import CoffeeImgitem from '@/components/CoffeeImgitem'
export default {
    components:{
        Parallax,
        Button,
        CoffeeImgitem,
    },
    methods:{
        toList(){
            this.$router.push('/list')
        },
    }
}
</script>