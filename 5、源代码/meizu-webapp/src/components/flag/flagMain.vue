<template>
    <div class="main">
        <flag-banner></flag-banner>
        <flag-list></flag-list>
    </div>

</template>

<script>
  import './flagBanner'
  import './flagList'
  import FlagBanner from "./flagBanner";
  import FlagList from "./flagList";
    export default {
        name: "flagMain",
        components:{
          name: "flagBanner", FlagList, FlagBanner,

        }
    }
</script>

<style scoped>
  .main{
      flex:1;
      overflow:auto;
  }
</style>
