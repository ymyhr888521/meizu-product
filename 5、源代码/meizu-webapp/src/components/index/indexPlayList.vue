<template>
   <div class="play">
        <div>
            <ul>
              <li v-for="(item,index) in titles"><a href="#"><i><img :src='imgs[index]'></i><span>{{item}}</span></a></li>

            </ul>
        </div>
   </div>
</template>

<script>
    export default {
        name: "indexPlayList",
        data(){
            return{
                imgs:[
                    '../../static/p1.png',
                    '../../static/p2.png',
                    '../../static/p3.png',
                    '../../static/p4.png',
                    '../../static/p5.png',
                    '../../static/p6.png',
                    '../../static/p7.png',
                    '../../static/p8.png',
                ],
                titles:[
                    '签到福利',
                    '会员领券',
                    '以旧换新',
                    '超值砍价',
                    '热销手机',
                    '配件声学',
                    '数码科技',
                    '居家个护'
                ]
            }
        }
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
