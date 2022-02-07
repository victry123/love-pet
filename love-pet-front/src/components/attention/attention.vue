<template>
  <div id="attention">
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
</template>

<script>
export default {
  data() {
    return {
      search_list: [
        {
          id: 1,
          name: "xxx",
          photo_utl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
          time: "2022-1-23",
          content: "xxx好可爱!",
          // text 是只有文字 photo是有文字和图片 video是文字和视频
          type: "video",
          content_photo: "",
          content_video: "https://www.w3school.com.cn/i/movie.ogg",
        },
        {
          id: 2,
          name: "xxx",
          photo_utl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
          time: "2022-1-23",
          content: "xxx好可爱!",
          // text 是只有文字 photo是有文字和图片 video是文字和视频
          type: "photo",
          content_photo: "http://localhost:8080/img/userimg.aae57e08.png",
          content_video: "",
        },
        {
          id: 3,
          name: "xxxxx",
          photo_utl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
          time: "2022-1-23",
          content: "yyds!",
          // text 是只有文字 photo是有文字和图片 video是文字和视频
          type: "text",
          content_photo: "",
          content_video: "",
        },
      ],
    };
  },
};
</script>

<style>
#attention {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.search_data {
  margin: 0 auto;
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
