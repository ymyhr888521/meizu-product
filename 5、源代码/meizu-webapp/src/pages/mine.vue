<template>
    <div class="all-mine" v-if="msg.myOrder">
        <mine-banner></mine-banner>
        <mine-main :msg="msg"></mine-main>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import MineBanner from "../components/mine/mineBanner";
    import MineMain from "../components/mine/mineMain";
    import IndexFooter from "../components/index/indexFooter";
    import apis from '../apis/apis'
    export default {
      name: "mine",
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
      },

      components: {IndexFooter, MineMain, MineBanner}
    }
</script>

<style scoped>
  .all-mine{
      display: flex;
      flex-direction: column;
      height:100%;
  }

</style>
