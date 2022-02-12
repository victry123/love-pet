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
      <div class="save_login">
        <div class="save_login_left">
          <input type="checkbox" name="remembered" />
          <label>保存登录</label>
        </div>

        <div class="forget">
          <label>忘记密码</label>
        </div>
      </div>
    </form>
    <!-- 登录按钮 -->
    <div>
      <button class="login-button">登录</button>
    </div>

    <div class="register">
      <label>立即注册</label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Login {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 455.52px;
  background-color: #161722;
  margin: 40px auto;
  border-radius: 4px;
  justify-content: space-around;
}

.login-title {
  color: rgba(112, 112, 112, 1);
  font-size: 24px;
  padding-top: 20px;
  text-align: center;
  margin-bottom: 30px;
}

.username,
.password {
  border-radius: 2px;
  display: block;
  width: 400px;
  height: 40px;
  margin: 20px auto;
}

.save_login {
  width: 400px;
  height: 40px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}

.save_login label {
  color: rgba(135, 135, 134, 1);
  font-size: 14px;
}

.save_login_left,
.forget {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.save_login input {
  margin-right: 5px;
  width: 17px;
  height: 18px;
}
.login-button {
  display: flex;
  justify-content: center;
  border: 0;
  width: 271px;
  height: 40px;
  margin: 10px auto;
  background-color: #ff5454;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  color: #fff;
  border-radius: 3px;
}

.login-button:hover {
  background-color: #f02929;
}

.register {
  display: flex;
  color: #fff;
  justify-content: flex-end;
}

.register label {
  color: rgb(156, 156, 150);
  font-size: 13px;
  margin-right: 15px;
}
</style>
