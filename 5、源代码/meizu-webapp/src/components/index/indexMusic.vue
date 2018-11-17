<template>
  <div class="all">
    <div class="top">
        <img :src="banner">
    </div>
    <div class="bottom">
      <div class="contain">
        <div v-for="(item,index) in imgs" class="goods">
          <div>
            <img :src="item">
          </div>
          <div>
            <h3>{{name[index]}}</h3>
            <p>{{info[index]}}</p>
            <span>{{nowPri[index]}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "indexMusic",
    data(){
      return {
        banner:'../../static/banner3.png',
        title:'限时购',
        name:['先锋SEC-CL31 HIFI','先锋SEC-CL32','SKY-CLI HIFI','SEC-CL31 HIFI','CL31 HIFI','先锋SEC-HIFI','SU-CL31 HIFI','SEC-C1 HIFI','先锋SEC-CL31 HIFI','先锋SEC-CL31 HIFI'],
        info:['个性铁三角设计 佩戴舒适','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择','绝佳音质 强劲低音 多色选择',],
        imgs:[
          '../../static/play2.png',
          '../../static/play3.png',
          '../../static/play4.png',
          '../../static/play5.png',
          '../../static/play6.png',
          '../../static/play7.png',
          '../../static/play8.png',
          '../../static/e3.png',
          '../../static/e2.png',
          '../../static/e1.png'
        ],
        nowPri:[
          '￥9.90',
          '￥9.90',
          '￥169',
          '￥129',
          '￥139',
          '￥229',
          '￥169',
          '￥129',
          '￥139',
          '￥229'
        ],

      }
    },

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
