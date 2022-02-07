<template>
  <div id="hostpot">
    <ul v-for="item in articles" :key="item.id">
      <li class="hd">
        <div>
          <a href="">
            <div class="cover">
              <img :src="item.coverimg" alt="" />
            </div>
          </a>
          <a href="">
            <div class="title">
              <p>
                {{ item.title }}
              </p>
            </div>
          </a>
          <div class="contentuser">
            <a href="">
              <img :src="item.user.userimg" alt="" class="contentuserimg" />
            </a>
            <a href="">
              <span>{{ item.user.username }}</span>
            </a>
            <a href="" class="issuetime">
              <span>{{ item.issuetime }}</span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "#新农人计划2021 #村里大联欢 #欢欢喜喜过大年",
          user: {
            username: "往生堂堂主",
            userimg: require("../../assets/img/userimg.png"),
          },
          issuetime: "2小时前",
          coverimg: require("../../assets/img/userimg.png"),
        },
      ],
    };
  },
};
</script>

<style>
#hostpot {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  overflow-y: scroll;
}
.hd {
  display: inline-block;
  width: 320px;
  height: 340px;
  margin-top: 30px;
  margin-left: 30px;
}

.cover {
  width: 100%;
  height: 240px;
}

.cover img {
  width: 100%;
  height: 100%;
}

.title {
  width: 100%;
  height: 48px;
  margin-top: 8px;
}
.title p {
  color: #fff;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 16px;
  line-height: 24px;
}

.contentuser {
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 34px;
  margin-top: 8px;
  align-items: center;
}
.contentuser span {
  color: #ddd;
}
.contentuserimg {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 16px;
}
.issuetime {
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
}
.issuetime span {
  color: #999;
}
</style>
