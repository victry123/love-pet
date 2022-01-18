<template>
  <div id="home">
    <Aside></Aside>
    <div class="main">
    </div>

  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
export default {
  components: {
    Aside
  },
};
</script>

<style>
#home {
  display: flex;
}
</style>
