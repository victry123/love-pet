<template>
  <div id="aside">
    <div class="logo" :style="{ backgroundImage: `url(${imgurl})` }"></div>
    <div class="nav">
      <div class="Aside-icon">
        <router-link to="/Home/homepage">
          <i class="iconfont icon-shouye"></i>
          <div><span>首页</span></div>
        </router-link>
      </div>
      <div class="Aside-icon">
        <router-link to="/Home/attention">
          <i class="iconfont icon-wodeguanzhu"></i>
          <div><span>关注</span></div>
        </router-link>
      </div>
      <div class="Aside-icon">
        <router-link to="/Home/hotspot">
          <i class="iconfont icon-ef-redian-gongju"></i>
          <div><span>热点</span></div>
        </router-link>
      </div>
      <div class="Aside-icon">
        <router-link to="/Home/Petdating">
          <i class="iconfont icon-xiangqin"></i>
          <div><span>宠物相亲</span></div>
        </router-link>
      </div>
      <div class="Aside-icon">
        <router-link to="/Home/Petadoption">
          <i class="iconfont icon-chongwu"></i>
          <div><span>宠物收养</span></div>
        </router-link>
      </div>
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
@import "//at.alicdn.com/t/font_2876277_9ga5509t4yc.css";
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

.Aside-icon {
  width: 120px;
  height: 40px;
  margin: 0 auto;
  font-size: 20px;
  color: aliceblue;
  line-height: 40px;
  margin-top: 20px;
}

.Aside-icon div {
  font-size: 18px;
  display: inline-block;
  margin-left: 10px;
}

.Aside-icon i {
  font-size: 22px;
}
</style>