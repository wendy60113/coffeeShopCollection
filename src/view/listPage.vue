<template>
  <div>
    <div class="header">
        <parallax fixed="true">
            <div class="bg"></div>
            <div class="overlay"></div>
        </parallax>
        <section>
            <h1>咖啡廳列表</h1>
        </section>
    </div>
    <div>
        <b-row align-h="center" class="py-5">
                <b-col cols="auto">
                    <Button 
                        :name="'新增咖啡廳'" 
                        :backgroundColor="'#C8B09C'" 
                        :textColor="'#fff'"
                    />
                </b-col>
        </b-row>
    </div>
    <div class="list">
        <b-row>
            <b-col>
                <ListItem
                    :striped="'colored'"
                />
                <ListItem
                    :striped="'light'"
                />
            </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ButtonComponent'
import ListItem from '@/components/CoffeeListitem'
export default {
    components:{
        Button,
        ListItem
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
    padding: 0 20%;
}
</style>