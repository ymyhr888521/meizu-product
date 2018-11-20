<template>
    <div class="all">
        <find-header></find-header>
        <find-main></find-main>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import FindHeader from "../components/find/findHeader";
    import FindMain from "../components/find/findMain";
    import IndexFooter from "../components/index/indexFooter";
    export default {
        name: "find",
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
