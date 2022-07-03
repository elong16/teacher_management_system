<template>
<div>
  <div class="page-name">
    <div class="zhu"></div>
    <div class="tool">教师任课课表</div>
  </div>


<!--  课表-->
  <div class="course-table">
    <table border="1" cellspacing="0" >
      <thead>
        <th>星期</th>
        <th>上午1-2节</th>
        <th>上午3-4节</th>
        <th>中午5-6节</th>
        <th>下午7-8节</th>
        <th>下午9-10节</th>
        <th>下午11-12节</th>
      </thead>

<!--      展示时行为星期几,列为第几节课-->
<!--      courses是遍历则相反-->
<!--      courses[第几节][星期几]-->

      <tbody>
      <tr v-for="(weekday,weekdayIndex) in weekdays" :key="weekdayIndex">
        <td>
        {{weekday}}
        </td>

        <td v-for="(course,courseIndex) in courses" :key="courseIndex">
          {{course[weekdayIndex]}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</div>
</template>

<script>
export default {
  name: "CourseList",
  data(){
    return{
      weekdays:['一','二','三','四','五','六','七'],
      courses:[
          ['','','','数据结构  2020级软件工程2班','','数据库  2020级软件工程2班',''],
        ['','','','','','',''],
        ['','','数据库  2020级软件工程2班','','','','数据库  2020级软件工程2班'],
        ['','','','','','',''],
        ['','数据结构  2020级软件工程2班','','','数据结构  2020级软件工程2班','',''],
        ['','','','','','',''],
      ],
    }
  }
}
</script>

<style scoped>
.course-table{
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
}

table{
  border-color: floralwhite;
  border-radius: 6px;
}
th{
  width: 70px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
}

tr{
  font-size: 14px;
  height: 100px;
  text-align: center;
  border: 1px solid ghostwhite;

}
</style>