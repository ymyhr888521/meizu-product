<template>
    <div class="goods-list">
        <div class="top">
            <a href="#" class="changeicon all-icon"><img src="../../assets/img/full.png"></a>
            <h3>魅族</h3>
        </div>

        <div class="info clicker"  v-for="(item,index) in msg.img">
            <a href="#" class="changeicon"><img src="../../assets/img/full.png"></a>
            <dl>
                <dt>
                  <img :src="item">
                </dt>
                <dd>
                    <h3>{{msg.name[index]}}</h3>
                    <p>{{msg.info[index]}}</p>
                    <h3>{{msg.price[index]}}</h3>
                </dd>
            </dl>
            <div>
                <span>x 1</span>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "goodsCartList",
        props:['msg'],
        data(){
            return {
                flag:true
            }
        },
        mounted() {
           this._changeImg();
        },
        methods:{
            _changeImg(){
                $('.changeicon').click(
                      function(){
                          this.flag = !this.flag;
                              if(this.flag){
                                    $(this).find('img').attr({'src':'../../../static/empty.png'});
                              }else if(!this.flag){
                                    $(this).find('img').attr({'src':'../../../static/full.png'});
                              }

                       }
                  );
              },

        }

    }
</script>

<style scoped>
.goods-list{
    background-color: #fff;
    padding:0 .24rem;
    display: flex;
    flex-direction: column;
    margin-top: .18rem;
}
.goods-list>.top{
    height:.67rem;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;

}
.goods-list>.top>a{
  width:.33rem;
  height:.33rem;
}

.goods-list>.top>a>img{
  width:100%;
  height:100%;
}


.goods-list>.top>h3{
    font-size:.2rem;
    color:#999;
    padding-left:.5rem;
}
.goods-list>.info {
  height: 1.5rem;
  padding: .26rem 0 .23rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods-list>.info>a{
  width:.33rem;
  height:.33rem;
}

.goods-list>.info>a>img{
  width:100%;
  height:100%;
}

.goods-list>.info>dl {
  display: flex;
}
.goods-list>.info>dl>dt{
    width:.81rem;
    height:1rem;
}
.goods-list>.info>dl>dt>img{
    width:100%;
    height:100%;
}

.goods-list>.info>dl>dd{
    padding-left:.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.goods-list>.info>dl>dd>h3:nth-of-type(1){
      font-size: .22rem;
      color:#333;
}
.goods-list>.info>dl>dd>p{
  font-size: .17rem;
  color:#ccc;
  white-space: nowrap;
}
.goods-list>.info>dl>dd>h3:nth-of-type(2){
    font-size:.18rem;
    color:#ff3366;

}
.goods-list>.info>div{
    height:100%;
}
.goods-list>.info>div>span{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height:100%;
}


</style>
