<template>
    <div class="recommend" >
        <div class="title">{{msg.title}}</div>
        <div class="contain">
            <ul>
                <li v-for="(item,index) in msg.bgColor" v-color="item">
                    <div>
                      <img v-if="msg.imgs[index]" :src="msg.imgs[index]" />
                          <h3 v-if="!msg.imgs[index]">{{msg.name[index]}}</h3>
                          <p v-if="!msg.imgs[index]">{{msg.info[index]}}</p>
                          <p v-if="!msg.imgs[index]"><span>{{msg.nowPri[index]}}</span><span>{{msg.beforePri[index]}}</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>



    export default {
        name: "indexRecommend",
        props:['msg'],
        directives:{
            color(el,binding){
                el.style.backgroundColor= binding.value;
      }}





    }
</script>

<style scoped>
    .recommend{
        background-color: #ff0;
        display: flex;
        flex-direction: column;
    }
    .recommend>.title{
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
    .recommend>.contain>ul{
         display: flex;
         flex-wrap: wrap;
    }
    .recommend>.contain>ul>li{
        flex:0 0 50%;
        display: flex;
        height:2.7rem;
    }


    .recommend>.contain>ul>li>div{
        flex:0 0 100%;
        display: flex;
        flex-direction: column;
        padding:.3rem .25rem;
        align-items: start;
        position: relative;
        background: url("../../../static/ic.png") no-repeat .3rem center;
        background-size: .33rem auto;
    }


    .recommend>.contain>ul>li>div>img{
          width:2.1rem;
          height:2.1rem;
          margin:auto;
    }


    .recommend>.contain>ul>li>div>h3{
          font-size:.27rem;
          color:#fff;
          font-weight: normal;
          line-height: 2;
    }

    .recommend>.contain>ul>li:last-of-type>div>h3{
        line-height: normal;
        word-break: break-all;

    }

    .recommend>.contain>ul>li:last-of-type>div>p:nth-of-type(1){
        bottom:1.38rem;
    }



    .recommend>.contain>ul>li:last-of-type>div>p:nth-of-type(2){
      bottom:.45rem;
    }




    .recommend>.contain>ul>li>div>p:nth-of-type(1){
          font-size: .17rem;
          color:#f6f7f7;
          line-height: 2;
          position: absolute;
          bottom: 1.5rem;
    }


    .recommend>.contain>ul>li>div>p:nth-of-type(2){
        display: table-cell;
        vertical-align: bottom;
        position: absolute;
        bottom:.64rem;
    }

    .recommend>.contain>ul>li>div>p:nth-of-type(2)>span:nth-of-type(1){
        font-size: .22rem;
        color:#fff;
    }
    .recommend>.contain>ul>li>div>p:nth-of-type(2)>span:nth-of-type(2) {
        font-size: .13rem;
        color: #FFBDBC;
        text-decoration: line-through;
        padding-left: .08rem;
    }






</style>
