<template>
  <div>
    <div>

    </div>
    <div class="header">
        <section>
            <h1>咖啡廳列表</h1>
        </section>
        <parallax :fixed="true">
            <div class="bg"></div>
            <div class="overlay"></div>
        </parallax>
    </div>
    <div class="list">
        <b-row>
            <b-col>
                <div>
                    <b-row align-h="center" class="py-5">
                            <b-col cols="auto">
                                <Button 
                                    :name="'新增咖啡廳'" 
                                    :backgroundColor="'#C8B09C'" 
                                    :textColor="'#fff'"
                                    @click.native="goCreate"
                                />
                            </b-col>
                    </b-row>
                </div>
                <ListItem
                    v-for="(item,index) in listTable"
                    :key="'coffeeList-'+index"
                    :striped="index%2==0?'colored':'light'"
                    :title="item.name"
                    :address="item.address"
                    :favorite="item.isFavorite"
                    @goEdit="goEdit(item)"
                    @goAddFavorite="goAddFavorite(item)"
                />
            </b-col>
        </b-row>
    </div>
    <!--新增咖啡廳-->
    <b-modal v-model="modalControl.createControl" centered hide-header hide-footer size="sm">
        <template #default>
            <b-row>
                <b-col>
                    <label>新增咖啡廳</label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <Input
                        v-model="createInput.name"
                        :placeholder="'請輸入店名'"
                        class="mb-3"
                    />
                    <Input
                        v-model="createInput.address"
                        :placeholder="'請輸入地址'"
                        class="mb-3"
                    />
                </b-col>
            </b-row>
            <b-row align-h="end">
                <!-- <b-col cols="auto">
                    <Button
                        :name="'刪除'"
                        :size="'sm'"
                        :backgroundColor="'#F17F5A'"
                    />
                </b-col> -->
                <b-col cols="auto">
                    <Button
                        :name="'儲存'"
                        :size="'sm'"
                        @click.native="goSave"
                    />
                </b-col>
            </b-row>
        </template>
    </b-modal>
    <!--編輯咖啡廳-->
    <b-modal v-model="modalControl.editControl" centered hide-header hide-footer size="sm">
        <template #default>
            <b-row>
                <b-col>
                    <label>編輯咖啡廳</label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <Input
                        v-model="selectInput.name"
                        :placeholder="'請輸入店名'"
                        class="mb-3"
                    />
                    <Input
                        v-model="selectInput.address"
                        :placeholder="'請輸入地址'"
                        class="mb-3"
                    />
                </b-col>
            </b-row>
            <b-row align-h="between">
                <b-col cols="auto">
                    <Button
                        :name="'刪除'"
                        :size="'sm'"
                        :backgroundColor="'#F17F5A'"
                        @click.native="goDelete"
                    />
                </b-col>
                <b-col cols="auto">
                    <Button
                        :name="'儲存'"
                        :size="'sm'"
                        @click.native="goEditSave"
                    />
                </b-col>
            </b-row>
        </template>
    </b-modal>
    <!--刪除咖啡廳-->
    <b-modal v-model="modalControl.deleteControl" centered hide-header hide-footer size="sm">
        <template #default>
            <b-row>
                <b-col class="text-center">
                    <label class="mt-5 mb-5">確認是否刪除</label>
                </b-col>
            </b-row>
            <b-row align-h="around">
                <b-col cols="auto">
                    <Button
                        :name="'取消'"
                        :size="'sm'"
                        :backgroundColor="'#fff'"
                        :borderStyle="'1px solid #C8B09C'"
                        :textColor="'#C8B09C'"
                        @click.native="modalControl.deleteControl=false"
                    />
                </b-col>
                <b-col cols="auto">
                    <Button
                        :name="'刪除'"
                        :size="'sm'"
                        @click.native="goDeleteSave"
                    />
                </b-col>
            </b-row>
        </template>
    </b-modal>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import Button from '@/components/ButtonComponent'
import ListItem from '@/components/CoffeeListitem'
import getApi from '@/mixin/getApi'
import Input from '@/components/InputComponent'
export default {
    mixins:[getApi],
    data:()=>({
        listTable:[],
        modalControl:{
            createControl:false,
            editControl:false,
            deleteControl:false
        },
        createInput:{
            name:'',
            address:''
        },
        selectInput:{
            name:'',
            address:'',
            id:''
        }
    }),
    components:{
        Parallax,
        Button,
        ListItem,
        Input
    },
    mounted(){
        this.goSearch()
    },
    methods:{
        goSearch() {
            this.posttheApi('/cafelist/query',{
                userId:'1'
            })
                .then((res)=>{
                    this.listTable = res.data
                    console.log(res)
                })
        },
        goCreate(){
            this.modalControl.createControl=true
        },
        goSave(){
            this.posttheApi('/cafelist/add',{
                name:this.createInput.name,
                address: this.createInput.address,
                latitude: '',
                longitude: ''
            })
                .then((res)=>{
                    console.log(res)
                    this.goSearch()
                })
                .finally(()=>{
                    this.modalControl.createControl=false
                })
        },
        goEdit(item){
            this.modalControl.editControl=true
            this.selectInput = item
        },
        goEditSave(){
            this.puttheApi('/cafelist/'+this.selectInput.id,{
                name: this.selectInput.name,
                address: this.selectInput.address,
                latitude: '',
                longitude: ''
            })
                .then((res)=>{
                    console.log(res)
                    this.goSearch()
                })
                .finally(()=>{
                    this.modalControl.editControl=false
                })
        },
        goDelete(){
            this.modalControl.editControl=false
            this.modalControl.deleteControl=true
        },
        goDeleteSave(){
            this.deletetheApi('/cafelist/'+this.selectInput.id)
                .then((res)=>{
                    console.log(res.data)
                    this.goSearch()
                })
                .finally(()=>{
                    this.modalControl.deleteControl=false
                })
        },
        goAddFavorite(item){
            if(item.isFavorite=='1'){
                //刪除
                this.deletetheApi('/favorite/1/'+item.id)
                    .then((res)=>{
                        console.log(res.data)
                        this.goSearch()
                    })
            }else{
                this.posttheApi('/favorite',{
                    cafeshopId: item.id,
                    userId: '1'
                })
                    .then((res)=>{
                        console.log(res.data)
                        this.goSearch()
                    })
            }
        }

    }
}
</script>
<style lang="scss">
.header{
    height: 200px;
    .bg{
        position: absolute;
        background-image: url('../assets/listHeader.jpg');
        background-position: center;
        height: 200px;
        width: 100%;
    }
    .overlay{
        position: absolute;
        background-color: rgba(0, 0, 0, 0.489);
        height: 200px;
        width: 100%;
    }
    section{
        position: absolute;
        width: 100%;
        height: 200px;

        h1{
            margin: 0;
            font-size: 3rem;
            letter-spacing: 0.2rem;
            text-align: center;
            color: #fff;
            font-family: 'Alata', sans-serif;
            top: 60%;
            left: 50%;
            transform: translate(-50%,-50%);
            position: absolute;
        }
    }
}
.list{
    background-color: #fff;
    padding: 0% 20%;
    overflow: scroll;
}
</style>