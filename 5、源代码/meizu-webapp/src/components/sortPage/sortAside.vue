<template>
    <div class="main">
      <sort-left :msg="msg"></sort-left>

      <sort-right :index="index" :msg="msg"></sort-right>
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
