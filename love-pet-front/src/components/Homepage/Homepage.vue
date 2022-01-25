<template>
  <div id="homepage">
    <ul>
      <li class="hd"></li>
      <li class="hd"></li>
  
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
#homepage {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  overflow-y: scroll;
}
.hd {
  display: inline-block;
  background-color: red;
  width: 200px;
  height: 200px;
}
</style>
