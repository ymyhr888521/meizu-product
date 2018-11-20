<template>
    <div class="all-mine">
        <mine-banner></mine-banner>
        <mine-main></mine-main>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import MineBanner from "../components/mine/mineBanner";
    import MineMain from "../components/mine/mineMain";
    import IndexFooter from "../components/index/indexFooter";
    export default {
        name: "mine",
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
