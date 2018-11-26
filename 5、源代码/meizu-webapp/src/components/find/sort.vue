<template>
    <div class="sort">
          <div class="top">
              <h3>分类导图</h3>
          </div>

          <div class="bottom">
              <ul>
                <li v-for="(item,index) in msg.imgs">
                  <img :src="item">
                </li>
              </ul>
          </div>
    </div>
</template>

<script>
    export default {
        name: "sort",
        props:['msg']
        // data(){
        //     return {
        //         imgs:['../../../static/sort1.png','../../../static/sort2.png','../../../static/sort3.png','../../../static/sort4.png']
        //     }
        // }
    }
</script>

<style scoped>
.sort{
    display: flex;
    flex-direction: column;
    padding:0 .24rem;
}
.sort>.top{
    height:.67rem;
    line-height: .67rem;
}
.sort>.top>h3{
    font-size:.20rem;
    color:#000;
}
.sort>.bottom{
    padding:.16rem 0;
}
.sort>.bottom>ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.sort>.bottom>ul>li{
    flex: 0 0 50%;
    height:1.02rem;
    margin:.03rem -.03rem .03rem -.03rem;

}
.sort>.bottom>ul>li>img{
    width:100%;
    height:100%;
}




</style>
