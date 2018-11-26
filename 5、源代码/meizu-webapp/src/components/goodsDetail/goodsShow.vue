<template>
    <div class="all">
        <div class="fixed">
            <div><a href="#"><img src="../../../static/xqleft.png"></a></div>
            <div><a href="#"><img src="../../../static/xqright.png"></a></div>
        </div>



        <div class="swiper-container">
            <div class="swiper-wrapper">
                <img src="../../../static/slide1.jpg" class="swiper-slide">
                <img src="../../../static/slide2.jpg" class="swiper-slide">
                <img src="../../../static/slide3.jpg" class="swiper-slide">
                <img src="../../../static/slide4.jpg" class="swiper-slide">
            </div>
        </div>

    </div>
</template>

<script>
  import Swiper from  'swiper/dist/js/swiper'
    export default {
        name: "goodsShow",
        mounted() {
          new Swiper(
            '.swiper-container',
            {
              // autoplay: true,
              speed:300,
              loop:true,//无限轮播
              autoplay:{
                disableOnInteraction:false
              },
            })
        }
    }
</script>

<style scoped>
  .all{
      width:100%;
  }
  .swiper-slide{
      width:100%;
      height:100%;
  }



  .fixed{
      z-index: 99;
      position: fixed;
      top:0;
      left:0;
      width:100%;
      height:.73rem;
      padding:.16rem .24rem;
      display: flex;
      justify-content: space-between;
      background: transparent;
  }
 .fixed>div{
      height:100%;
    }
 .fixed>div>a{
      width:.41rem;
      height:.41rem;
    }
 .fixed>div>a>img{
    height:100%;
    width:.41rem;
    border-radius:50%;
    overflow: hidden;
 }



</style>
