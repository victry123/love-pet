<template>
  <div class="Login">
    <h2 class="login-title">登录后内容更加精彩</h2>
    <form action="" class="Login-content">
      <input
        type="text"
        placeholder="请输入用户名或者手机号"
        class="username"
      />
      <input type="password" placeholder="请输入密码" class="password" />
      <div class="save">
        <input type="radio" class="save-login" />保存登录
        <p class="forget">忘记密码?</p>
      </div>
      <div class="login-button">登录</div>
    </form>
    <hr />
    <div class="Login-floor">
      <div class="qq">
        <i></i>
        <p>QQ</p>
      </div>
      <div class="wx">
        <i></i>
        <p>微信</p>
      </div>
      <div class="register">立即注册</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Login {
  width: 640px;
  height: 455px;
  background-color: #292b35;
  margin: 40px auto;
}

.login-title {
  padding-top: 20px;
  text-align: center;
  color: #b7b7bb;
  margin-bottom: 80px;
}

.username,
.password {
  display: block;
  width: 400px;
  height: 40px;
  margin: 20px auto;
}

.save {
  width: 400px;
  height: 20px;
  margin: 0 auto;
  color: #ffffff;
}

.save-login {
  float: left;
}

.forget {
  float: right;
  margin: 0;
}

.login-button {
  width: 280px;
  height: 40px;
  margin: 20px auto;
  background-color: #ff5454;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  margin-bottom: 40px;
}

.Login-floor {
  width: 400px;
  height: 20px;
  margin: 20px auto;
  color: #ffffff;
}

.qq {
  float: left;
  margin-right: 20px;
}

.wx {
  float: left;
}

.register {
  float: right;
}
</style>
