<template>
  <div class="phone">
      <div>
          <div>
              <a href="#">
                  <img src="../../../static/phone1.png" >
              </a>
          </div>

          <div>
              <div><a href="#"><img src="../../../static/phone2.png"></a></div>
              <div><a href="#"><img src="../../../static/phone3.png"></a></div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "indexPhoneImg",
    }
</script>

<style scoped>
.phone{
    height:3.6rem;
    width:100%;
}
.phone>div{
    height:100%;
    display: flex;
}
.phone>div>div{
    flex:0 0 50%;
}
.phone>div>div:nth-of-type(1) {
    background: #55a532;
}

.phone>div>div:nth-of-type(1) img {
    width:100%;
    height:100%;
}



.phone>div>div:nth-of-type(2){
    display: flex;
    flex-direction: column;
}

.phone>div>div:nth-of-type(2)>div{
    flex:0 0 50%;
    background:#007aff;
}

.phone>div>div:nth-of-type(2)>div img{
    width:100%;
    height:100%;
}
</style>
