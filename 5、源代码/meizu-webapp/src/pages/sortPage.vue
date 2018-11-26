<template>
    <div class="all">
        <sort-header></sort-header>
        <sort-aside></sort-aside>
        <index-footer></index-footer>
    </div>
</template>

<script>
  import '../assets/css/public.css'
  import SortHeader from "../components/sortPage/sortHeader";
  import SortAside from "../components/sortPage/sortAside";
  import IndexFooter from "../components/index/indexFooter";
    export default {
        name: "sortPage",
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
