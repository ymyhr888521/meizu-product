<template>
    <div class="all">
        <div class="top">
            <a href="#" class="changeicon all-icon"><img src="../../assets/img/full.png"></a>
            <div class="right">
                <span>全选</span>
                <h4>总计:<span>￥8994.00</span></h4>
                <input type="button" value="结算">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "goodsCartTotal"
    }
</script>

<style scoped>
.all{
    background: #fff;
    height:.75rem;
    width:100%;
    border-top:1px solid #e4e4e4;
    position: fixed;
    bottom: .72rem;
}
.all>.top{
    display: flex;
    height:100%;
    align-items: center;

}
.all>.top>a{
    width:.33rem;
    height:.33rem;
    margin:0 .24rem;
}

.all>.top>a>img{
    width:100%;
    height:100%;
}

.all>.top>.right {
    display: flex;
    flex:1;
    height:100%;
    justify-content: space-between;
    align-items: center;
}
.all>.top>.right>span{
    padding-left:.13rem;
    color:#666;
    font-size: .2rem;
}
.all>.top>.right>h4{
  padding-left:.6rem;
  color:#666;
  font-size: .2rem;
}
.all>.top>.right>h4>span{
  font-size: .15rem;
  color:#ff3366;
}

.all>.top>.right>input{
    width:1.65rem;
    height:100%;
    background: #ff2255;
    border:none;
    color:#fff;
    font-size: .23rem;
}

</style>
