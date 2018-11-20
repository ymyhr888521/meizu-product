<template>
    <div class="main">
        <goods-cart-list></goods-cart-list>
        <index-hot-phone></index-hot-phone>
        <goods-cart-total></goods-cart-total>

    </div>
</template>

<script>
    import GoodsCartList from "./goodsCartList";
    import IndexHotPhone from "../index/indexHotPhone";
    import GoodsCartTotal from "./goodsCartTotal";
    export default {
        name: "goodsCartMain",
      components: {GoodsCartTotal, IndexHotPhone,GoodsCartList}
    }
</script>

<style scoped>
  .main{
      flex:1;
      overflow: auto;
      padding-bottom: .66rem;
  }

</style>
