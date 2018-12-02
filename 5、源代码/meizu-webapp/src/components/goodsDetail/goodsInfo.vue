<template>
    <main class="main">
        <goods-show></goods-show>
        <goods-price></goods-price>
        <goods-select></goods-select>
        <index-star-pro :msg="msg.indexStarPro" v-if="msg.indexStarPro"></index-star-pro>
    </main>
</template>

<script>
    import GoodsShow from "./goodsShow";
    import GoodsPrice from "./goodsPrice";
    import GoodsSelect from "./goodsSelect";
    import IndexStarPro from "../index/indexStarPro";

    export default {
        name: "goodsInfo",
        props:['msg'],
        components: {IndexStarPro, GoodsSelect, GoodsPrice, GoodsShow}
    }
</script>

<style scoped>
.main{
  flex:1;
  overflow: auto;
  background-color: #f9f9f9;
}
</style>
