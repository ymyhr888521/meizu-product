<template>
  <div class="all-contain">
    <div class="title">{{title}}</div>
    <div class="show">
      <img :src="banner">
    </div>
    <div class="box-phone">
      <div class="contain">
        <ul>
          <li v-for="(item,index) in imgs">
            <div>
              <img :src="item">
            </div>

            <h3>{{name[index]}}</h3>
            <p>{{info[index]}}</p>
            <p><span>{{newPri[index]}}</span><span>{{beforePri[index]}}</span></p>

          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "indexHotFitting",
        data(){
            return {
                title:'热卖配件',
                banner:'../../../static/banner2.png',
                imgs:['../../../static/e2.png','../../../static/e1.png','../../../static/e3.png','../../../static/e4.png','../../../static/e5.png','../../../static/e6.png','../../../static/e7.png','../../../static/e8.png'],
                name:['魅蓝 EP52 蓝牙耳机','魅族EP-31 蓝牙耳机','魅族Gravity悬浮音响','POP 真无线蓝牙耳机','Lifeme 暖手宝移动电源','魅族路由器 极速版','魅族盒子 一键找回遥控器','魅族 Flow Bass 三单元耳机'],
                info:['轻盈悦耳 动无拘束','舒适均衡 精致优雅','浮光掠影 打造科幻般的透镜屏显','六期免息 双无线 零设限','随时随地温暖你','天生不凡 快很狠稳','一键找回遥控器,海量容量，4...','延续经典 重赋新声'],
                newPri:['￥199','￥99','￥1099','￥499','￥69','￥69','￥99','￥399'],
                beforePri:['￥299','￥199','','￥499','￥169','199','￥399','￥599']
          }
        }
    }
</script>

<style scoped>
  .all-contain{
    background: #ff0;
    display: flex;
    flex-direction: column;
  }

  .all-contain>.title{
    height:.76rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:.22rem ;
    color:#333;
    font-weight: 600;
    background:url("../../assets/img/line.png") no-repeat center .55rem ;
    background-size:.21rem auto;
    background-color:#F4F4F4;
  }
  .all-contain>.show{
    height:2.32rem;
    background: #0f0;
  }

  .all-contain>.show img{
    width: 100%;
    height:100%;
  }


  .all-contain>.box-phone{
    padding:0 .18rem .12rem .18rem;
    background:#F4F4F4;
  }

  .all-contain>.box-phone>.contain>ul{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: space-between;
  }

  .all-contain>.box-phone>.contain>ul>li{
    flex: 0 0 50%;
    height:3.02rem;
    background-color: #fff;
    margin:0.03rem -0.03rem 0.03rem -0.03rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: .2rem;
  }
  .all-contain>.box-phone>.contain>ul>li>div{

    width:100%;
    height:1.9rem;

  }
  .all-contain>.box-phone>.contain>ul>li>div>img{
    width:100%;
    height:100%;
  }
  .all-contain>.box-phone>.contain>ul>li>h3{
    font-size: .20rem;
    color:#333333;
    font-weight: normal;
    margin-top:-0.2rem;

  }
  .all-contain>.box-phone>.contain>ul>li>p:nth-of-type(1){
    font-size: .15rem;
    color:#999999;

  }

  .all-contain>.box-phone>.contain>ul>li>p:nth-of-type(2){
    display: table-cell;
    vertical-align: bottom;
    line-height:inherit;


  }

  .all-contain>.box-phone>.contain>ul>li>p:nth-of-type(2)>span:nth-of-type(1){
    font-size: .15rem;
    color:#cc6666;
    font-weight: bold;


  }
  .all-contain>.box-phone>.contain>ul>li>p:nth-of-type(2)>span:nth-of-type(2) {
    font-size: .11rem;
    color: #999999;
    text-decoration: line-through;
    padding-left: .05rem;
  }




</style>
