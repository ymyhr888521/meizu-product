<template>
    <div class="order">
        <div class="top">
            <h3>我的订单</h3>
            <a href="#">
                <span>全部订单</span>
                <img src="../../../static/dy.png" >
            </a>
        </div>


        <div class="bottom">
            <ul>
                <li v-for="(item,index) in imgs">
                    <a href="#">
                        <img :src="item">
                        <span>{{intro[index]}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myOrder",
        data(){
            return {
                imgs:['../../../static/1w.png','../../../static/2w.png','../../../static/3w.png','../../../static/4w.png'],
                intro:['待付款','待发货','待收货','退款/售后']
            }
        }
    }
</script>

<style scoped>

  .order{
      background: #fff;
      display: flex;
      flex-direction: column;
      padding:0 .23rem;
  }
  .order>.top{
    height:.59rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
  }
  .order>.top>h3{
      font-size: .2rem;
      color:#000;
  }
  .order>.top>a{
      display: flex;
      align-items: center;
  }
  .order>.top>a>img{
      width:.1rem;
      height:.17rem;
  }
  .order>.top>a>span{
      color:#666;
      font-size: .18rem;
      padding:0 .15rem;

  }

  .order>.bottom{
      padding:.3rem 0;
  }
  .order>.bottom>ul{
      height:.65rem;
      display: flex;
  }
  .order>.bottom>ul>li{
      flex:0 0 25%;
  }
  .order>.bottom>ul>li>a{
      display: flex;
      height:100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding:0 .15rem;
  }
  .order>.bottom>ul>li>a>img{
      width:.46rem;
      height:.33rem;
  }

  .order>.bottom>ul>li>a>span{
      font-size: .17rem;
      color:#000;
      font-weight: bold;
  }

</style>
