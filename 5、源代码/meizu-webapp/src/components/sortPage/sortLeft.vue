<template>
    <div class="left">
        <ul class="nav-list" v-if="get(i)">
          <li @click="_run(index)" v-for="(item,index) in msg"><a>{{item.title}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sortLeft",
        props:['msg','i'],
        data(){
            return{
              ind:0
            }
        },
        mounted(){
          this._click();
        },
        methods:{
          get(i){
            console.log('get '+i)
            // this.ind = i;
            this.changColor(i)
            return true;
          },
          changColor(idx){
            // console.log('changecolor'+idx)
            let target =  $('.nav-list>li');
            target.css({borderLeft:".03rem solid #fff"});
            target.find('a').css({color:"#333"});
            target.eq(idx).css({borderLeft:".03rem solid #0099ff"});
            target.eq(idx).find('a').css({color:"#0099ff"});
          },
            _click(){
                let that = this;
                $('.nav-list>li').each(function(e){
                    $(this).click(function(){
                      // that.ind = e;
                    })
                })
            },
          _run(idx){
              this.$emit('change',idx);
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
