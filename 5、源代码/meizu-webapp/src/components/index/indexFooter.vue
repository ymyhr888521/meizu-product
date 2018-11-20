<template>
  <footer>
    <div>
      <ul>
        <li class="link"><a href="#"><i class="iconfont">&#xe629;</i><span>首页</span></a></li>
        <li class="link"><a href="#"><i class="iconfont">&#xe638;</i><span>分类</span></a></li>
        <li class="link"><a href="#"><i class="iconfont">&#xe746;</i><span>发现</span></a></li>
        <li class="link"><a href="#"><i class="iconfont">&#xe602;</i><span>购物车</span></a></li>
        <li class="link"><a href="#"><i class="iconfont">&#xe64a;</i><span>我的</span></a></li>
      </ul>
    </div>
  </footer>

</template>

<script>
    export default {
        name: "indexFooter",
        mounted(){
            console.log('-----------')
            $('.link').each(function(){
                $(this).click(function () {
                  $(this).children('a').children('i,span').css({'color':'#188DED'});
                  $(this).siblings().children('a').children('i,span').css({'color':'#666'});
                })
            })
        }
    }
</script>

<style scoped>

  footer{
      border-top:1px solid #cccccc;
      width:100%;
      background: #fff;
  }
  footer>div{
    height:.72rem;

  }
  footer>div>ul{
    display: flex;
    height:.72rem;
  }
  footer>div>ul>li{
    flex:0 0 20%;
    height:.72rem;
  }
  footer>div>ul>li>a{
    display: flex;
    align-items: center;
    flex-direction: column;
    height:.72rem;
    justify-content: center;

  }


  footer>div>ul>li>a>i{
    font-size: .3rem;
    color:#666;

  }
  footer>div>ul>li>a>span{
    font-size:.15rem;
    color:#666;

  }

   footer>div>ul>li:nth-of-type(1)>a>i, footer>div>ul>li:nth-of-type(1)>a>span{
      color:#188DED;
  }
</style>
