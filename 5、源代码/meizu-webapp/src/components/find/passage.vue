<template>
    <div class="passage">
        <div class="top">
            <h3>精彩文章</h3>
        </div>

        <div class="bottom">
            <dl v-for="(item,index) in msg.imgs">
                <dt>
                    <img :src="item" >
                </dt>

                <dd>
                    <div><p>{{msg.intro[index]}}</p></div>
                    <div><span>{{msg.origin.com[index]}}</span><span>{{msg.origin.num[index]}}</span></div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: "passage",
        props:["msg"],
        // data(){
        //     return {
        //         imgs:['../../../static/pass1.png','../../../static/pass2.png','../../../static/pass3.png','../../../static/pass4.png','../../../static/pass5.png','../../../static/pass6.png','../../../static/pass7.png'],
        //         intro:['黄章全力之作！魅族16新旗舰首发测评：15年来性能、拍照巅峰','黄章亲自打造的轻奢旗舰魅族16X体验报告,能否继续真香?','App活动中奖名单公布(新增万能兑换券名单)','第一手对比!魅族16X和魅族16竟有这些区别','更好、更强大,全新魅族社区APP正式发布','魅族EP52 lite上手图赏:好看的小姐姐,都会选这款耳机','魅族蓝牙音频接收器深度测评'],
        //         origin:{com:['快科技','魅族商城','魅族商城','魅族社区-王员外可爱多','魅族商城','魅族商城','我爱音频网'],num:['89899阅读','89899阅读','14899阅读','38335阅读','39439阅读','9839阅读','29391阅读']}
        //     }
        // }
    }
</script>

<style scoped>
  .passage{
      display: flex;
      flex-direction: column;
      padding:0 .24rem;
  }

  .passage>.top{
      height:.68rem;
      line-height: .68rem;
  }
  .passage>.top>h3{
      font-size:.20rem;
      color:#000;
  }

  .passage>.bottom>dl{
      height:1.09rem;
      margin-bottom:.27rem;
      display: flex;
      width:100%;

  }
  .passage>.bottom>dl>dt{
      width:1.62rem;
      height:100%;
  }
  .passage>.bottom>dl>dt>img{
      height:100%;
      width:100%;
  }
  .passage>.bottom>dl>dd{
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content:space-evenly;
      padding-left:.19rem;
  }
  .passage>.bottom>dl>dd>div:nth-of-type(1){

      width:100%;
  }

  .passage>.bottom>dl>dd>div:nth-of-type(1)>p{
      font-size: .22rem;
      color:#000;
  }

  .passage>.bottom>dl>dd>div:nth-of-type(2)>span{
      font-size: .11rem;
      color:#777;
      padding-right:.22rem;
  }

</style>
