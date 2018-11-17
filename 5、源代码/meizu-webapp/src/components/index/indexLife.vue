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
  import $ from 'jquery/dist/jquery.slim'
  export default {
    name: "indexLife",
    data(){
      return {
        title:'影音娱乐',
        imgs:['../../../static/life1.png','../../../static/life2.png','../../../static/life3.png','../../../static/life4.png','../../../static/life5.png','../../../static/life6.png','../../../static/life7.png','../../../static/life8.png'],
        name:['魅族蓝牙小音箱','天然乳胶枕','iEager Micro USB数据线','爱奇艺 VR眼镜 头戴智...','曼秀雷敦 男士净黑头...','cabecade防蓝光电脑...','Smorss 6英寸kindle','曼秀雷敦 男士清爽沐...'],
        info:['好音感 直达心灵','福满园MYLEFO泰国天然乳胶枕...','兼容广泛,传输稳定,高效传输','手机秒变IMAX-3D巨屏影院,瞳...','火山矿物泥、减少黑头','百搭脸型 40%蓝光阻隔率 超...','仿真皮纹理 便携款','男人自己的沐浴露,天然活炭...'],
        newPri:['￥89','￥89.9','￥9.9','￥59','￥29.9','￥69','￥9.9','￥36.9'],
        beforePri:['￥169','￥188.8','￥19.9','￥69','￥39.9','￥99','￥39.9','￥36.9']
      }
    },

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
