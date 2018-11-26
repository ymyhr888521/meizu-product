<template>
    <div class='full'>
        <order></order>
       <order-main :msg="msg"></order-main>
    </div>
</template>

<script>
    import Order from "../components/MyOrder/order";
    import OrderMain from "../components/MyOrder/orderMain";
    import apis from '../apis/apis'
    export default {
      name: "MyOrder",
      components: {OrderMain, Order},
      data(){
        return{
          msg:{}
        }
      },
      mounted(){
        this. _buyOrderComponent();
      },
      methods:{
        _buyOrderComponent(){
          apis.getData(data=>{
            this.msg = data;
          })
        }
      },
    }
</script>

<style scoped>
.full{
 display: flex;
  height:100%;
  flex-direction: column;
}
</style>
