<template>
    <div class="star-product">
        <div class="title">{{title}}</div>
        <div class="list">
            <div class="phone-info" v-for="(item,index) in imgs">
                <dl>
                    <dt><img :src="item"></dt>
                    <dd>
                        <h3>{{name[index]}}</h3>
                        <p>{{info[index]}}</p>
                        <p><span>{{nowPri[index]}}</span><span>{{beforePri[index]}}</span></p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexStarPro",
        data(){
            return {
                title:'明星单品',
                imgs:['../../../static/16-1.png','../../../static/16-2.png','../../../static/16-3.png','../../../static/16-4.png','../../../static/16-5.png',],
                name:['魅族 16X','魅族 16th Plus','魅族 15','POP真无线蓝牙耳机','JBL T120A立体声入耳式耳机'],
                info:['骁龙710轻奢旗舰','骁龙845 年度旗舰 屏幕下指纹','2000万暗光双摄,AI智能美颜','六期免息 双无线 零射线','Pure Bass声音 随时随地置身演唱会之中'],
                nowPri:['￥2098','￥3298','￥1998起','￥449','￥89'],
                beforePri: ['','','','￥499','￥128'],
            }
        }
    }
</script>

<style scoped>
.star-product{
    display: flex;
    flex-direction: column;
}
.star-product>.title{
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
.star-product>.list{
    padding:0 .24rem;
    background: #fff;
}
.star-product>.list>.phone-info{
    height:1.66rem;
    border-bottom:1px solid #ccc;
    padding:.27rem 0 .24rem 0;
}
.star-product>.list>.phone-info>dl{
    display: flex;
}
.star-product>.list>.phone-info>dl>dt{
    display: flex;
    width:1.35rem;
    height:1.12rem;
    justify-content: space-between;
}
.star-product>.list>.phone-info>dl>dt>img{
    width:100%;
    height:100%;
    margin:auto;
}

.star-product>.list>.phone-info>dl>dd{
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content:space-between;
    padding-left:.27rem;
}



.star-product>.list>.phone-info>dl>dd>h3{
    font-size: .23rem;
    color:#333333;
    font-weight: normal;
}

.star-product>.list>.phone-info>dl>dd>p:nth-of-type(1){
    font-size: .16rem;
    color:#999999;
    line-height:.16rem;
    margin-top:-0.06rem;
}

.star-product>.list>.phone-info>dl>dd>p:nth-of-type(2){
  display: table-cell;
  vertical-align: bottom;

}
.star-product>.list>.phone-info>dl>dd>p:nth-of-type(2)>span{


}
.star-product>.list>.phone-info>dl>dd>p:nth-of-type(2)>span:nth-of-type(1){
    font-size: .27rem;
    color:#cc6666;

}
.star-product>.list>.phone-info>dl>dd>p:nth-of-type(2)>span:nth-of-type(2){
      font-size: .14rem;
      color:#999999;
      text-decoration: line-through;
      padding-left:.05rem;
}
</style>
