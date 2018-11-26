<template>
    <div class="all">
        <reg-header></reg-header>
        <reg-put></reg-put>
    </div>
</template>

<script>
    import RegHeader from "../components/reg/regHeader";
    import RegPut from "../components/reg/regPut";
    export default {
        name: "reg",
      components: {RegPut, RegHeader}
    }
</script>

<style scoped>
.all{
    height:100%;
    display: flex;
    flex-direction: column;
    padding:0 .35rem;
}

</style>
