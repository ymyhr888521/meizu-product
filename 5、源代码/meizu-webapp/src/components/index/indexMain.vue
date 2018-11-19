<template>
    <div class="main" id="main">
        <index-banner></index-banner>
        <index-product-info></index-product-info>
        <index-play-list></index-play-list>
        <index-limited-buy></index-limited-buy>
        <index-phone-img></index-phone-img>
        <index-star-pro></index-star-pro>
        <index-hot-phone></index-hot-phone>
        <index-hot-fitting></index-hot-fitting>
        <index-recommend></index-recommend>
        <index-media-play></index-media-play>
        <index-music></index-music>
        <index-life></index-life>
        <indexGuess></indexGuess>
        <index-service></index-service>
    </div>
</template>

<script>

  import indexPlayList from "./indexPlayList";
  import indexBanner from "./indexBanner";
  import indexProductInfo from "./indexProductInfo";
  import indexLimitedBuy from "./indexLimitedBuy";
  import indexPhoneImg from "./indexPhoneImg";
  import indexStarPro from "./indexStarPro";
  import indexHotPhone from "./indexHotPhone";
  import indexHotFitting from "./indexHotFitting";
  import indexRecommend from "./indexRecommend";
  import indexMediaPlay from  './indexMediaPaly';
  import indexMusic from  './indexMusic';
  import indexLife from  './indexLife';
  import indexGuess from  './indexGuess';
  import indexService from  './indexService';


  export default {
        name: "indexMain",
        components:{
            indexBanner,
            indexPlayList,
            indexProductInfo,
            indexLimitedBuy,
            indexPhoneImg,
            indexStarPro,
            indexHotPhone,
            indexHotFitting,
            indexRecommend,
            indexMediaPlay,
            indexMusic,
            indexLife,
            indexGuess,
            indexService
        },

  }
</script>

<style scoped>
.main{
    flex:1;
    overflow:auto;
}
</style>
