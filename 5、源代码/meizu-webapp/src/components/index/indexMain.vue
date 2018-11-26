<template>
    <div class="main" id="main">
        <index-banner></index-banner>
        <index-product-info></index-product-info>
        <index-play-list :msg="msg.indexPlayList"></index-play-list>
        <index-limited-buy :msg="msg.indexLimitedBuy"></index-limited-buy>
        <index-phone-img></index-phone-img>
        <index-star-pro :msg="msg.indexStarPro"></index-star-pro>
        <index-hot-phone :msg="msg.indexHotPhone"></index-hot-phone>
        <index-hot-fitting :msg="msg.indexHotFitting"></index-hot-fitting>
        <index-recommend :msg="msg.indexRecommend"></index-recommend>
        <index-media-play :msg="msg.indexMediaPlay"></index-media-play>
        <index-music :msg="msg.indexMusic"></index-music>
        <index-life :msg="msg.indexLife"></index-life>
        <indexGuess :msg="msg.indexGuess"></indexGuess>
        <index-service :msg="msg.indexService"></index-service>
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
    props:['msg']

  }
</script>

<style scoped>
.main{
    flex:1;
    overflow:auto;
}
</style>
