<template>
  <div class="right">
    <div class="container" v-for="(con,it) in msg">

        <div class="all" v-for="(all,idx) in con.right">

          <div class="banner" v-if="all.banner">
            <img :src="all.banner">
          </div>

          <div class="title">
            <h3>{{all.title}}</h3>
          </div>

          <div class="production">
              <ul>
                  <li v-for="(item,index) in all.list">
                      <img :src="item.imgs" >
                      <span>{{item.name}}</span>
                  </li>
              </ul>
          </div>

          <div class="btn" v-if="all.more">
            <input type="button" value="查看更多商品">
          </div>
        </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "sortRight",
        props:["msg",'index']
    }
</script>

<style scoped>
.right{
  width:100%;
  overflow: auto;
}
.container{
  background: #fff;
  width:100%;
  height:100%;
  overflow: auto;
}

.all{
  background: #fff;
  width:100%;

}
.all>.banner{
  padding:.24rem .24rem;
  height:1.55rem;
}
.all>.banner>img{
  width:100%;
  height:100%;
}

.all>.title{
  height:.67rem;
  display: flex;
  justify-content:center;
  align-items: flex-start;
  font-size:.22rem ;
  color:#333;
  font-weight: 600;
  background:url("../../assets/img/line.png") no-repeat center .45rem ;
  background-size:.21rem auto;
  background-color:#fff;
  padding:.08rem 0;
}
.all>.title>h3{
    font-size: .24rem;
    color:#333;
}
.all>.production{
  padding:0 .25rem;
}
.all>.production>ul{
  display: flex;
  flex-wrap: wrap;
}
.all>.production>ul>li{
  height:1.3rem;
  flex:0 0 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: .42rem;

}
.all>.production>ul>li>img{
  width:.74rem;
  height:.9rem;
}

.all>.production>ul>li>span{
  font-size: .15rem;
  color:#333;
}
.all>.btn{
  width:100%;
  text-align: center;
  display: flex;
  height:.51rem;
  padding:0 .15rem;
  margin:-.24rem 0 .24rem 0;
}
.all>.btn>input{
  width:100%;
  height:100%;
  color:#ee3366;
  font-size: .20rem;
  background: #f5f5f5;
}
</style>
