<template>
    <div class="main">
        <order-list :msg="msg.buyList"></order-list>
    </div>
</template>

<script>
    import OrderList from "./orderList";
    export default {
        name: "orderMain",
        props:["msg"],
      components: {OrderList},
    }
</script>

<style scoped>
.main{
    flex:1;
    overflow: auto;
    background: #EEEEEE;
}
</style>
