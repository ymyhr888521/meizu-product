<template>
    <div class="put">
          <div>
              <input type="text" class="user" placeholder="手机号/Flyme账号">
              <span></span>
          </div>

          <div>
              <input type="text" placeholder="密码">
              <a href="#" class="clickImg"><img src="../../../static/eyec.png"></a>
          </div>

          <div><a href="#">忘记密码?</a></div>

          <router-link to="/mine" tag="div" class="btnC">
              <input type="button" class="btn" value="登录">
          </router-link>

          <div>
              <a href="#">注册</a>
          </div>
    </div>

</template>

<script>
    export default {
        name: "regPut",

        mounted(){
            this._changeImg();
          this._onbulr();
          this._reg()
        },
        data(){
            return {
                flag:true
            }
        },
        methods:{
            /**
             *密码的明文和暗文来回切换,主要是图标切换和input属性type的切换
             */
            _changeImg(){
                $('.clickImg').click(
                  function(){
                    this.flag = !this.flag;
                    if(this.flag) {
                        $(this).children('img').attr({'src':'../../../static/eyen.png'});
                        $(this).prev('input').attr({'type':'password'})
                    }else if(!this.flag){
                        $(this).children('img').attr({'src':'../../../static/eyec.png'});
                        $(this).prev('input').attr({'type':'text'})
                    }
                })
            },
          /**
           * 光标移入和移出input框内,边框的border改变颜色
           * @private
           */
          _onbulr(){
            $('input').focus(function(){
                $(this).css({'border-color':'#0066ff'})
            });
            $('input').blur(function(){
              $(this).css({'border-color':'#E8E8E8'});
              $(this).siblings('span').css({'display':'none'});
              $(this).parent().css({'margin-bottom':'.33rem'});
            });
          },

          /**
           * 账号的正则验证
           * @private
           */
          _reg(){
            $('.user').keyup(function(){
                let reg = /^1[34578]\d{9}$/;
                let $strUsername = $(this).val();
                let len = $strUsername.length;
                if (len > 0) {
                  $(this).parent().siblings('.btnC').children('.btn').css('background', '#0066ff');
                } else {
                  $(this).parent().siblings('.btnC').children('.btn').css('background', '#E8E8E8');
                }

                if(len == 0){
                     $(this).parent().css({'margin-bottom':'0.03rem'});
                     $(this).siblings('span').css({'display':'block'}).text('请输入手机号码');
                }else if(reg.test($strUsername)){
                     $(this).parent().css({'margin-bottom':'0.03rem'});
                     $(this).siblings('span').css({'display':'block'}).text('账号验证通过');
                }else{
                    $(this).parent().css({'margin-bottom':'0.03rem'});
                    $(this).siblings('span').css({'display':'block'}).text('请输入正确的账号');
                }
            });
          }
        }
    }
</script>

<style scoped>
  .put{
      width:100%;
      display: flex;
      flex-direction: column;
  }
  .put>div{
      width:100%;
      text-align: center;
  }
  .put>div>input{
      width:100%;
      height:.55rem;
      border:1px solid #E8E8E8;
      border-radius:1rem;
      text-indent: .2rem;
  }
  .put>div>input::-webkit-input-placeholder{
      color:#DDDDDD;
      font-size:.21rem;
  }

  .put>div:nth-of-type(1){
      margin-bottom:.33rem;
      text-align: left;
  }
  .put>div:nth-of-type(1)>span{
      padding:0 .2rem;
      color:#3399cc;
      display: none;
      height:.3rem;
      line-height: .3rem;
  }

  .put>div:nth-of-type(2){
    margin-bottom:.1rem;
    position: relative;
  }

  .put>div:nth-of-type(2)>a{
      position: absolute;
      width:.32rem;
      height:.22rem;
      right:.2rem;
      top:.175rem;
  }
  .put>div:nth-of-type(2)>a>img{
      width:100%;
      height:100%;
  }

  .put>div:nth-of-type(3){
      margin-bottom:.51rem;
      text-align: right;
  }

  .put>div:nth-of-type(3)>a{
      color:#3399cc;
      font-size: .17rem;
      padding:0 .33rem;
  }

  .put>div:nth-of-type(4){
    margin-bottom:.51rem;
  }
  .put>div:nth-of-type(4)>input{
    border:none;
    font-size: .23rem;
    color:#fff;
    background: #E8E8E8;
  }
  .put>div:nth-of-type(5)>a{
      font-size: .23rem;
      color:#3399cc;
  }


</style>
