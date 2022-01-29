<template>
  <div id="aside">
    <div class="logo" :style="{ backgroundImage: `url(${imgurl})` }"></div>
    <div class="nav" v-for="(item, index) in iconlist" :key="item.id">
      <router-link :to="item.url">
        <div
          class="Aside-icon"
          @click="handleClick(index, item.id)"
          @mouseover="mover(index)"
          @mouseleave="mleave"
        >
          <div
            :to="item.url"
            :class="{ active: active == index, mactive: mactive == index }"
          >
            <i :class="item.icon"></i>
            <div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: require("../../assets/img/logo.png"),
      active: 0,
      iconlist: [
        {
          id: 1,
          icon: "iconfont icon-shouye",
          name: "首页",
          url: "/Home/homepage",
        },
        {
          id: 2,
          icon: "iconfont icon-wodeguanzhu",
          name: "关注",
          url: "/Home/attention",
        },
        {
          id: 3,
          icon: "iconfont icon-ef-redian-gongju",
          name: "热点",
          url: "/Home/hotspot",
        },
        {
          id: 4,
          icon: "iconfont icon-xiangqin",
          name: "宠物相亲",
          url: "/Home/Petdating",
        },
        {
          id: 5,
          icon: "iconfont icon-chongwu",
          name: "宠物收养",
          url: "/Home/Petadoption",
        },
      ],
      mactive: 100,
    };
  },
  methods: {
    // 点击高亮
    handleClick(index) {
      this.active = index;
    },
    // 鼠标移入高亮
    mover(index) {
      this.mactive = index;
    },
    // 鼠标移出取消高亮
    mleave() {
      this.mactive = 100;
    },
  },
};
</script>

<style>
#aside {
  flex-basis: 160px;
  width: 160px;
  height: 100%;
  background-color: #060716;
  position: relative;
}
.logo {
  width: 130px;
  height: 66px;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.Aside-icon {
  display: block;
  width: 120px;
  height: 40px;
  margin: 0 auto;
  font-size: 20px;
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
.active {
  color: #fff;
}
.mactive {
  color: #fff;
}
</style>
