<template>
    <div class="cart-header">
        <div>
            <div><span>购物车</span></div>
            <div><span>编辑</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsCartHeader"
    }
</script>

<style scoped>
.cart-header{
    padding:.24rem .24rem;
    border-bottom: 1px solid #E6E6E6;

    background-color: #fff;
}
.cart-header>div{
    height:.23rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart-header>div>div:nth-of-type(1)>span{
  color:#666;
  font-size: .23rem;
}
.cart-header>div>div:nth-of-type(2)>span{
  color:#1B89E8;
  font-size: .23rem;
}

</style>
