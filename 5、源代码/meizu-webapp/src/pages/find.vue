<template>
    <div class="all" v-if="msg.newPro">
        <find-header></find-header>
        <find-main :msg="msg"></find-main>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import FindHeader from "../components/find/findHeader";
    import FindMain from "../components/find/findMain";
    import IndexFooter from "../components/index/indexFooter";
    import apis from '../apis/apis';
    export default {
        name: "find",
        data(){
            return{
                msg:{}
            }
        },
        mounted(){
          this._findComponent();
        },
        methods:{
          _findComponent(){
            apis.getData(data=>{
              this.msg = data;
            })
          }
        },
        components: {IndexFooter, FindMain, FindHeader}
    }
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    height:100%;
}

</style>
