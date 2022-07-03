<template>
  <div>
    <div class="page-name">
      <div class="zhu"></div>
      <div class="tool">基本信息</div>
      <button class="update-button" @click="gotoUpdate()">
        修改基本信息
      </button>
    </div>


    <div class="user-info">
<!--       用户信息展示-->
      <div class="info">
        <div>工号 : {{userInfo.teacherId}}</div>
        <div>姓名 : {{userInfo.teacherName}}</div>
        <div>性别 : {{userInfo.sex}}</div>
        <div>家庭住址 : {{userInfo.address}}</div>
        <div>职称 : {{userInfo.academicTitle}}</div>
        <div>学历 : {{userInfo.eduBackground}}</div>
        <div>手机号 : {{userInfo.phoneNumber}}</div>
        <div>邮箱 : {{userInfo.email}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {
        teacherId:'20222222',
        teacherName: '鲍戈岩',
        sex:'男',
        address:'翻斗大街翻斗花园2号楼1001室',
        academicTitle:'教授',
        eduBackground:'博士',
        college:'计算机学院',
        phoneNumber:'15160511905',
        email:"152346789@qq.com",
      }
    }
  },
  methods:{
    gotoUpdate(){
      this.$router.push("/updateUserInfo")
    }
  }
}
</script>

<style scoped>
.page-name {
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}

.page-name .zhu {
  width: 4px;
  background-color: red;
}

.page-name .tool{
  margin-left: 10px
}

.update-button{
  margin-left: 1200px;
  background-color: white;
  border: none;
  cursor: pointer;
  color:black;
}
.update-button:hover{
  color: red;
  border: none;
}

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
.user-info .info div{
  margin-bottom: 10px;
}



</style>