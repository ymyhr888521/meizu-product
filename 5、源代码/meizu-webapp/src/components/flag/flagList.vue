<template>
    <div class="contain-text">
        <div class="info-list">
              <div class="single" v-for="(item,index) in msg.store">
                  <div class="left">
                      <div class="top">
                          <h3>{{item}}</h3>
                          <p>{{msg.add[index]}}</p>
                          <p>{{msg.time[index]}}</p>
                      </div>

                      <input type="button" value="致电">
                  </div>

                  <div class="right">
                      <a href="#">
                          <span>{{msg.far[index]}}</span>
                      </a>
                  </div>
              </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "flagList",
        props:["msg"],
        // data(){
        //     return {
        //         info:{
        //            store:['西安市电子正街授权专卖店','西安西北大学认证店','西安市小寨授权专卖店','西安市长安路新天地授权专卖店','西安雁塔东三爻村认证店','西安市雁塔路授权专卖店','西安市长安区北长安街1授权专卖店','西安市莲湖区北大街授权专卖店','西安临潼区人民路认证店','西安未央区建章路认证店','西安市海璟国际赛格授权专卖店','咸阳泾阳中心街认证店','咸阳礼泉县兴华街认证店'],
        //            add:['西安市雁塔区电子城电子正街224号','西安市碑林区太白北路316号','西安市雁塔区小寨西路中豪大厦1层','西安市雁塔区长安南路民生雁塔新天地 地表3号商铺','西安市雁塔区长安南路东三爻地铁站D出口军警路向东200米','西安市雁塔路中段天成大厦1层55号','西安市长安区北长安街111号','西安市莲湖区北大街55号新时代广场1楼南','西安市临潼区人民路十字东北角','西安市未央区建章路西安车辆场体育场对面锦雁花园门口','西安市文景路与凤城二路十字海璟国际赛格2号','咸阳市泾阳县邮局十字向西100米','咸阳市礼泉县兴华街中段富士路口东20米'],
        //            time:['10:00:00-21:00:00','10:30:00-21:30:00','09:00:00-20:00:00','10:30:00-21:30:00','10:00:00-20:30:00','09:00:00-20:00:00','10:00:00-21:00:00','10:00:00-21:30:00','11:00:00-21:00:00','09:00:00-21:00:00','09:30:00-21:00:00','08:00:00-22:00:00','10:00:00-20:00:00'],
        //            far:['4.58千米','6.32千米','7.08千米','7.58千米','7.78千米','8.78千米','9.58千米','9.72千米','9.96千米','10.58千米','12.58千米','35.58千米','49.58千米']
        //
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .contain-text{
        padding:0 .35rem;
    }
    .contain-text>.info-list{
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .contain-text>.info-list>.single{
        padding:.37rem 0;
        height:2.41rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
    }
    .contain-text>.info-list>.single>.left{
          display: flex;
          flex-direction: column;
          justify-content: space-between;

    }
    .contain-text>.info-list>.single>.left>.top{
        display: flex;
        height:.99rem;
        flex-direction: column;
        justify-content:space-between;
    }
    .contain-text>.info-list>.single>.left>.top>h3{
        font-size: .2rem;
        color:#000;
        font-weight: normal;
    }

    .contain-text>.info-list>.single>.left>.top>p{
        color:#999999;
    }

    .contain-text>.info-list>.single>.left>input{
        width:.9rem;
        height:.43rem;
        background: #0099ff;
        color:#fff;
        font-size: .18rem;
        font-weight: bold;
    }


    .contain-text>.info-list>.single>.right>a {
      display: flex;
      width: 1.2rem;
      background: url("../../../static/gps.png") no-repeat .15rem center;
      background-size: .12rem .15rem;
      padding-left:.14rem;
    }

    .contain-text>.info-list>.single>.right>a>span{
        padding-left:.2rem;
        width:100%;
        color:#999;
    }




</style>
