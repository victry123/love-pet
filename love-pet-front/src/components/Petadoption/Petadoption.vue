<template>
  <div id="Petdating">
    <div class="pettitle">
      <div class="ptitle">
        <p>{{ pet_info.title }}</p>
        <div class="pspan">
          <span
            ><i class="iconfont icon-shijian"></i>{{ pet_info.datetime }}</span
          >
          <span><i class="iconfont icon-dizhi"></i>{{ pet_info.address }}</span>
        </div>

        <!-- 内容 -->
        <div class="ptitle_center">{{ pet_info.center }}</div>
      </div>
      <div class="puser">
        <div class="puseru">
          <a href=""
            ><img :src="pet_info.pet_photo" alt="" class="petuserimg"
          /></a>
          <div class="pusers">
            <span>{{ pet_info.user_name }}</span>
            <div class="pusera">
              <button class="atten">关注</button>
              <button class="privatechat">私信</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="petimg">
      <label class="petimg_left">
        <i class="iconfont">&#xe664;</i>
      </label>
      <img :src="pet_info.user_photo" alt="" class="img" />
      <label class="petimg_right">
        <i class="iconfont">&#xe667;</i>
      </label>
      <!-- <div class="pageturning">
        <button class="last">上一个</button>
        <button class="next">下一个</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pet_info: {
        title: "标题--我家有只大熊猫一直单着 有看的上的吗",
        datetime: "2022-01-20 15:00",
        address: "四川省xxx市xxx大道xxx号",
        center: "xxxxxxxxxxxxx",
        user_name: "往生堂堂主",
        user_photo:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        pet_photo:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      },
    };
  },
  methods: {},
};
</script>
<style>
@import "../../assets/font/iconfont.css";
</style>
<style>
#Petdating {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pusers {
  flex-direction: column;
  margin-left: 10px;
  color: #fff;
}
.puser {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.atten,
.privatechat {
  width: 50px;
  height: 30px;
  background-color: #ff5454;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  margin-top: 10px;
}
.pusera {
  display: flex;
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
  width: 1138px;
  height: 150px;
  display: flex;
}

.ptitle_center {
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
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
  font-size: 20px;
  line-height: 30px;
  font-weight: bolder;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.pspan {
  color: #ada8a8;
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
  width: 100%;
  display: flex;
  height: 662px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100%;
  height: 100%;
  width: 1138px;
  height: 662px;
  border-radius: 20px;
  object-fit: cover;
}
.pageturning {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.pageturning button {
  width: 80px;
  height: 38px;
  background-color: #ff5454;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.petimg_left i {
  color: #C4C4C4;
  font-size: 100px;
  margin-right: 10px;
  font-weight: 200;
}

.petimg_right i {
  color: #C4C4C4;
   font-size: 100px;
   margin-left: 10px;
}
</style>
