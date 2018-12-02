<template>
    <div class="all">
        <goods-info :msg="msg"></goods-info>
    </div>
</template>

<script>
    import GoodsInfo from "../components/goodsDetail/goodsInfo";
    import apis from '../apis/apis'
    export default {
        name: "goodsDetail",
        components: {GoodsInfo},
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
    display:flex;
    height:100%;
    flex-direction: column;
}

</style>
