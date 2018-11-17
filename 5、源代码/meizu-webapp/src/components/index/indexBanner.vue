<template>
  <!-----------------------main---------------->

    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <img class="swiper-slide" src="../../assets/img/banner3.jpg" >
                <img class="swiper-slide" src="../../assets/img/banner1.jpg" >
                <img class="swiper-slide" src="../../assets/img/banner.jpg" >
                <img class="swiper-slide" src="../../assets/img/banner4.jpg" >
                <img class="swiper-slide" src="../../assets/img/banner2.png" >
                <img class="swiper-slide" src="../../assets/img/banner6.jpg" >
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper'
     export default {
         name: 'indexBanner',
         mounted(){
              new Swiper(
                   '.swiper-container',
                       {
                         // autoplay: true,
                         speed:300,
                         loop:true,//无限轮播
                         autoplay:{
                           disableOnInteraction:false
                         },
                         pagination: {
                           el: '.swiper-pagination',
                         },
                      })
                 }


  }
</script>

<style scoped>




.banner{
    height:3.28rem;
    width:100%;
}

.banner .swiper-container .swiper-wrapper .swiper-slide{
    width:100%;
    height:3.28rem;
  }



</style>
