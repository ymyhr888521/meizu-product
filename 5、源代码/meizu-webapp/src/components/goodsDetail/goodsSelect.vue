<template>
    <div class="all">
        <div class="select">
            <span>已选</span>
            <p>全网通公开版，极光蓝，8+256GB，官方...</p>
            <span>x1</span>
            <a href="#"><img src="../../../static/dy.png"></a>
        </div>

        <div class="service">
          <span>服务</span>
          <p>
            <span>本商品由魅族负责发货和提供售后服务</span>
            <span>顺丰发货.7天无理由退货</span>
          </p>
          <a href="#"><img src="../../../static/dy.png"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsSelect"
    }
</script>

<style scoped>
  .all{
    display: flex;
    flex-direction: column;

    margin-top:.08rem;
    background-color: #f9f9f9;
  }
  .all>.select{
    display: flex;
    justify-content: space-between;
    padding:.27rem .25rem;
    align-items: center;
  background-color: #fff;


  }
  .all>.select>span:nth-of-type(1){
    color:#999;
    font-size:.15rem;
  }
  .all>.select>p{
    font-size: .18rem;
    color:#333;
  }
  .all>.select>a{
    width:.1rem;
    height:.17rem;
  }
  .all>.select>a>img{
    width:100%;
    height:100%;
  }


  .all>.service{
    display: flex;
    padding:.2rem .25rem  .23rem .25rem;
    align-items: center;
    justify-content: space-between;
    margin-top:.03rem;
    background-color: #fff;
  }
  .all>.service>span{
    color:#999;
    font-size:.15rem;
  }
  .all>.service>p{
    display: flex;
    flex-direction: column;
    margin-left:-.96rem;
  }
  .all>.service>p>span:nth-of-type(2){
    color:#999;
  }
  .all>.service>p>span:nth-of-type(1){
    color:#333;
  }


  .all>.service>a{
    width:.1rem;
    height:.17rem;
  }
  .all>.service>a>img{
    width:100%;
    height:100%;
  }


</style>
