<template>
  <div class="header">
    <!--  logo图标-->
    <div class="logo">
      <a href="#"><el-icon style="font-size: 20px"><School/></el-icon>教师管理系统</a>
    </div>

    <!--  导航路由定向-->
    <el-menu
        background-color="#444444"
        text-color="#ffffff"
        style="margin-left: 100px;"
        class="el-menu-demo"
        mode="horizontal"
        :collapse-transition="false"
        :ellipsis="false"
        active-text-color="#ffc100"
        :router="true"
        :default-active="$route.path"
    >

      <el-sub-menu index="1" style="margin-right: 20px">
        <template #title>基本信息</template>
        <el-menu-item index="/userInfo">教师基本信息</el-menu-item>、
        <el-menu-item index="/updatePassword">密码修改</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2" style="margin-right: 20px">
        <template #title>系统管理</template>
        <el-menu-item index="/teacherManage">教师管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>课程管理</template>
        <el-menu-item index="3-1">教师课程管理</el-menu-item>
        <el-menu-item index="3-2">开设课程</el-menu-item>
        <el-menu-item index="/courseList">教师任课课表</el-menu-item>
      </el-sub-menu>

    </el-menu>



    <!--    用户按钮-->
    <div class="user">

    </div>

  </div>


</template>

<script>

export default {
  name: 'MainHeader',
  components: {

  },
  methods: {}
}
</script>

<style scoped>
.header{
  width: 95%;
  height: 50px;
  display: flex;
  margin-top: 10px;
  margin-left: 37px;
  background-color: #444444;

}

.header .logo {
  width: 200px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;


}
.header .logo a{
  text-decoration: none;
  color: rgb(255,165,0);
}


.user{

}
</style>