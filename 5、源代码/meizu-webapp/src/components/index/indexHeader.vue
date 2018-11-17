<template>

    <header class='header' id="header">
        <div>
            <div>
                <i class="iconfont">&#xe612;</i>
            </div>
            <div>
                <input type="text" placeholder="搜索"/>
            </div>
            <div>
              <a href="#">
                <i class="iconfont">&#xe70a;</i>
              </a>
            </div>
        </div>
    </header>

</template>

<script>
    export default {
        name: "indexHeader",
        mounted() {
          /**
           * 滑动时,header的颜色会从透明变成白色,字体图标也会变色
           **/
            $('#main').scroll(function () {
                var top = $(this).scrollTop();
                if(top>=35){
                    $('#header i').css({'color':'#00B4FF'})
                }else{
                    $('#header i').css({'color':'#fff'})
                }
                console.log(top)
                $('#header').css({'background-color':"rgba"+"(255,255,255,"+top/52+")"});
            });
        }
    }
</script>


<style scoped>

    header{
        padding:.15rem 0;
        width:100%;
        position: fixed;
        top:0;
        left:0;
        background: rgba(255,255,255,0);
        z-index: 99;
    }

    header>div{
        display: flex;
        justify-content: space-between;
    }
    header>div>div{
        height:.45rem;
        display: flex;
        align-items: center;
    }
    header>div>div:nth-of-type(1) {
        padding: 0 .2rem;
    }

    header>div>div:nth-of-type(1) i{
        font-size:.17rem;
        color:#fff;
    }
    header>div>div:nth-of-type(2) {
        width:100%;
        height:.45rem;
        border-radius:30px;
        overflow: hidden;
    }
    header>div>div:nth-of-type(2) input{
          width:100%;
          height:.45rem;
          line-height:inherit;
          background: url("../../assets/img/soso.png") no-repeat .18rem center;
          background-size:.2rem .2rem;
          background-color:#C5C3C8;
          opacity:.6;
          text-indent: 2.6em;
          font-size: .2rem;
          color:#757279;
          transition: background-color .3s;
    }
    header>div>div:nth-of-type(2) input::placeholder{
        color:#7A777E;
    }
    header>div>div:nth-of-type(3) {
        padding: 0 .3rem;
    }
    header>div>div:nth-of-type(3)>a{
        display:flex;

    }
    header>div>div:nth-of-type(3) i{
        font-size:.3rem;
        vert-align: middle;
        color:#fff;
    }


</style>
