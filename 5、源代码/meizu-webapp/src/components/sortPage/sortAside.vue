<template>
    <div class="main">
      <sort-left @change="changeSort" :msg="msg" :i="index"></sort-left>

      <sort-right @eve="changeBor"  :index="index" :msg="msg"></sort-right>
    </div>
</template>

<script>
    import SortLeft from "./sortLeft";
    import SortRight from "./sortRight";
    export default {
        name: "sortAside",
        props:['msg'],
        data(){
            return{
              index:0
            }
        },
        methods:{
           changeSort(idx){
                this.index = idx;
                console.log('changeAside'+idx)
           },
            changeBor(i){
                this.index = i;
                console.log(this.index)
            }
        },
        components: {SortRight, SortLeft}
    }
</script>

<style scoped>
.main{
  display: flex;
  /*justify-content: space-between;*/
  height:100%;
}
</style>
