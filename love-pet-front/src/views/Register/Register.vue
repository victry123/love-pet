<template>
  <div class="Register">
    <h2 class="register-title">用户注册</h2>
    <input
      class="username"
      type="text"
      placeholder="  请输入用户名邮箱或手机"
    />
    <input class="password1" type="text" placeholder="  请输入密码" />
    <input class="password2" type="text" placeholder="  确认密码" />
    <input class="phone" type="text" placeholder="  手机号" />
    <div class="SMS">
      <input class="sms-code" type="text" placeholder="  短信验证码" />
      <div class="get-code">获取短信验证码</div>
    </div>
    <div class="register-button">注册</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Register {
  width: 640px;
  height: 455px;
  background-color: #292b35;
  margin: 40px auto;
  border-radius: 2%;
}

.register-title {
  padding-top: 20px;
  text-align: center;
  color: #b7b7bb;
  margin-bottom: 40px;
}

.username,
.password1,
.password2,
.phone {
  display: block;
  width: 400px;
  height: 40px;
  margin: 20px auto;
  border-radius: 2px;
}

.SMS {
  width: 400px;
  height: 40px;
  margin: 20px auto;
}

.sms-code {
  float: left;
  width: 150px;
  height: 40px;
  border-radius: 2px;
}

.get-code {
  float: right;
  width: 150px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  border-radius: 2px;
}

.register-button {
  width: 280px;
  height: 40px;
  margin: 40px auto;
  background-color: #ff5454;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  margin-bottom: 40px;
  border-radius: 2px;
}
</style>
