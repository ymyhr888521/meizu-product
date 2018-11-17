<template>
  <div class="all">
      <index-header></index-header>
      <index-main></index-main>
      <index-footer></index-footer>
  </div>
</template>
<script>
    import '../assets/css/public.css';
    import 'swiper/dist/css/swiper.css';
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

    }
</script>

<style scoped>
.all{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
