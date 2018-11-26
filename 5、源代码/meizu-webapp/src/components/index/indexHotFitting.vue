<template>
  <div class="all-contain">
    <div class="title">{{msg.title}}</div>
    <div class="show">
      <img :src="msg.banner">
    </div>
    <div class="box-phone">
      <div class="contain">
        <ul >
          <li :key="index" v-for="(item,index) in msg.imgs">
            <div>
              <img :src="item">
            </div>
            <h3>{{msg.name[index]}}</h3>
            <p>{{msg.info[index]}}</p>
            <p><span>{{msg.newPri[index]}}</span><span>{{msg.beforePri[index]}}</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "indexHotFitting",
        props:["msg"]
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
