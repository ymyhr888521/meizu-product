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
                            <img :src='item' >
                        </div>

                        <h3>{{name[index]}}</h3>
                        <p>{{info[index]}}</p>
                        <span>{{pri[index]}}</span>

                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "indexHotPhone",
        data(){
            return {
                title:'热卖手机',
                banner:'../../../static/banner.png',
                imgs:['../../../static/h1.png','../../../static/h2.png','../../../static/h3.png','../../../static/h4.png'],
                name:['魅族 16X','魅族 16th','魅族 X8','魅蓝 6T'],
                info:['骁龙710轻奢旗舰','骁龙845年度旗舰','人脸指纹双解锁','双摄全面屏,游戏长续航'],
                pri:['￥2098','￥2798','￥1598起','￥799起']
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

      padding:.12rem .18rem .12rem .18rem;
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
    height:3.82rem;
    background-color: #fff;
    margin:0.03rem -0.03rem 0.03rem -0.03rem;
    display: flex;
    flex-direction: column;
     align-items: center;
    justify-content: space-around;
    padding-bottom: .17rem;
}
.all-contain>.box-phone>.contain>ul>li>div{

    width:2.5rem;
    height:2.52rem;

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
.all-contain>.box-phone>.contain>ul>li>p{
    font-size: .15rem;
    color:#999999;

}
.all-contain>.box-phone>.contain>ul>li>span{
    font-size: .15rem;
    color:#cc6666;
    font-weight: 600;

}



</style>
