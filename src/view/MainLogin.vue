<template>
  <div class="main">
    <div class="login">

      <div class="window">
        <div class="title">欢迎登陆</div>
        <el-form ref="form" :model="form">
          <el-form-item prop="username">
            <el-input class="account" prefix-icon="el-icon-user-solid" v-model="form.username"
                      size="large"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="password" prefix-icon="el-icon-lock" v-model="form.password" show-password
                      size="large"></el-input>
          </el-form-item>
          <div style="display:flex">
            <el-input type="text" v-model="inputCode" class="inputyzm" placeholder="请输入验证码" clearable
                      size="large"></el-input>
            <span @click="createCode"><SIdentify :identifyCode="code" class="yzm"></SIdentify></span>
          </div>

          <el-form-item>
            <el-button class="button" type="primary" @click="login(form)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>

import SIdentify from '@/code/SIdentify'



export default {
  name: "MainLogin",
  data() {
    return {
      form: {
        username: '',
        password: '',

        token: ''
      },
      code: '',
      captchaImg: '',
      inputCode: '',
    }

  },
  components: {
    SIdentify
  },
  methods: {
    createCode() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      // 设置验证码长度，
      for (var i = 0; i < 4; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.code = text
    },
    login() {
      if (this.inputCode == '') {
        this.$message.error('请输入验证码')
        return
      }
      if (this.inputCode.toLowerCase() != this.code.toLowerCase()) {
        this.$message.error('验证码错误')
        this.inputCode = ''
        this.createCode()
        return
      }

    },

  },

  mounted() {
    this.createCode()
  },


}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: darkturquoise;
  overflow: hidden;
}

.login {
  width: 400px;
  margin: 150px auto;
}

.title {
  color: black;
  font-size: 30px;
  padding-top: 20px;
  margin-bottom: 30px;
  text-align: center;
}

.button {
  margin-top: 30px;
  margin-left: 50px;
  width: 400px;
}

.window {
  background-color: whitesmoke;
  width: 500px;
  height: 500px;
}

.account {
  margin-top: 50px;
  margin-left: 50px;
  width: 400px;
}

.password {
  margin-top: 10px;
  margin-left: 50px;
  width: 400px;
}

.inputyzm {
  width: 200px;
  margin-left: 50px;
}

.yzm {
  margin-left: 20px;
}
</style>