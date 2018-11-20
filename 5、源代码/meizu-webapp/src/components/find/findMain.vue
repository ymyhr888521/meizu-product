<template>
    <div class="main">
        <sort></sort>
        <passage></passage>
        <new-pro></new-pro>
    </div>
</template>

<script>
    import Sort from "./sort";
    import Passage from "./passage";
    import NewPro from "./newPro";
    export default {
        name: "findMain",
      components: {NewPro, Passage, Sort}
    }
</script>

<style scoped>
.main{
    flex:1;
    overflow: auto;
}
</style>
