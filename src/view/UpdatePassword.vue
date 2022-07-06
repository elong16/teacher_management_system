<template>
  <div>
    <div class="page-name">
      <div class="zhu"></div>
      <div class="tool">修改密码</div>
    </div>

    <div class="update-password">
      <div class="password-value">
        <div>当前密码</div>
        <input>
      </div>
      <div class="password-value">
        <div>新密码</div>
        <input>
      </div>
      <div class="password-value">
        <div>确认新密码</div>
        <input>
      </div>


      <div class="submit-password">
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePassword"
}
</script>

<style scoped>
.update-password {
  margin-top: 40px;
  margin-left: 40px !important;
  margin-bottom: 100px;
}

.update-password .password-value {
  display: flex;
  margin-bottom: 20px;
}

.update-password .password-value div {
  width: 130px;
}

.update-password .password-value input {
  width: 200px;
  height: 20px;
  line-height: 20px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;

}

.update-password .password-value input:focus {
  border-color: #88ddff;
}

.update-password .submit-password{
  display: flex;
  margin-top: 40px;
  margin-left: 50px;

}
</style>