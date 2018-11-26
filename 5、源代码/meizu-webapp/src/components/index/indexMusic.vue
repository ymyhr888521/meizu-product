<template>
  <div class="all">
    <div class="top">
        <img :src="msg.banner">
    </div>
    <div class="bottom">
      <div class="contain">
        <div v-for="(item,index) in msg.imgs" class="goods">
          <div>
            <img :src="item">
          </div>
          <div>
            <h3>{{msg.name[index]}}</h3>
            <p>{{msg.info[index]}}</p>
            <span>{{msg.nowPri[index]}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "indexMusic",
    props:["msg"]
  }
</script>

<style scoped>
    .all{
      width:100%;
      display: flex;
      background:#F4F4F4;
      flex-direction: column;
      padding-bottom: .23rem;
  }
  .all>.top{
      display: flex;
      height:1.58rem;
  }
  .all>.top>img{
      width:100%;
      height:100%;
  }



  .all>.bottom{
      height:3rem;
      width:100%;
      overflow:auto;


  }
  .all>.bottom>.contain{
      width:24.1rem;
      height:3rem;
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
      justify-content: space-around;
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
      height:1.95rem;
      flex-direction: column;
      align-items: start;
  }

  .all>.bottom>.contain>.goods>div:nth-of-type(1) img{
      width:100%;
      height:100%;
  }

  .all>.bottom>.contain>.goods>div:nth-of-type(2){
        height:auto;
        margin-top:-0.2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
  }
    .all>.bottom>.contain>.goods>div:nth-of-type(2)>h3{
          font-size: .16rem;
          color:#333;
          font-weight: 100;
          line-height: 1.5;
    }
    .all>.bottom>.contain>.goods>div:nth-of-type(2)>p{
        font-size: .13rem;
        color:#989898;
         line-height: 1.5;
    }

    .all>.bottom>.contain>.goods>div:nth-of-type(2) span{
        color:#ff3366;
        font-size:.16rem;
      line-height: 1.5;


  }
</style>
