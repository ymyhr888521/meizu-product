<template>
    <div class="all" v-if="msg.sort">
        <sort-header></sort-header>
        <sort-aside :msg="msg.sort"></sort-aside>
        <index-footer></index-footer>
    </div>
</template>

<script>
  import '../assets/css/public.css'
  import SortHeader from "../components/sortPage/sortHeader";
  import SortAside from "../components/sortPage/sortAside";
  import IndexFooter from "../components/index/indexFooter";
  import apis from '../apis/apis';
    export default {
        name: "sortPage",
        data(){
          return{
            msg:{}
          }
        },
        mounted(){
          this. _buyOrderComponent();
        },
        methods:{
          _buyOrderComponent(){
            apis.getData(data=>{
              this.msg = data;
            })
          }
        },
      components: {IndexFooter, SortAside, SortHeader}
    }
</script>

<style scoped>
.all{
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
