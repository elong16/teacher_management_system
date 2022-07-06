<template>
  <div>
    <div class="page-name">
      <div class="zhu"></div>
      <div class="tool">教师信息界面</div>
      <div style="margin-left: 1200px">
        <button v-show="!isEdit" @click="isEdit=true">编辑</button>
        <button v-show="isEdit" @click="isEdit=false">保存</button>
      </div>
    </div>


    <!--  教师信息界面-->
    <div class="teacher-info">
      <!--      照片与基本信息-->
      <div class="photo-info">
        <div style="display: flex">
          <img src="../assets/img_1.png">
          <div class="avatar" v-show="isEdit">
            <el-upload
                ref="uploadRef"
                class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :auto-upload="false"
            >
              <template #trigger>
                <el-button type="primary">更换照片</el-button>
              </template>
            </el-upload>
          </div>
        </div>
        <div class="info">
          <div class="info-title">基本信息</div>
          <div>
            <div class="column">
              <div class="value">工号 :</div>
              <div v-show="!isEdit">{{ userInfo.teacherId }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.teacherId"/></div>
            </div>

            <div class="column">
              <div class="value">姓名 :</div>
              <div v-show="!isEdit">{{ userInfo.teacherName }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.teacherName"/></div>
            </div>

            <div class="column">
              <div class="value">性别 :</div>
              <div v-show="!isEdit">{{ userInfo.sex }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.sex"/></div>
            </div>

            <div class="column">
              <div class="value">家庭住址 :</div>
              <div v-show="!isEdit">{{ userInfo.address }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.address"/></div>
            </div>

            <div class="column">
              <div class="value">学历 :</div>
              <div v-show="!isEdit">{{ userInfo.eduBackground }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.eduBackground"/></div>
            </div>

            <div class="column">
              <div class="value">手机号 :</div>
              <div v-show="!isEdit">{{ userInfo.phoneNumber }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.phoneNumber"/></div>
            </div>

            <div class="column">
              <div class="value">邮箱 :</div>
              <div v-show="!isEdit">{{ userInfo.email }}</div>
              <div v-show="isEdit"><input class="user-input" v-model="userInfo.email"/></div>
            </div>

          </div>
        </div>
      </div>
      <!--    学历背景与科研成果-->

      <div class="edu-achievement">
        <div class="edu-background">
          <div class="info-title">学历背景</div>
          <div class="edu-background-info">
            <div style="display: flex" v-for="(eduBackground,eduIndex) in userInfo.eduBackgrounds" :key="eduIndex">
              <div class="edu-detail">
                {{ eduBackground.disciplineType }},{{ eduBackground.degree }},{{ eduBackground.school }},
                {{ eduBackground.major }},{{ eduBackground.graduationYear }}
              </div>
              <el-button v-show="isEdit" style="margin-left: 20px" size="small" @click="isUpdateEduBa=true">
                修改信息
              </el-button>

              <el-dialog
                  v-model="isUpdateEduBa"
                  title="修改学历信息"
                  width="30%"
                  :before-close="handleClose"
              >
                <div class="updateEduBac">
                  <div class="value">
                    <div class="title">学位:</div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                      <el-option
                          v-for="item in degrees"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                      />
                    </el-select>
                  </div>

                  <div class="value">
                    <div class="title">毕业学校:</div>
                    <el-input style="width: 190px" size="small"></el-input>
                  </div>

                  <div class="value">
                    <div class="title">学科</div>
                    <el-input style="width: 190px" size="small"></el-input>
                  </div>
                  <div class="value">
                    <div class="title">在校时间</div>
                    <el-input style="width: 190px" size="small"></el-input>
                  </div>
                  <div class="value">
                    <div class="title">专业</div>
                    <el-input style="width: 190px" size="small"></el-input>
                  </div>
                </div>
                <template #footer>
                  <el-button text="primary" @click="isUpdateEduBa=false">确认</el-button>
                  <el-button text="primary" @click="isUpdateEduBa=false">取消</el-button>
                </template>
              </el-dialog>
            </div>
          </div>
        </div>

        <div class="achievement-info">
          <div class="info-title">科研成果</div>
          <div style="display: flex" v-for="(achievement,achievementIndex) in userInfo.achievements"
               :key="achievementIndex">
          <div class="achievement-detail" >
            {{ achievementIndex + 1 }}.{{ achievement.researchTime[0] }}-{{ achievement.researchTime[1] }},{{ achievement.researchType }},{{ achievement.researchName }}
          </div>
          <el-button v-show="isEdit" style="margin-left: 110px" size="small" @click="isUpdateAchievement=true">
            修改信息
          </el-button>

          </div>


        </div>
      </div>


    </div>


  </div>
</template>

<script>

import * as dayjs from 'dayjs'

dayjs().format()
export default {
  name: "TeacherInfo",
  data() {
    return {
      isUpdateEduBa: false,
      isUpdateAchievement: false,
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
        eduBackgrounds: [
          { //学位
            degree: '学士',
            school: '华侨大学',
            graduationYear:
                dayjs(new Date()).format('MM,YYYY'),
            //学科类型
            disciplineType: '工学',
            major: '母猪产后护理',
          },
          { //学位
            degree: '硕士',
            school: '清华大学',
            graduationYear:
                dayjs(new Date()).format('MM,YYYY'),
            //学科类型
            disciplineType: '工学',
            major: '母猪产后护理',
          },
          { //学位
            degree: '博士',
            school: '漳州职业技术学院',
            graduationYear:
                dayjs(new Date()).format('MM,YYYY'),
            //学科类型
            disciplineType: '文学',
            major: '母猪产后护理高级应用',
          }
        ],
        achievements: [
          {
            researchType: '科技部重点研发计划',
            researchName: '大规模视频节目的实时检测分析系统与示范应用',
            researchTime: [
              dayjs(new Date()).format('YYYY/MM'),
              dayjs(new Date()).format('YYYY/MM')
            ]
          },
          {
            researchType: '科技部重点研发计划',
            researchName: '大规模视频节目的实时检测分析系统与示范应用',
            researchTime: [
              dayjs(new Date()).format('YYYY/MM'),
              dayjs(new Date()).format('YYYY/MM')
            ]
          },
          {
            researchType: '科技部重点研发计划',
            researchName: '大规模视频节目的实时检测分析系统与示范应用',
            researchTime: [
              dayjs(new Date()).format('YYYY/MM'),
              dayjs(new Date()).format('YYYY/MM')
            ]
          },
          {
            researchType: '科技部重点研发计划',
            researchName: '大规模视频节目的实时检测分析系统与示范应用',
            researchTime: [
              dayjs(new Date()).format('YYYY/MM'),
              dayjs(new Date()).format('YYYY/MM')
            ]
          }
        ],
      },

      degrees: [
        {
          label: '学士',
          value: '学士',
        },
        {
          label: '硕士',
          value: '硕士',
        },
        {
          label: '博士',
          value: '博士',
        },
      ],
      isEdit: false,

    }
  }
}
</script>

<style scoped>
.teacher-info {
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 100px;


}


.teacher-info .photo-info {
  width: 400px;
  margin: 20px;
  border: 1px solid #cccccc;
  border-radius: 20px;
}


.teacher-info .photo-info img {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
  border-radius: 170px;
  width: 150px;
  height: 150px;
}

.teacher-info .photo-info .avatar {
  margin-left: 50px;
  margin-top: 140px;
}

.teacher-info .photo-info .info {
  width: 360px;
  padding: 20px;
  border-top: 1px solid #cccccc;


}

.teacher-info .photo-info .info div {
  margin-bottom: 5px;
}

.teacher-info .photo-info .info div .column {
  display: flex;
}

.teacher-info .photo-info .info .info-title {
  width: 150px;
  height: 30px;
  margin-left: 70px;
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 19px;
  border-radius: 4px;
  background-color: #88ddff;
  padding-left: 60px;
  color: white;
}

.teacher-info .photo-info .info .column .value {
  width: 100px;
  height: 25px;
}


.teacher-info .photo-info .info .column .user-input {
  width: 200px;
  height: 18px;
  border-radius: 3px;
  outline: none;
  border: .3px solid #ccc;

}

.teacher-info .photo-info .info .column .user-input:focus {
  border-color: rgba(99, 156, 255, .6);
}

.teacher-info .edu-achievement {
  border: 1px solid #cccccc;
  border-radius: 20px;
  width: 600px;
  margin-top:20px;
  margin-left: 100px;
}

.teacher-info .edu-achievement .edu-background {
  width: 100%;
  height: 200px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.teacher-info .edu-achievement .edu-background .edu-detail {
  display: flex;
  width: 400px;
  height: 20px;
  margin-bottom: 20px;
  margin-left: 60px;
  line-height: 20px;

}

.teacher-info .edu-achievement .info-title {
  width: 150px;
  height: 30px;
  margin-top: 10px;
  margin-left: 150px;
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 19px;
  border-radius: 4px;
  background-color: #88ddff;
  padding-left: 60px;
  color: white;
}

.teacher-info .edu-achievement .achievement-info {

}

.teacher-info .edu-achievement .achievement-info .achievement-detail {
  width: 300px;
  margin-left: 70px;
  margin-bottom: 10px;

}

.updateEduBac {
  margin-left: 20px;
  margin-top: 20px;
}

.updateEduBac .value {
  margin-bottom: 10px;
  display: flex;
}

.updateEduBac .value .title {
  font-size: 14px;
  width: 100px;
}

button {
  border-radius: 5px;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #cccccc;
  border: 1px solid #cccccc;
}


button:hover {
  border-color: deepskyblue;
}

button:focus {
  border-color: deepskyblue;
}
</style>