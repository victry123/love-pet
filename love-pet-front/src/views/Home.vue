<template>
  <div id="home">
    <Aside></Aside>
    <div class="main">
      <Header></Header>
      <div class="main-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import Header from "@/components/Header/Header.vue";
export default {
  components: {
    Aside,
    Header,
  },
};
</script>

<style>
@import "//at.alicdn.com/t/font_2876277_7ex4php5szg.css";

#home {
  display: flex;
  height: 100%;
  width: 100%;
}
.main {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-main {
  width: 100%;
  height:calc(100% - 60px);
  flex: 1 1 auto;
  background-color: #161722;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
}
</style>
