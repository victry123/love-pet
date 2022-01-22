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
    Header
  },
};
</script>

<style>
@import "//at.alicdn.com/t/font_2876277_7ex4php5szg.css";

#home {
  display: flex;
}
.main {
  flex-grow: 1;
  height: 937px;
  display: flex;
  flex-direction: column;
}

.main-main {
  width: 100%;
  flex-grow: 1;
  background-color: #161722;
}


</style>
