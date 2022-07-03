import {createRouter, createWebHistory} from 'vue-router'

import UserInfo from "@/view/UserInfo";
import UpdatePassWord from "@/view/UpdatePassword";
import UpdateUserInfo from "@/view/UpdateUserInfo";
import TeacherManage from "@/view/TeacherManage";
import CourseList from "@/view/CourseList";
import MainLogin from "@/view/MainLogin";


const routerHistory = createWebHistory();


//创建并暴露一个路由器
const router = createRouter({
        history: routerHistory,
        routes: [
            {
                path:'/',
                redirect:"/userInfo"
            },
            {
                path: '/userInfo',
                name: 'UserInfo',
                component: UserInfo
            },
            {
                path:'/updatePassword',
                name:'UpdatePassWord',
                component:UpdatePassWord

            },
            {
                path:'/updateUserInfo',
                name:'UpdateUserInfo',
                component:UpdateUserInfo

            },
            {
                path:'/teacherManage',
                name:'TeacherManage',
                component:TeacherManage

            },
            {
                path:'/courseList',
                name:'CourseList',
                component:CourseList
            },
            {
                path:'/login',
                name:'MainLogin',
                component:MainLogin
            }
        ]




    }
)


export default router

