<template>
  <div class="main" >
    <div class="main_box">
      <div class="main_top_work">
        <!-- 关注和粉丝 -->
        <div class="main_attention"><label>关注 &nbsp;(2)</label></div>

        &nbsp; &nbsp; &nbsp; &nbsp;
        <div class="main_fans"><label>粉丝&nbsp;(1)</label></div>
      </div>

      <div class="line"></div>
      <!-- 内容 -->
      <div class="main_data">
        <div class="main_content" v-for="item in info" :key="item.id">
          <!-- 头像 -->
          <div class="main_attention_photo">
            <img alt="" :src="item.url" />
          </div>

          <div class="main_attention_name">
            <!-- 名字 -->
            <div class="word_name">
              {{ item.name }}
            </div>
            <!-- 描述 -->
            <div class="word_describe">
              {{ item.describe }}
            </div>
          </div>

          <!-- 关注 -->
          <div class="attention_but">
            <button>已关注</button>
          </div>
        </div>
      </div>

      <!-- 关闭 -->
      <div class="main_close" >
        <svg
          width="36"
          height="36"
          xmlns="http://www.w3.org/2000/svg"
          class="tI80-Ts9"
          viewBox="0 0 36 36"
        >
          <path
            d="M22.133 23.776a1.342 1.342 0 101.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 00-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 10-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 001.898 1.898l4.113-4.113 4.112 4.113z"
            fill="#a9aab7"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      info: [
        {
          id: 1,
          name: "xxx",
          describe: "xxxxxxxxxxxxxxxxxxxx",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
        },
        {
          id: 2,
          name: "xxx",
          describe: "xxxxxxxxxxxxxxxxxxxx",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F01%2F20210701180011_58687.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646633225&t=f1c5d6cbcacdc422b1e27926cdcd7bab",
        },
      ],
    };
  },

  methods:{
    click_close(){
       this.$store.state.showModal = false;
    }
  }

};
</script>

<style scoped>
mask {
  background-color: #000;
  opacity: 0.3;

  width: 100%;
  height: 100%;
  z-index: 1
}


.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   background-color: rgba(0,0,0,.85);
  position: fixed;
  top: 0px;
  right: 0px;
  
  width: 100%;
  height: 100%;
  z-index: 2
}

.main_box {
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 553px;
  background-color: #252632;
  position: relative;
}

.main_close {
  width: 36px;
  height: 36px;
  position: absolute;
  right: 10px;
  top: 10px;
}

.main_top_work {
  margin-top: 35px;
  margin-left: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  color: #b9b9bd;
  font-size: 18px;
}

.main_attention label:hover {
  color: #fff;
}

.main_fans label:hover {
  color: #fff;
}

.line {
  width: 488px;
  border: 0.5px solid rgba(56, 56, 56, 1);
  margin-left: 35px;
  margin-top: 10px;
}

.main_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.main_content {
  width: 484px;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgba(56, 56, 56, 1);
}

.main_attention_photo {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 20px;
}

.main_attention_photo img {
  width: 50px;
  border-radius: 50%;
}

.main_attention_name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.word_name {
  color: #fff;
  font-size: 16px;
}

.word_describe {
  margin-top: 10px;
  color: #828285;
  font-size: 12px;
}

.attention_but {
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
}

.attention_but button {
  width: 56px;
  height: 25px;
  background-color: rgba(54, 55, 65, 1);
  border-radius: 3px;
  border: 0;
  color: #fff;
  font-size: 12px;
}

.attention button:hover {
  background-color: #f22a51;
}
</style>