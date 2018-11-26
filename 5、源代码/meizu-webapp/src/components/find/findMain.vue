<template>
    <div class="main">
        <sort :msg="msg.sortData"></sort>
        <passage :msg="msg.passage"></passage>
        <new-pro :msg="msg.newPro"></new-pro>
    </div>
</template>

<script>
    import Sort from "./sort";
    import Passage from "./passage";
    import NewPro from "./newPro";
    export default {
        name: "findMain",
        props:["msg"],
        components: {NewPro, Passage, Sort}
    }
</script>

<style scoped>
.main{
    flex:1;
    overflow: auto;
}
</style>
