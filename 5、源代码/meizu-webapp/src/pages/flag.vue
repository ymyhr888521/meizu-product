<template>
    <div class="all">
        <flag-header></flag-header>
        <flag-main></flag-main>
    </div>
</template>

<script>
    import '../assets/css/public.css';
    import flagHeader from  '../components/flag/flagHeader';
    import flagMain from  '../components/flag/flagMain';
    export default {
        name: "flag",
        components:{
            flagHeader,
            flagMain,
        }
    }
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    height:100%;
}

</style>
