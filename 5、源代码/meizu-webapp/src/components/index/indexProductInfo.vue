<template>
    <nav>
        <div>
          <div><a href="#"><i><img src="../../assets/img/n1.png" ></i><span>魅族官方商城</span></a></div>
          <div><a href="#"><i><img src="../../assets/img/n2.png" ></i><span>全场包邮</span></a></div>
          <div><a href="#"><i><img src="../../assets/img/n3.png" ></i><span>7天无理由退货</span></a></div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "indexProductInfo"
    }
</script>

<style scoped>

nav{
  background: #F7F7F7;
  padding:0 .48rem;
}

nav>div{
  height:.55rem;
  display: flex;
  justify-content: space-between;
}

nav>div>div{
    height:100%;
}
nav>div>div>a{
    display: flex;
    height:100%;
    align-items: center;
}

nav>div>div>a>i{
    height:.17rem;
    width:.17rem;
}

nav>div>div>a>i>img{
   width:100%;
   height:100%;
}

nav>div>div>a>span{
  font-size: .12rem;
  color:#939393;
  margin-left:.06rem;
  line-height: inherit;
}


</style>
