<template>
    <div class="main">
        <my-order></my-order>
        <service-list></service-list>
    </div>

</template>

<script>
    import MyOrder from "./myOrder";
    import ServiceList from "./serviceList";
    import IndexFooter from "../index/indexFooter";
    export default {
        name: "mineMain",
      components: {IndexFooter, ServiceList, MyOrder}
    }
</script>

<style scoped>
.main{
    flex:1;
    overflow: auto;
}
</style>
