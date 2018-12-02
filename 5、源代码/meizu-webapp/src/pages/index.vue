<template>
  <div class="all"   v-if="msg.indexGuess">
      <index-header></index-header>
      <index-main :msg='msg'></index-main>
      <index-footer></index-footer>
  </div>
</template>
<script>

    import '../assets/css/public.css';
    import 'swiper/dist/css/swiper.css';
    import apis from '../apis/apis';
    import indexHeader from "../components/index/indexHeader";
    import indexMain from "../components/index/indexMain";
    import indexFooter from "../components/index/indexFooter";


    export default {
        name: "index",
        components: {
          indexHeader,
          indexMain,
          indexFooter,

        },
      data(){
          return {
            msg:{}
          }
      },
      mounted(){
        this._indexComponent();
      },
      methods:{
          _indexComponent(){
          apis.getData(data=>{
             this.msg = data;
             console.log(this.msg)
          })
        }
      }

    }
</script>

<style scoped>


  .all{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
