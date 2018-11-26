<template>
    <div class="left">
        <ul class="nav-list">
          <li v-for="(item,index) in msg"><a href="#">{{item.title}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sortLeft",
        props:['msg'],
        mounted(){
          this._click();
        },
        methods:{
            _click(){
                $('.nav-list>li').each(function(){
                    $(this).click(function(){
                        $(this).css({borderLeft:".03rem solid #0099ff"});
                        $(this).find('a').css({color:"#0099ff"});

                        $(this).siblings().css({borderLeft:".03rem solid #fff"});
                        $(this).siblings().find('a').css({color:"#333"});
                    })
                })
            }
        }
    }
</script>

<style scoped>

  .left{
      overflow: auto;
      border-right:1px solid #ccc;
      width:1.03rem;
  }
  .left>ul{
    text-align: center;
    width:100%;
  }
  .left>ul>li{
    width:100%;
    height:.3rem;
    line-height:.3rem;
    margin-top:.6rem;
    overflow: hidden;
    border-left:.03rem solid #fff;
  }
  .left>ul>li{
    width:100%;
    height:.3rem;
    line-height:.3rem;
    margin-top:.6rem;
    overflow: hidden;
    border-left:.03rem solid #fff;
  }

  .left>ul>li:nth-of-type(1){
    border-left:.03rem solid #0099ff;
  }

  .left>ul>li:nth-of-type(1)>a{
    color:#0099ff;
  }



  .left>ul>li>a{
    color:#333;
  }

</style>
