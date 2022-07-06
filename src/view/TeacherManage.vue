<template>
  <div>
    <!--  tab名字-->
    <div class="page-name">
      <div class="zhu"></div>
      <div class="tool">教师列表管理</div>
    </div>


    <!--  搜索功能-->
    <div class="search">
      <div class="search-value">
        <div class="value">
          <div>工号 :</div>
          <input class="value-input"/>
        </div>

        <div class="value">
          <div>姓名 :</div>
          <input class="value-input"/>
        </div>


        <div class="value" style="display: flex;">
          <div>学院 :</div>
          <div>
            <input class="value-input"/>
          </div>
        </div>


        <el-button>查询</el-button>
        <div style="margin-left: 30px;">
          <el-button type="primary">添加教师</el-button>
        </div>

        <el-upload
            ref="uploadRef"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :auto-upload="false"
            style="margin-left: 30px"
        >
          <template #trigger>
            <el-button type="primary">批量导入</el-button>
          </template>
        </el-upload>
      </div>



    </div>

    <!--  教师列表-->
    <div>
      <el-table :data="teacherVos" stripe style="width: 90%;margin: 40px" border size="small">
        <el-table-column prop="teacherId" label="工号"></el-table-column>
        <el-table-column prop="teacherName" label="姓名"></el-table-column>
        <el-table-column prop="college" label="学院"></el-table-column>
        <el-table-column prop="academicTitle" label="职称"></el-table-column>
        <el-table-column prop="eduBackground" label="学历"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>

        <el-table-column label="操作" >
          <template #default="scope" >
            <el-button type="text" @click="gotoDetail(scope.row)" size="mini" style="font-size: 12px ">查看详细信息</el-button>
            <el-button type="text" @click="handleEdit(scope.row)" size="mini" style="font-size: 12px ">编辑</el-button>
            <el-popconfirm title="确定删除吗？" @confirm="handleDelete(scope.row.id)">
              <template #reference>
                <el-button type="text" size="mini" style="font-size: 12px ">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

    </div>

<!--    分页-->
    <div class="page">
      <el-pagination
          v-model:currentPage="currentPage3"
          v-model:page-size="pageSize3"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="50"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

    <!--    编辑的表单-->

    <div>
      <el-dialog title="用户添加"
                 v-model="dialogVisible"
                 width="50%"
      >
        <el-form :model="form" label-width="120px">

          <el-form-item label="工号">
            <el-input v-model="form.teacherId" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.teacherName" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.sex" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input v-model="form.phoneNumber" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址">
            <el-input v-model="form.address" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="职称">
            <el-input v-model="form.academicTitle" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-input v-model="form.eduBackground" style="width: 40%"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" style="width: 40%"></el-input>
          </el-form-item>

          <div style="display: flex;margin-left: 100px">
            <el-button style="margin-right: 50px" type="primary" @click="dialogVisible=false">确认</el-button>
            <el-button type="primary" @click="dialogVisible=false">取消</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>


  </div>
</template>

<script>
export default {
  name: "TeacherManage",
  data() {
    return {
      teacherVos: [{
        teacherId: '20222222',
        teacherName: '鲍戈岩',
        sex: '男',
        age: 16,
        address: '翻斗大街翻斗花园2号楼1001室',
        academicTitle: '教授',
        eduBackground: '博士',
        college: '计算机学院',
        phoneNumber: '15160511905',
        email: "152346789@qq.com",
      },
        {
          teacherId: '20222222',
          teacherName: '鲍戈岩',
          sex: '男',
          age: 22,
          address: '翻斗大街翻斗花园2号楼1001室',
          academicTitle: '教授',
          eduBackground: '博士',
          college: '计算机学院',
          phoneNumber: '15160511905',
          email: "152346789@qq.com",
        }],
      form: {},
      dialogVisible: false,
      entryTime:'',
    }
  },
  methods: {
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    gotoDetail(){
      this.$router.push("/teacherInfo")
    }
  }
}
</script>

<style scoped>

.search {
  margin-top: 30px;
  margin-left: 40px;
}

.search .search-value {
  display: flex;
}

.search .search-value .value {
  display: flex;
  margin-right: 70px;
}

.search .search-value .value .value-input {
  margin-left: 20px;
  width: 150px;
  height: 25px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #cccccc;
}

.search .search-value .value .value-input:focus {
  border-color: #88ddff;
}


.page{
  margin-left: 400px;
}
</style>