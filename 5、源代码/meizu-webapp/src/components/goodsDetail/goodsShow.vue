<template>
    <div class="all">
        <div class="fixed">
            <div><a href="#" class="left-btn"><img src="../../../static/xqleft.png"></a></div>
            <div><a href="#" class="right-btn"><img src="../../../static/xqright.png"></a></div>
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
          this._swiper();
          this._headerOpcity();
        },
      methods:{
        /**
         * 商品详情的轮播图
         * @private
         */
          _swiper(){
              new Swiper(
                '.swiper-container',
                {
                  // autoplay: true,
                  speed:300,
                  loop:true,//无限轮播
                  autoplay:{
                    disableOnInteraction:false
                  },
              });
          },
          _headerOpcity(){
            /**
             * 滑动时,header的颜色会从透明变成白色,字体图标也会变色
             **/
            $('.main').scroll(function () {
              //头部的颜色刚开始是透明，随着scrollTop()的增大，颜色越来越深
              var top = $(this).scrollTop();
              var flag = $('.fixed');
              $('.fixed').css({'background-color':"rgba"+"(255,255,255,"+top/200+")"});
              if(top <=100){
                console.log('up')
                flag.find('.left-btn img').attr({'src':"../../../static/xqleft.png"})
                flag.find('.right-btn img').attr({'src':"../../../static/xqright.png"})
                flag.find('a').find('img').css({'opacity':(1-top/100)});
              }else if(top>52){
                  console.log('down')
                flag.find('.left-btn img').attr({'src':"../../../static/ho1.png"})
                flag.find('.right-btn img').attr({'src':"../../../static/ho2.png"})
                flag.find('a').find('img').css({'opacity':(top-100)/100});
                // $('.fixed').find('a img:last-child').attr({'src':"../../../static/ho2.png"});
              }else{
                // $('.fixed').find('a img:first-child').attr({'src':"../../../static/xqleft.png"}).css({"opcity":1})
              }
            });
          }
      }
    }
</script>

<style scoped>

  .all{
      width:100%;
  }

  .swiper-slide{
      width:100%;

  }
  .swiper-container{
    height:375px;
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
   opacity: 1;
 }



</style>
