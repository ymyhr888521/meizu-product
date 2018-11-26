<template>
    <div class="all" v-if="msg.flagList">
        <flag-header></flag-header>
        <flag-main :msg="msg"></flag-main>
    </div>
</template>

<script>
    import '../assets/css/public.css';
    import flagHeader from  '../components/flag/flagHeader';
    import flagMain from  '../components/flag/flagMain';
    import apis from '../apis/apis';
    export default {
        name: "flag",
        components:{
            flagHeader,
            flagMain,
        },
      data(){
          return{
            msg:{}
          }
      },
      mounted(){
        this. _goodsComponent();
      },
      methods:{
        _goodsComponent(){
          apis.getData(data=>{
            this.msg = data;
          })
        }
      }
    }
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    height:100%;
}

</style>
