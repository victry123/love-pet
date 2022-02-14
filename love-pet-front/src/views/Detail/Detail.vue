<template>
  <div class="Detail">
    <HeaderLogo></HeaderLogo>

    <div class="Detail-centre">
      <!-- 标题文字 -->
      <div class="Detail-content">
        <div class="Detail-title">
          <h2>{{ user_count.title }}</h2>
        </div>

        <div class="Detail-main_word">
          <div class="Detail_word">
            <i class="iconfont">&#x3449;</i>
            <span>{{ user_count.like }}</span>
          </div>
          <div class="Detail_word">
            <i class="iconfont">&#xe63a;</i>
            <span>{{ user_count.comment }}</span>
          </div>
          <div class="Detail-time">
            发布时间: <span>{{ user_count.datetime }}</span>
          </div>
        </div>

        <!-- 详情页内容 -->
        <div class="detail-center">
          <div class="search_content_title">{{ user_count.content }}</div>
          <div class="search_content_main" v-if="user_count.type == 'photo'">
            <img alt="" :src="user_count.content_photo" />
          </div>
          <div class="detail-video" v-if="user_count.type == 'video'">
            <video controls="controls" :src="user_count.content_video"></video>
          </div>
        </div>

        <!-- 全部评论 -->
        <div class="comment_main">
          <div class="comment_title">全部评论</div>

          <!-- 评论组件 -->
          <Comment></Comment>
        </div>
      </div>

      <!-- 用户信息 -->
      <div class="user_info">
        <div class="content_top">
          <!-- 头像 -->
          <div class="user_info_photo">
            <img alt="" :src="user_info.url" />
          </div>

          <div class="user_info_work">
            <!-- 名字 -->
            <div class="word">
              {{ user_info.name }}
            </div>
            <!-- 获赞和粉丝 -->
            <div class="word_bottom">
              {{ user_info.zang }}获赞
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {{ user_info.feng }}粉丝
            </div>
          </div>

          <!-- 关注 -->
          <div class="attention">
            <button>关注</button>
          </div>
        </div>

        <!-- 最近发布 -->
        <div class="new_main">
          <div class="new_main_word">最近发布</div>

          <div class="new_main_center" v-for="item in new_date" :key="item.id">
            <!-- 图片 -->
            <div class="new_photo">
              <img alt="" :src="item.photo_url" />
            </div>

            <div class="new_word">
              <!-- 标题 -->
              <div class="new_title">
                {{ item.title }}
              </div>
              <div class="Detail_word">
                <i class="iconfont">&#x3449;</i>
                <span>{{ item.new_like }}</span>
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
import Comment from "@/components/Comment/Comment.vue";
export default {
  data() {
    return {
      user_count: {
        id: "1",
        title: "标题xxxxxxxxxxx",
        like: "22w",
        comment: "666w",
        datetime: "2022-2-13 16:23",
        photo_utl:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
        time: "2022-1-23",
        content: "",
        // text 是只有文字 photo是有文字和图片 video是文字和视频
        type: "video",
        content_photo:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
        content_video: "https://www.w3school.com.cn/i/movie.ogg",
      },
      user_info: {
        id: 1,
        name: "xxx",
        zang: "666w",
        feng: "666w",
        url: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      },

      new_date: [
        {
          id: 1,
          photo_url:
            "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          title: "xxxxxxx",
          new_like: "123w",
        },
         {
          id: 2,
          photo_url:
            "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          title: "xxxxxxx",
          new_like: "123w",
        },
      ],
    };
  },

  components: {
    HeaderLogo,
    Comment,
  },
};
</script>
<style>
@import "../../assets/font/iconfont.css";
</style>

<style scoped>
.Detail {
  background-color: #161722;
}

.Detail-centre {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.Detail-content {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #161722;
}

.Detail-title h2 {
  color: #fff;
}

.Detail-main_word {
  display: flex;
  flex-direction: row;
}

.Detail_word {
  margin-right: 20px;
}

.Detail_word span {
  color: #fff;
}

.Detail-time {
  color: rgba(109, 110, 115, 1);
  font-size: 10px;
}

.iconfont {
  color: rgba(196, 196, 196, 1);
  font-size: 10px;
  margin-right: 2px;
}

.detail-center {
  width: 972px;
  margin-top: 20px;
}

.detail-video video {
  width: 972px;
  height: 587px;
}
.user_info {
  display: flex;
  flex-direction: column;
}
.comment_main {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.comment_title {
  color: rgba(109, 110, 115, 1);
  font-size: 12px;
}

.content_top {
  width: 500px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #161722;
}

.word_bottom {
  margin-left: 20px;
  margin-top: 19px;
  display: flex;
  color: #fff;
  font-size: 14px;
  align-items: flex-end;
}

.new_main {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 42px;
}

.new_main_word {
  color: rgb(155, 152, 152);
  font-size: 16px;
}

.new_main_center {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.new_photo {
  width: 180px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 20px;
}

.new_photo img {
  width: 180px;
}

.new_word {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}

.new_title {
  color: #fff;
  font-size: 16px;
  display: flex;
}

.user_info_photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  margin-left: 42px;
}
.user_info_photo img {
  width: 60px;
  border-radius: 50%;
  border: 0;

}
.user_info_work {
  display: flex;
  flex-direction: column;
}
</style>
