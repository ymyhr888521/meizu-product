<template>
    <div class="main">
        <flag-banner></flag-banner>
        <flag-list :msg="msg.flagList"></flag-list>
    </div>

</template>

<script>
  import './flagBanner'
  import './flagList'
  import FlagBanner from "./flagBanner";
  import FlagList from "./flagList";
    export default {
        name: "flagMain",
        props:["msg"],
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
