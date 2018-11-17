<template>
    <div class="all">
        <div class="title">{{title}}</div>
        <div class="server">
            <ul>
                <li v-for="(item,index) in imgs">
                    <a href="#">
                        <i><img :src="item"></i>
                        <p>
                            <span>{{bigF[index]}}</span>
                            <span>{{smallF[index]}}</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
    export default {
        name: "indexService",
        data(){
            return{
                title:'官方品质服务',
                imgs:['../../../static/icon1.png','../../../static/icon2.png','../../../static/icon3.png'],
                bigF:['Arrive','Query','Repair'],
                smallF:['百城速达','真伪查询','上门快修']
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
  .all>.server{

      height:.69rem;
  }
  .all>.server>ul{
        display: flex;
        height:.69rem;
        width:100%;
  }
  .all>.server>ul>li{
        flex:1;
        display: flex;
        align-items: center;
  }
  .all>.server>ul>li~li>a{
      background: url("../../../static/border.png") no-repeat left center;
      background-size:auto .24rem ;

  }

  .all>.server>ul>li>a{
      display: flex;
      padding:-0.38rem 0;
      width:100%;
      justify-content: center;
  }
  .all>.server>ul>li>a>i{
      width:.38rem;
      height:.4rem;
  }
  .all>.server>ul>li>a>i>img{
      width:100%;
      height:100%;
  }
  .all>.server>ul>li>a>p{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left:.11rem;
  }
  .all>.server>ul>li>a>p>span:nth-of-type(1){
    font-size: .16rem;
    color:#000;
  }
  .all>.server>ul>li>a>p>span:nth-of-type(2){
    font-size: .09rem;
    color:#999;
  }

</style>
