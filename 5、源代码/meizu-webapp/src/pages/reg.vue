<template>
    <div class="all">
        <reg-header></reg-header>
    </div>
</template>

<script>
    import RegHeader from "../components/reg/regHeader";
    export default {
        name: "reg",
      components: {RegHeader}
    }
</script>

<style scoped>
.all{
    height:100%;
    display: flex;
    flex-direction: column;
}

</style>
