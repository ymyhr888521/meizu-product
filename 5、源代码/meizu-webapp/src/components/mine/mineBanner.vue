<template>
    <div class="header">
        <div>
           <img src="../../../static/mine.png">
        </div>

        <div>
          <a href="#">
              <i class="iconfont">&#xe70a;</i>
          </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mineBanner"
    }
</script>

<style scoped>
    .header{
        height:2.67rem;
        background: #ff0;
        position: relative;
    }
    .header>div:nth-of-type(1){
        height:100%;
        width:100%;
    }
    .header>div:nth-of-type(1)>img{
        height:100%;
        width:100%;
    }
    .header>div:nth-of-type(2){
        width:.4rem;
        height:.4rem;
        position: absolute;
        right:.3rem;
        top:.13rem;
    }
    .header>div:nth-of-type(2)>a{
        height:100%;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .header>div:nth-of-type(2)>a>i{
        font-size: .35rem;
        color:#fff;
    }



</style>
