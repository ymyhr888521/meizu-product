<template>
    <div class="all">
        <div class="top">
           <router-link to="/mine"><img src="../../../static/xy.png" ></router-link>
           <h3>我的订单</h3>
        </div>
        <div class="bottom order-nav">
            <ul>
                <li><span>全部</span></li>
                <li><span>待付款</span></li>
                <li><span>待发货</span></li>
                <li><span>待收货</span></li>
                <li><span>退款/售后</span></li>
            </ul>
            <span class="icon-span"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order",
        mounted(){
            this._click();
        },
        methods:{
            _click(){
                $('.order-nav li').each(function(){
                    $(this).click(function(){
                      let left1 = $(this).position().left;
                      let w1 = $(this).css('width');
                      $('.icon-span').animate({
                        left:left1,
                        width:w1
                      },240);
                      $(this).find('span').css({'color':'#3399cc'});
                      $(this).siblings().find('span').css({'color':'#333'});

                    })
                })
            }
        },

    }
</script>

<style scoped>

  .all{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .all>.top{
      width:100%;
      display: flex;
      height:.72rem;
      padding:.23rem .24rem;
      align-items: center;
  }
  .all>.top>a{
    width:.17rem;
    height:.27rem;
  }
  .all>.top>a>img{
    width:.17rem;
    height:.27rem;
  }
  .all>.top>h3{
    padding: 0 .2rem;
    font-size:.23rem;
    color:#666;
  }


  .all>.bottom{
      height:.69rem;
      width:100%;
      border-top:1px solid #e8e8e8;
      padding:0 .03rem;
      position: relative;

  }
  .all>.bottom>ul{
      height:100%;
      width:100%;
      line-height:.69rem;
      display: flex;
      justify-content: space-around;
  }
  .all>.bottom>ul>li{
      height:100%;

  }
  .all>.bottom>ul>li>span{
    height:100%;
    color:#333333;
    font-size: .2rem;
  }
  .all>.bottom>ul>li:first-of-type>span{
    color:#3399cc;
  }
  .all>.bottom>span{
      width:.42rem;
      height:.03rem;
      background:#00ccff;
      position: absolute;
      left:.21rem;
      bottom:-0.015rem;
      display: inline-block;
  }



</style>
