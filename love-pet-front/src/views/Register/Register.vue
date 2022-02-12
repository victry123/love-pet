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

      <button class="get-code"><label>获取短信验证码</label></button>
    </div>

    <div class="save_register">
      <input type="checkbox" name="remembered" />
      <label>同意用户使用协议</label>
    </div>

    <!-- 注册按钮 -->
    <div>
      <button class="register-button">注册</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Register {
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  width: 502px;
  height: 669px;
  background-color: #292b35;
  margin: 40px auto;
  border-radius: 2%;
}

.register-title {
  color: rgba(112, 112, 112, 1);
  font-size: 24px;
  margin-top: 40px;
  text-align: center;
  color: #b7b7bb;
  margin-bottom: 30px;
}

.username,
.password1,
.password2,
.phone {
  display: block;
  width: 400px;
  height: 40px;
  margin: 20px auto;
  border-radius: 3px;
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
  border: 0;
  float: right;
  width: 119px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  border-radius: 2px;
  font-size: 12px;
}

.get-code label:hover {
  color: red;
}

.save_register {
  display: flex;
  color: rgba(135, 135, 134, 1);
  justify-content: center;
  margin: 20px auto;
  font-size: 14px;
}

.save_register input {
  margin-right: 5px;
  width: 17px;
  height: 17px;
}

.register-button {
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

.register-button:hover {
  background-color: #f02929;
}
</style>
