<template>
    <div class="all">
        <dl v-for="(item,index) in imgs">
            <dt>
                <img :src="item">
            </dt>

            <dd>
                <h3>{{word[index]}}</h3>
            </dd>
        </dl>
    </div>

</template>

<script>
    export default {
        name: "serviceList",
        data(){
            return {
                imgs:['../../../static/ms1.png','../../../static/ms2.png','../../../static/ms3.png','../../../static/ms4.png','../../../static/ms5.png','../../../static/ms6.png','../../../static/ms7.png','../../../static/ms8.png'],
                word:['优惠券','红包','收货地址','附近门店','我的收藏','M码通道','以旧换新','设置']
            }
        }
    }
</script>

<style scoped>
  .all{
      display: flex;
      flex-direction: column;
      /*background: #ff0;*/
      padding:0 .23rem;
  }
  .all>dl{
      height:.8rem;
      padding:.25rem 0;
      display: flex;
      align-items: center;
  }
  .all>dl>dt{
      width:.46rem;
      padding:0 .07rem;
      height:100%;
  }
  .all>dl>dt>img{
      width:100%;
      height:100%;
  }
  .all>dl>dd{
      margin-left:.27rem;
  }
  .all>dl>dd>h3{
      font-size: .23rem;
      color:#000;
  }


</style>
