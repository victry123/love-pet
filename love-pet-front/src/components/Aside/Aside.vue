<template>
  <div id="aside">
    <div class="logo" :style="{ backgroundImage: `url(${imgurl})` }"></div>
    <div class="nav">
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: require("../../assets/img/logo.png"),
    };
  },
};
</script>

<style>
#aside {
  flex-basis: 160px;
  width: 160px;
  height: 937px;
  background-color: #060716;
}
.logo {
  width: 130px;
  height: 66px;
  background-repeat: no-repeat;
  margin: 0 auto;
}
</style>