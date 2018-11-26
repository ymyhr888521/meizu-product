<template>
    <div class="main">
        <my-order :msg="msg.myOrder"></my-order>
        <service-list :msg="msg.serviceList"></service-list>
    </div>

</template>

<script>
    import MyOrder from "./myOrder";
    import ServiceList from "./serviceList";
    import IndexFooter from "../index/indexFooter";
    export default {
        name: "mineMain",
        props:['msg'],
      components: {IndexFooter, ServiceList, MyOrder}
    }
</script>

<style scoped>
.main{
    flex:1;
    overflow: auto;
}
</style>
