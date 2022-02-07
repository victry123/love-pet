<template>
  <div id="Petdating">
    <div class="pettitle">
      <div class="ptitle">
        <p>
          标题--我家有只大熊猫一直单着 有看的上的吗
        </p>
        <div class="pspan">
          <span><i class="iconfont icon-shijian"></i>2022-01-20 15:00</span>
          <span><i class="iconfont icon-dizhi"></i>四川省xxx市xxx大道xxx号</span>
        </div>
      </div>
      <div class="puser">
        <div class="puseru">
          <a href=""><img :src="this.$store.state.userimgurl" alt="" class="petuserimg" /></a>
          <span>往生堂堂主</span>
        </div>
        <div class="pusera">

        </div>
      </div>
    </div>
    <div class="petimg">
      <img :src="this.$store.state.userimgurl" alt="" class="img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#Petdating {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.puser {
  display: flex;
  flex-grow: 1;
}
.puseru {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 10px;
}
.petuserimg {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 25px;
}
.pettitle {
  width: 900px;
  height: 150px;
  display: flex;
  background-color: antiquewhite;
}
.ptitle {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
}
.ptitle p {
  color: block;
  height: 40%;
  font-size: 18px;
  line-height: 30px;
  font-weight: bolder;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.pspan {
  margin-top: 20px;
}
.pspan span {
  font-size: 16px;
  margin-right: 30px;
}
.pspan i {
  margin-right: 5px;
  font-size: 18px;
}
.petimg {
  width: 900px;
  height: 600px;
}
.img {
  width: 100%;
  height: 100%;
}
</style>
