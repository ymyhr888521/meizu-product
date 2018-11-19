<template>
    <div class="cart">
        <goods-header></goods-header>
        <goods-cart-main></goods-cart-main>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import goodsHeader from '../components/goodsCart/goodsCartHeader'
    import goodsCartMain from '../components/goodsCart/goodsCartMain'
    import indexFooter from '../components/goodsCart/indexFooter'
    export default {
        name: "goodsCart",
        components:{
            goodsHeader,
            goodsCartMain,
            indexFooter
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
