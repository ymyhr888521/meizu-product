<template>
    <div class="all">
        <dl v-for="(item,index) in msg.imgs">
            <dt>
                <img :src="item">
            </dt>

            <router-link tag="dd" :to="msg.link[index]">
                <h3>{{msg.word[index]}}</h3>
            </router-link>
        </dl>
    </div>

</template>

<script>
    export default {
        name: "serviceList",
        props:['msg'],

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
      font-weight: normal;
  }


</style>
