<template>
    <div class="all-pro">
        <div class="top">
            <h3>最新推荐</h3>
        </div>
        <div class="bottom">
            <div class="contain" v-for="(item,index) in imgs">
                <img :src="item">
                <div>
                    <h3>{{intro[index]}}</h3>
                    <p>{{word[index]}}</p>
                    <p><span>{{origin.add[index]}}</span><span>{{origin.num[index]}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newPro",
        data(){
            return{
                imgs:['../../../static/new1.png','../../../static/new2.png','../../../static/new3.png'],
                intro:['方寸之间,物尽其用--向杂乱无章的工作状态...','AR体感互动 让你大户过瘾','不打扰,是我的温柔 --黑爵i18小清新无线...'],
                word:['生活有太多不确定性,整理物品亦是整理人生,厘清生活的重点,从杂乱无章的工作状态开始吧!','各位小伙伴们,你们知道啥是AR技术吗?其实所谓的AR技术,他还有一个名称就是增强现实技术。AR技术能够将...','不知为何,人一旦成长成熟之后便会低调不少,喜欢上的东西也会偏向纯净如水的清新。这绝不是什么愤世嫉...'],
                origin:{add:['魅族商场','魅族商场','魅族商场'],num:['18787人阅读','82723人阅读','28337人阅读',]}
            }
        }
    }
</script>

<style scoped>
  .all-pro{
      display: flex;
      flex-direction: column;

  }
  .all-pro>.top{
       height:.43rem;
       padding:.09rem .16rem 0 .16rem;
  }
  .all-pro>.top>h3{
      font-size:.2rem;
      color:#000;


  }

  .all-pro>.bottom>.contain>img{
      height:2.31rem;
      width:100%;
  }
  .all-pro>.bottom>.contain>div{
        padding:0.24rem .16rem .36rem .16rem;
        height:1.82rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
  }
  .all-pro>.bottom>.contain>div>h3{
      font-size: .24rem;
      color:#000;
    font-weight: normal;
  }

  .all-pro>.bottom>.contain>div>p{
      color:#999;
      font-size: .17rem;
      letter-spacing:.5px;
  }
  .all-pro>.bottom>.contain>div>p:nth-of-type(2)>span:nth-of-type(1){
    padding-right: .25rem;
  }


</style>
