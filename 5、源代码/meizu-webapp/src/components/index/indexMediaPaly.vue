<template>
  <div class="all-contain">
    <div class="title">{{title}}</div>
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
    name: "indexMediaPaly",
    data(){
      return {
        title:'影音娱乐',
        imgs:['../../../static/play1.png','../../../static/play2.png','../../../static/play3.png','../../../static/play4.png','../../../static/play5.png','../../../static/play6.png','../../../static/play7.png','../../../static/play8.png'],
        name:['魅族蓝牙音频接收器','魅族 EP-52 蓝牙耳机','魅族 EP-51 蓝牙耳机','先锋SEC-E221BT无线...','JBL T205 半入耳式音','Beats urBeats 3耳机','先锋SEC-S531BT耳挂','JBL GO音乐金砖 无线...'],
        info:['独立音频芯片音质媲美有线','轻盈悦耳 动无拘束','甄享音质 自在运动','分离使用智能随身充电续航持久','半入耳式设计,低音增效,佩...','音质与外形兼得 线控带麦 经久...','返光线材 防汗设计','将音乐进行到底  '],
        newPri:['￥89','￥199','￥299','￥299','￥169','￥398','￥199','￥179'],
        beforePri:['','￥299','','￥699','','518','￥599','￥269']
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
    background:url("../../assets/img/line.png") no-repeat center .58rem ;
    background-size:.21rem auto;
    background-color:#F4F4F4;
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
