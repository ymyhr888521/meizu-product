<template>
    <div class="head">
        <div>
            <div>
                <a href="#"></a>
            </div>

            <div>
                <h3>附近门店</h3>
            </div>

            <div>
              <a href="#"><span>西安市</span><span></span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "flagHeader"
    }
</script>

<style scoped>
  .head{
        background-color: #fff;
        width:100%;
        border-bottom: 1px solid #ccc;
    }

  .head>div{
        height:.71rem;
        padding:.23rem 0;
        display: flex;
       justify-content: space-between;
       align-items: center;
    }
  .head>div>div:nth-of-type(1){
        padding:0 .26rem;
        height:100%;
    }
  .head>div>div:nth-of-type(1)>a{
        display:inline-block;
         height:.27rem;
         width: .27rem;
        background: url("../../assets/img/xy.png") no-repeat center center;
        background-size: .16rem .26rem;
    }
  .head>div>div:nth-of-type(2){
         flex:1;

    }


  .head>div>div:nth-of-type(2)>h3{
          font-size: .23rem;
          color:#666666;
          padding-left:.17rem;

    }

  .head>div>div:nth-of-type(3){
         display: flex;
         padding:0 .37rem;
    }
  .head>div>div:nth-of-type(3)>a{
        display: flex;
        width:100%;
        align-items:center;
  }

  .head>div>div:nth-of-type(3)>a>span:nth-of-type(1){
      font-size: .21rem;
      color:#0099ff;
      /*font-weight: bold;*/
      padding-right:.05rem;

  }
  .head>div>div:nth-of-type(3)>a>span:nth-of-type(2){
        width:0;
        height:0;
        border-width:.1rem .1rem 0 .1rem;
        border-style:solid;
        border-color:#0099ff transparent transparent transparent;

  }


</style>
