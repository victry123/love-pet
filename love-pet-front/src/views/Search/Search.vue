<template>
  <div id="Search">
    <div class="main">
      <HeaderLogo></HeaderLogo>
      <div class="content">
        <div class="content_top" v-for="item in search_count" :key="item.id">
          <!-- 头像 -->
          <div class="header_photo">
            <img alt="" :src="item.url" />
          </div>

          <div class="header_work">
            <!-- 名字 -->
            <div class="word">
              {{ item.name }}
            </div>
            <!-- 获赞和粉丝 -->
            <div class="word_bottom">
              {{ item.zang }}获赞
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {{ item.feng }}粉丝
            </div>
          </div>

          <!-- 关注 -->
          <div class="attention">
            <button>关注</button>
          </div>
        </div>

        <!-- 搜索数据 -->
        <div class="search_data">
          <div class="search_box" v-for="item in search_list" :key="item.id">
            <!-- 头像 -->
            <div class="search_photo">
              <img alt="" :src="item.photo_utl" />
            </div>
            <!-- 名字时间 -->
            <div class="search_main">
              <!-- 名字 -->
              <div class="search_name">{{ item.name }}</div>
              <!-- 时间 -->
              <div class="search_time">{{ item.time }}</div>

              <!-- 内容 -->
              <div class="search_content">
                <div class="search_content_title">{{ item.content }}</div>
                <div class="search_content_main" v-if="item.type == 'photo'">
                  <img alt="" :src="item.content_photo" />
                </div>
                <div class="search_content_main" v-if="item.type == 'video'">
                  <video controls="controls" :src="item.content_video"></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo/HeaderLogo.vue";
export default {
  data() {
    return {
      search_count: [
        {
          id: 1,
          name: "xxx",
          zang: "666w",
          feng: "666w",
          url: "http://localhost:8080/img/cat.db8703c1.png",
        },
      ],
      search_list: [
        {
          id: 1,
          name: "xxx",
          photo_utl: "http://localhost:8080/img/cat.db8703c1.png",
          time: "2022-1-23",
          content: "xxx好可爱!",
          // text 是只有文字 photo是有文字和图片 video是文字和视频
          type: "video",
          content_photo: "",
          content_video: "https://www.w3school.com.cn/i/movie.ogg",
        },
        {
          id: 1,
          name: "xxx",
          photo_utl: "http://localhost:8080/img/cat.db8703c1.png",
          time: "2022-1-23",
          content: "xxx好可爱!",
          // text 是只有文字 photo是有文字和图片 video是文字和视频
          type: "photo",
          content_photo: "http://localhost:8080/img/userimg.aae57e08.png",
          content_video: "",
        },
      ],
    };
  },
  components: {
    HeaderLogo,
  },
};
</script>

<style>
@import "//at.alicdn.com/t/font_2876277_7ex4php5szg.css";

#Search {
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

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 60px);
  flex: 1 1 auto;
  background-color: #161722;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
}

.content_top {
  width: 857px;
  height: 117px;
  background-color: #2e2f3b;
  border-radius: 4px;
  margin: 61px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header_photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  margin-left: 42px;
}

.header_photo img {
  width: 60px;
  border-radius: 50%;
}

.word {
  color: #fff;
  font-size: 16px;
  display: flex;
  margin-left: 20px;
}

.word_bottom {
  margin-left: 20px;
  margin-top: 25px;
  display: flex;
  color: #fff;
  font-size: 14px;
  align-items: flex-end;
}

.header_work {
  display: flex;
  flex-direction: column;
}

.attention {
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
  margin-right: 20px;
}

.attention button {
  background-color: #fe2c55;
  width: 65px;
  height: 30px;
  border-radius: 4px;
  border: 0;
  color: #fff;
}

.attention button:hover {
  background-color: #f22a51;
}

.search_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.search_box {
  width: 857px;
  background-color: rgba(22, 23, 34, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(128, 128, 128, 1);
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.search_photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-left: 20px;
  margin-top: 20px;
}

.search_photo img {
  width: 50px;
  border-radius: 50%;
}

.search_main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.search_name {
  color: #fff;
  font-size: 16px;
}

.search_time {
  margin-top: 10px;
  color: #828285;
  font-size: 12px;
}

.search_content_main {
  margin-top: 20px;
}
.search_content_main img {
  width: 73px;
  height: 80px;
  border-radius: 4px;
}

.search_content_title {
  color: #fff;
  font-size: 16px;
}

.search_content {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
</style>
