<template>
  <div class="all" v-if="msg">
    <div class="title">{{msg.title}}</div>

    <div class="bottom">
      <div class="contain">
        <div v-for="(item,index) in msg.color" class="goods">
          <div v-color="item">
            <img :src="msg.imgs[index]">
          </div>
          <div>
            <h3>{{msg.name[index]}}</h3>
            <span>{{msg.nowPri[index]}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "indexGuess",
    props:["msg"],
    directives:{
        color(el,bidding){
            el.style.backgroundColor = bidding.value;
        }
    }

  }
</script>

<style scoped>
  .all{
    width:100%;
    display: flex;
    background:#F4F4F4;
    flex-direction: column;
  }

  .all>.title{
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

  .all>.bottom{

    width:100%;
    overflow:auto;
  }
  .all>.bottom>.contain{
    width:24.1rem;
    height:3.7rem;
    padding:0  0.12rem;
    display: flex;
  }
  .all>.bottom::-webkit-scrollbar{
    display: none;
  }
  .all>.bottom>.contain>.goods{
    width:2.41rem;
    height:100%;
    background: #fff;
    margin:0 .03rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .all>.bottom>.contain>.goods:first-of-type{
    margin-left:0;
  }
  .all>.bottom>.contain>.goods:last-of-type{
    margin-right:0;
  }
  .all>.bottom>.contain>.goods>div:nth-of-type(1){
    display: flex;
    width:100%;
    height:2.4rem;
    flex-direction: column;
    background-color: #ff0;
    padding:.2rem .17rem;
  }
  .all>.bottom>.contain>.goods>div:nth-of-type(1) img{
      width:100%;
      height:100%;
  }

  .all>.bottom>.contain>.goods>div:nth-of-type(2){
      height:1.3rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      width:100%;
      justify-content: space-around;
      align-items: start;
      padding:.18rem .16rem;
  }
  .all>.bottom>.contain>.goods>div:nth-of-type(2)>h3{
      font-size: .23rem;
      color:#333;
      font-weight: 100;
      line-height: 1.5;
  }

  .all>.bottom>.contain>.goods>div:nth-of-type(2)>span{
      color:#ff2366;
      font-size:.26rem;
      line-height: 1.5;
      font-weight: bold;

  }
</style>
