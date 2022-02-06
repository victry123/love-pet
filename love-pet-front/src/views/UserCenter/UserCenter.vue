<template>
  <div class="UserCenter">
    <HeaderLogo></HeaderLogo>

    <div class="user_main">
      <div class="user_top_info">
        <!-- 用户关注粉丝获赞 -->
        <div class="user_top">
          <!-- 头像 -->
          <div class="user_photo">
            <img alt="" src="../../assets/img/cat.png" />
          </div>

          <!-- 关注粉丝获赞 -->
          <div class="user_work">
            <div class="user_work_main">
              <span>关注</span>
              <p>{{ user_info.attention }}</p>
            </div>
            <div class="user_work_main">
              <span>粉丝</span>
              <p>{{ user_info.fans }}</p>
            </div>
            <div class="user_work_main">
              <span>获赞</span>
              <p>{{ user_info.praise }}</p>
            </div>
          </div>
        </div>

        <!-- 描述 -->
        <div class="describe">
          <!-- 名字 -->
          <div class="user_name">{{ user_info.user_name }}</div>
          <!-- 描述 -->
          <div class="user_describe">{{ user_info.user_describe }}</div>
        </div>

        <!-- 用户基本资料 -->
        <div class="user_change">
          <h2>基本资料</h2>
          <div class="user_change_main">
            <!-- 用户名称 -->
            <div class="user_change_name">
              <label>用户名称</label>
              <input type="text" />
            </div>

            <!-- 性别 -->
            <div class="user_change_sex">
              <label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
              <input id="man" type="radio" checked="checked" name="1" />男<input
                id="woman"
                type="radio"
                name="1"
              />女
            </div>

            <!-- 个人简介 -->
            <div class="user_change_describe">
              <label>个人简介</label>
              <input type="text" />
            </div>

            <!-- 所在地区 -->
            <div class="user_change_address">
              <label>所在地区</label>
              <input type="text" />
            </div>

            <!-- 上传头像 -->
            <div class="user_change_photo">
              <label>上传图像</label>
              <input type="file" name="avatar" class="input_file" />
            </div>

            <!-- 保存 -->
            <div class="save">
              <input type="submit" name="save" value="保存" />
            </div>
          </div>
        </div>
      </div>

      <!-- 用户作品 -->
      <div class="user_show">
        <div class="user_show_work">
          <span>作品 &nbsp;</span>
          <span>1</span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span>喜欢</span>
        </div>

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
.UserCenter {
  height: calc(100% - 90px);
  background-color: #161722;
}
.user_main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  background-color: #161722;
  justify-content: space-evenly;
  margin-top: 30px;
}

.user_top_info {
  display: flex;
  flex-direction: column;
}

.user_top {
  display: flex;
  flex-direction: row;
  width: 447px;
  height: 92px;
}

.user_work {
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-around;
}
.user_work_main {
  width: 32px;
  height: 40px;
  display: flex;
  flex-direction: column;
}

.user_work_main span {
  display: flex;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
}

.user_work_main p {
  display: flex;
  color: #fff;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
}

.user_photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
}

.user_photo img {
  width: 60px;
  border-radius: 50%;
}

.describe .user_name {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

.describe .user_describe {
  margin-top: 15px;
  color: rgba(166, 166, 166, 1);
  font-size: 14px;
}
.user_change {
  display: flex;
  flex-direction: column;
  width: 447px;
  height: 400px;
  margin-top: 40px;
  background-color: rgba(22, 23, 34, 1);
  border-radius: 4px;
}

.user_change_main {
  margin-left: 10px;
}

.user_change h2 {
  color: rgba(229, 229, 229, 1);
  margin-left: 10px;
  margin-top: 10px;
}

.user_change_name {
  margin-top: 20px;
  margin-bottom: 30px;
}
.user_change label {
  color: #fff;
  font-size: 14px;
}

.user_change_name input {
  margin-left: 20px;
  width: 314px;
  height: 30px;
  border: 0.7px solid rgba(166, 166, 166, 1);
  border-radius: 3px;
  background-color: #161722;
  color: rgba(229, 229, 229, 1);
}

.user_change_sex {
  color: #fff;
  font-size: 14px;
  margin-bottom: 30px;
}

.user_change_sex input {
  margin-left: 20px;
  font-size: 14px;
}

.user_change_describe {
  margin-bottom: 30px;
}

.user_change_describe input {
  margin-left: 20px;
  width: 314px;
  height: 30px;
  border: 0.7px solid rgba(166, 166, 166, 1);
  border-radius: 3px;
  background-color: #161722;
  color: rgba(229, 229, 229, 1);
}

.user_change_address {
  color: #fff;
  font-size: 14px;
  margin-bottom: 30px;
}

.user_change_address input {
  margin-left: 20px;
  width: 314px;
  height: 30px;
  border: 0.7px solid rgba(166, 166, 166, 1);
  border-radius: 3px;
  background-color: #161722;
  color: rgba(229, 229, 229, 1);
}

.user_change_photo {
  color: #fff;
  font-size: 14px;
  margin-bottom: 30px;
}

.user_change_photo input {
  border-radius: 3px;
  margin-left: 20px;
}

.save {
  width: 372px;
  height: 30px;
  margin-top: 40px;
}
.save input {
  color: #fff;
  width: 372px;
  height: 30px;
  background-color: rgba(242, 42, 81, 1);
  border-radius: 4px;
}

.user_show {
  width: 616px;
  height: 247px;
}

.user_show {
  /* margin-left: -412px; */
  display: flex;
  flex-direction: column;
}
.user_show .user_show_work {
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
}

.search_data {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.search_box {
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