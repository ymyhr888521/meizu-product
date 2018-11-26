<template>

  <header class='header' id="header">
    <div>
      <div>
        <input type="text" placeholder="MEIZU 16th"/>
      </div>
      <div>
        <a href="#">
          <i class="iconfont iconl">&#xe70a;</i>
        </a>
      </div>
    </div>
  </header>

</template>

<script>
  export default {
    name: "sortHeader",
  }
</script>


<style scoped>

  header{
    padding:.15rem 0;
    width:100%;
    background: #fff;
    /*z-index: 99;*/
    border-bottom: 1px solid #c9c9c9;
  }

  header>div{
    display: flex;
    justify-content: space-between;
    padding-left:.21rem;
  }
  header>div>div{
    height:.45rem;
    display: flex;
    align-items: center;
  }

  header>div>div:nth-of-type(1) {
    width:100%;
    height:.45rem;
    border-radius:30px;
    overflow: hidden;
  }
  header>div>div:nth-of-type(1) input{
    width:100%;
    height:.45rem;
    line-height:inherit;
    background: url("../../assets/img/soso.png") no-repeat .18rem center;
    background-size:.2rem .2rem;
    background-color:#C8C8C8;
    opacity:.6;
    text-indent: 2.6em;
    font-size: .2rem;
    color:#333;
    transition: background-color .3s;
  }

  header>div>div:nth-of-type(2) {
    padding: 0 .3rem;
  }
  header>div>div:nth-of-type(2)>a{
    display:flex;

  }
  header>div>div:nth-of-type(2) i{
    font-size:.33rem;
    vert-align: middle;
    color:#666;
  }


</style>
