<template>
  <div class="Detail">
    <HeaderLogo></HeaderLogo>

    <div class="Detail-centre">
      <div class="Detail-content">
        <h2 class="Detail-title">三个人的双排</h2>
        <div class="Detail-c1">
          <div class="Detail-l"><i>喜欢</i><span>20.8W</span></div>
          <div class="Detail-p"><i>评论</i><span>6666</span></div>
          <div class="Detail-t">发布时间: <span>2022-1-22 16.23</span></div>
        </div>
        <video
          class="Detail-video"
          src="../../assets/img/啦啦啦.mp4"
          controls="controls"
          loop
          autoplay
        ></video>
      </div>
      <div class="recently-publish">
          <div>
              <img src="../../assets/img/cat.png" alt="">
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
      user_info: {
        attention: 2,
        fans: 1,
        praise: 1,
        user_name: "养猫第一人",
        user_describe: "谢谢大家!!!",
      },
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
      ],
    };
  },

  components: {
    HeaderLogo,
  },
};
</script>

<style>
.Detail {
  height: 100%;
  width: 100%;
  background-color: #161722;
}
.Detail-centre {
  width: 1200px;
  height: 600px;
  /* background-color: pink; */
  margin: 20px auto;
}
.Detail-content {
  float: left;
  width: 800px;
  height: 500px;
  /* background-color: aliceblue; */
}

.recently-publish {
  float: right;
  width: 360px;
  height: 500px;
  background-color: aquamarine;
}

.Detail-title {
  color: #fff;
}

.Detail-c1 {
  margin-top: 10px;
}

.Detail-l {
  float: left;
  margin-right: 10px;
  color: #fff;
}

.Detail-p {
  float: left;
  margin-right: 10px;
  color: #fff;
}

.Detail-t {
  float: left;
  color: #6d6e73;
}

.Detail-video {
  width: 800px;
  height: 480px;
  margin-top: 10px;
}
</style>
