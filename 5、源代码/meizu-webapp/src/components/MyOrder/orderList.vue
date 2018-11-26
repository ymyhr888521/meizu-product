<template>
  <div>
    <div class="contain" v-for="(item,index) in msg.imgs">
        <div class="top">
            <h3>供应商：<span>深圳市恒隆科技有限公司</span></h3>
            <span>交易关闭</span>
        </div>

        <div class="center">
            <div>
                <dl>
                    <dt>
                        <img :src="item"/>
                    </dt>
                    <dd>
                        <div><span>{{msg.name[index]}}</span></div>
                        <div><span>{{msg.info[index]}}</span></div>
                        <div><span>{{msg.money[index]}}</span></div>
                    </dd>
                </dl>
                <div><span>x1</span></div>
            </div>
        </div>


        <div class="bottom">
            <p>{{msg.p[index]}}<span>{{msg.span[index]}}</span></p>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "orderList",
        props:['msg'],
        // data(){
        //     return {
        //         imgs:['../../../static/b16.png','../../../static/b16.png','../../../static/b16.png'],
        //         name:['iEager Micro USB数据线','【预计5周内发货】魅族 16th P...','【预计5周内发货】魅族 16th P...'],
        //         info:['青春绿1米','全网通公开版 远山白 8+256GB','全网通公开版 远山白 8+256GB'],
        //         money:['￥9.90','￥3998.00','￥3998.00'],
        //         p:['共1件商品 合计:','共1件商品 合计:','共1件商品 合计:',],
        //         span:['￥9.90','￥3998.00','￥3998.00']
        //     }
        // }
    }
</script>

<style scoped>

  .contain{
      display: flex;
      flex-direction: column;
      margin-top:.12rem;
      background: #fff;
  }
  .contain>.top{
      width:100%;
      display: flex;
      padding:.22rem .25rem;
      align-items: center;
      justify-content: space-between;
      border-bottom:1px solid #e7e7e7;
  }
  .contain>.top>h3{
      font-size: .20rem;
      color:#999;
      font-weight: normal;
  }
  .contain>.top>h3>span{
      color:#333;
  }
  .contain>.top>span{
      font-size: .2rem;
      color:#666;
  }

  .contain>.center{
      padding:.3rem .25rem 0 .25rem;
      height:1.65rem;
  }

  .contain>.center>div{
      display: flex;

      padding-bottom: .25rem;
      border-bottom:1px solid #e7e7e7;
  }

  .contain>.center>div>dl{
      display: flex;
      flex:1;

  }
  .contain>.center>div>dl>dt{
      width:1.2rem;
      height:1.04rem;
  }
  .contain>.center>div>dl>dt>img{
      width:100%;
      height:100%;
  }
  .contain>.center>div>dl>dd{
      flex:1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left:.25rem;
  }
  .contain>.center>div>dl>dd>div{
      width:100%;
  }
  .contain>.center>div>dl>dd>div:nth-of-type(1)>span{
    font-size: .21rem;
    color:#000;
    white-space: nowrap;
  }
  .contain>.center>div>dl>dd>div:nth-of-type(2)>span{
    font-size: .2rem;
    color:#999;
  }

  .contain>.center>div>dl>dd>div:nth-of-type(3)>span{
    font-size: .26rem;
    color:#ff3366;
  }
  .contain>.center>div>div{

    text-align: right;
  }
  .contain>.bottom{
      height:.65rem;
      display: flex;
      align-items: center;
      padding:0 .35rem;
      justify-content: flex-end;
  }
  .contain>.bottom>p{
      font-size: .17rem;
      color:#333;
  }
  .contain>.bottom>p>span{
      font-size: .18rem;
      color:#ff3366;
      padding:0 .1rem;
  }


</style>
