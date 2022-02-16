<template>
  <div id="header">
    <div class="seach">
      <i class="iconfont icon-sousuoxiao"></i>
      <form action="" target="_blank">
        <input
          type="text"
          class="inseach"
          maxlength="100"
          placeholder="搜索你感兴趣的内容"
        />
      </form>
      <button
        type="button"
        class="buseach"
        @mouseover="smover"
        @mouseleave="smleave"
      >
        <span :class="{ seachmove: seachmover == true }">搜索</span>
      </button>
    </div>
    <div class="user">
      <div v-if="!login">
        <button class="login">登录</button>
      </div>
      <div v-else class="user">
        <button class="login-f" @click="go_add">发布</button>
        <a href=""
          ><img :src="this.$store.state.userimgurl" alt="" class="userimg"
        /></a>
        <a href="/Home/PrivateLetter"><i class="iconfont icon-sixin"></i></a>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seachmover: false,
      login: true,
    };
  },
  methods: {
    // 搜索按钮的移入高亮
    smover() {
      this.seachmover = true;
    },
    smleave() {
      this.seachmover = false;
    },
    go_add(){
        this.$router.push({ path:'/Issue'  })
    }
  },
};
</script>

<style>
#header {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #161722;
  border-bottom: 1px solid rgba(90, 90, 90, 0.4);
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px 0 22px;
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
}
.user i {
  font-size: 28px;
  color: #fff;
  margin-right: 30px;
}
.seach {
  width: 620px;
  height: 40px;
  background-color: #292b35;
  display: flex;
  align-items: center;
  border-radius: 4px;
  flex-direction: row;
}

.seach i {
  font-size: 18px;
  margin-left: 10px;
  color: #d4d5d7;
}

.seach form {
  flex-grow: 1;
}
.inseach {
  width: 100%;
  background-color: #292b35;
  border: none;
  caret-color: #fe2c55;
  color: #2f3035;
  color: aliceblue;
  flex-grow: 1;
  font-size: 14px;
  font-weight: bold;
  height: 100%;
  outline: none;
  padding: 0 6px;
}

.seach button {
  width: 64px;
  height: 100%;
  background-color: #292b35;
  align-items: center;
  color: #eff0f3;
  border: none;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.user {
  width: 300px;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.login,
.login-f {
  width: 80px;
  height: 38px;
  background-color: #ff5454;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.login-f {
  background-color: #161722;
  border: 2px solid #fff;
}

.userimg {
  width: 32px;
  height: 32px;
  margin-right: 30px;
  border-radius: 16px;
}

.seachmove {
  color: #fe2c55;
}
</style>
