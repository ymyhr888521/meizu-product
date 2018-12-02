<template>
    <div class="price">
        <div>
            <p>魅族 16th Plus</p>
            <a href="#"><img src="../../../static/share.png"></a>
        </div>
        <div><p>骁龙845 屏幕下指纹</p></div>
        <div><p>￥4098.00</p></div>
    </div>
</template>

<script>
    export default {
        name: "goodsPrice"
    }
</script>

<style scoped>
  .price{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding:0 .25rem;
      background-color: #fff;
  }
  .price>div{
    padding:.1rem 0;
  }

  .price>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
  }
  .price>div:nth-of-type(1)>p{
      font-size: .21rem;
      color:#333;
      font-weight: 600;
  }
  .price>div:nth-of-type(1)>a{
    width:.3rem;
    height:.28rem;
  }
  .price>div:nth-of-type(1)>a>img{
    width:100%;
    height:100%;
  }
  .price>div:nth-of-type(2)>p{
    font-size: .18rem;
    color:#999;
  }
  .price>div:nth-of-type(3)>p{
    font-size: .24rem;
    color:#ff3366;
  }
</style>
