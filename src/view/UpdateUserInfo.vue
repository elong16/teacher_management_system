<template>
  <div>
    <div class="page-name">
      <div class="zhu"></div>
      <div class="tool">修改基本信息</div>
    </div>

    <!--       用户信息修改表单-->
    <form>
      <div class="user-info">


        <div class="info">

          <div class="column">
            <div class="value">工号 :</div>
            <div>{{ userInfo.teacherId }}</div>
          </div>

          <div class="column">
            <div class="value">姓名 :</div>
            <div>{{ userInfo.teacherName }}</div>
          </div>

          <div class="column">
            <div class="value">性别 :</div>
            <div>{{ userInfo.sex }}</div>
          </div>

          <div class="column">
            <div class="value">家庭住址 :</div>
            <input class="user-input" v-model="userInfo.address"/>
          </div>

          <div class="column">
            <div class="value">学历 :</div>
            <div>{{ userInfo.eduBackground }}</div>
          </div>

          <div class="column">
            <div class="value">手机号 :</div>
            <input class="user-input" v-model="userInfo.phoneNumber"/>
          </div>

          <div class="column">
            <div class="value">邮箱 :</div>
            <input class="user-input" v-model="userInfo.email"/>
          </div>

        </div>
      </div>

      <div class="submit-button">
        <el-button @click="submit()">提交</el-button>
        <el-button style="margin-left: 60px" @click="back()">返回</el-button>
      </div>
    </form>


  </div>

</template>

<script>
export default {
  name: "UpdateUserInfo",
  data() {
    return {
      userInfo: {
        teacherId: '20222222',
        teacherName: '鲍戈岩',
        sex: '男',
        address: '翻斗大街翻斗花园2号楼1001室',
        academicTitle: '教授',
        eduBackground: '博士',
        college: '计算机学院',
        phoneNumber: '15160511905',
        email: "152346789@qq.com",
      }
    }
  },
  methods: {
    submit(){},

    back() {
      this.$router.push("/userInfo")
    },
  }
}
</script>

<style scoped>
.user-info {
  display: flex;
  margin-left: 30px;
  margin-top: 5px;
}

.user-info .info {
  font-size: 14px;
  margin-left: 20px;
  margin-top: 10px;
}

.user-info .info div {
  margin-bottom: 10px;
}

.user-info .info .column {
  display: flex;
}

.user-info .info .column .value {
  width: 100px;
}

.user-info .info .user-input {
  width: 250px;
  height: 30px;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  outline: none;
}

.user-info .info div input:focus {
  border-color: dodgerblue;
}


.submit-button {
  margin-top: 30px;
  margin-left: 100px;
  margin-bottom: 20px;
}
</style>