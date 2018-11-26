<template>
   <div class="play">
        <div>
            <ul>
              <li v-for="(item,index) in msg.imgs"><a href="#"><i><img :src='item'></i><span>{{msg.titles[index]}}</span></a></li>

            </ul>
        </div>
   </div>
</template>

<script>
    export default {
        name: "indexPlayList",
        props:["msg"],
    }
</script>

<style scoped>
    .play{height:2.16rem;background: #fff;}
    .play>div{height:100%;}
    .play>div>ul{height:100%;display:flex;flex-wrap: wrap;align-items: center;}
    .play>div>ul>li{flex:0 0 25%;}
    .play>div>ul>li>a{display:flex;flex-direction:column;align-items: center;}
    .play>div>ul>li>a>i{width:.46rem;height:.47rem;}
    .play>div>ul>li>a>i>img{width:100%;height:100%;}
    .play>div>ul>li>a>span{color:#999;font-size:.17rem;margin-top:.18rem}


</style>
