<template>
    <div class="all">
        <goods-show></goods-show>
    </div>
</template>

<script>
    import GoodsShow from "../components/goodsDetail/goodsShow";
    export default {
        name: "goodsDetail",
      components: {GoodsShow}
    }
</script>

<style scoped>
.all{
    display:flex;
    height:100%;
    flex-direction: column;
}

</style>
