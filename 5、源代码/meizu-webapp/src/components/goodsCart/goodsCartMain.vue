<template>
    <div class="main">
        <goods-cart-list :msg="msg.phoneList"></goods-cart-list>
        <index-hot-phone :msg="msg.indexHotPhone"></index-hot-phone>
        <goods-cart-total></goods-cart-total>

    </div>
</template>

<script>
    import GoodsCartList from "./goodsCartList";
    import IndexHotPhone from "../index/indexHotPhone";
    import GoodsCartTotal from "./goodsCartTotal";
    export default {
        name: "goodsCartMain",
        props:['msg'],
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
