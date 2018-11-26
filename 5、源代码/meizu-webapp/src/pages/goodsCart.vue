<template>
    <div class="cart" v-if="msg.phoneList">
        <goods-header></goods-header>
        <goods-cart-main :msg="msg"></goods-cart-main>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import goodsHeader from '../components/goodsCart/goodsCartHeader'
    import goodsCartMain from '../components/goodsCart/goodsCartMain'
    import indexFooter from '../components/index/indexFooter'
    import apis from  '../apis/apis'
    export default {
        name: "goodsCart",
        components:{
            goodsHeader,
            goodsCartMain,
            indexFooter
        },
      data(){
        return {
          msg:{}
        }
      },
      mounted(){
        this. _goodsComponent();
      },
      methods:{
        _goodsComponent(){
          apis.getData(data=>{
            this.msg = data;
          })
        }
      }
    }
</script>

<style scoped>

  .cart{
      display: flex;
      height:100%;
      flex-direction: column;
      background-color: #F2F2F2;
  }
</style>
