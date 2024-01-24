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
                <span>咖啡廳列表</span>
            </div>
        </b-col>
        <b-col cols="auto">
            <div class="clipped">
                <img src="../assets/list_header.jpg"/>
            </div>
        </b-col>
    </b-row>
    <div class="list">
        <b-row>
            <b-col>
                <div>
                    <b-row align-h="center" class="py-5">
                            <b-col cols="auto">
                                <Button
                                    :name="'新增咖啡廳'"
                                    :borderStyle="'1px solid #979797'"
                                    :backgroundColor="'#fff'"
                                    :textColor="'#979797'"
                                    :borderRound="false"
                                    @click.native="goCreate"
                                />
                            </b-col>
                    </b-row>
                </div>
                <template v-if="Loading">
                    <div class="text-center">
                        <b-spinner style="color:#adadad"></b-spinner>
                    </div>
                </template>
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
        <b-row class="my-5">
            <b-col>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="10"
                    pills
                    align="center"
                    size="sm"
                    @input="goSearch"
                ></b-pagination>
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
                        :borderRound="true"
                        :backgroundColor="'#99D9E2'"
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
                        :borderRound="true"
                        @click.native="goDelete"
                    />
                </b-col>
                <b-col cols="auto">
                    <Button
                        :name="'儲存'"
                        :size="'sm'"
                        :borderRound="true"
                        :backgroundColor="'#99D9E2'"
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
                        :borderStyle="'1px solid #979797'"
                        :textColor="'#979797'"
                        :borderRound="true"
                        @click.native="modalControl.deleteControl=false"
                    />
                </b-col>
                <b-col cols="auto">
                    <Button
                        :name="'確認'"
                        :size="'sm'"
                        :borderRound="true"
                        :backgroundColor="'#99D9E2'"
                        @click.native="goDeleteSave"
                    />
                </b-col>
            </b-row>
        </template>
    </b-modal>
  </div>
</template>

<script>
import Button from '@/components/ButtonComponent'
import ListItem from '@/components/CoffeeListitem'
import getApi from '@/mixin/getApi'
import Input from '@/components/InputComponent'
import OptionBtn from '@/components/ButtonOption.vue'
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
        },
        Loading:false,
        currentPage:1,
        rows:0
    }),
    components:{
        Button,
        ListItem,
        Input,
        OptionBtn
    },
    mounted(){
        this.goSearch()
    },
    methods:{
        goSearch() {
            this.Loading=true
            this.posttheApi('/cafelist/query?page='+this.currentPage,{
                userId:'1'
            })
                .then((res)=>{
                    this.listTable = res.data.data
                    this.rows=res.data.pagination.totalItems
                })
                .finally(()=>{
                    this.Loading=false
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
        },
        toHome(){
            this.$router.push('/home')
        },

    }
}
</script>