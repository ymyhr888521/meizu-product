<template>
    <div class="main">
      <sort-left></sort-left>
      <sort-right></sort-right>
    </div>
</template>

<script>
    import SortLeft from "./sortLeft";
    import SortRight from "./sortRight";
    export default {
        name: "sortAside",
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
