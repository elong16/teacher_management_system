import {createRouter, createWebHistory} from 'vue-router'

import UserInfo from "@/view/UserInfo";
import UpdatePassWord from "@/view/UpdatePassword";
import UpdateUserInfo from "@/view/UpdateUserInfo";
import TeacherManage from "@/view/TeacherManage";
import CourseList from "@/view/CourseList";
import MainLogin from "@/view/MainLogin";
import MainLayout from "@/layout/MainLayout";
import OpenCourse from "@/view/OpenCourse";
import TeacherCourse from "@/view/TeacherCourse";
import TeacherInfo from "@/view/TeacherInfo";
import AccountManage from "@/view/AccountManage";


const routerHistory = createWebHistory();


//创建并暴露一个路由器
const router = createRouter({
        history: routerHistory,
        routes: [

            {
                path: '/',
                name: 'MainLayout',
                redirect: "/login",
                component: MainLayout,
                children: [
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
                        path:'/accountManage',
                        name:'AccountManage',
                        component:AccountManage

                    },
                    {
                      path:'/openCourse',
                      name:'OpenCourse',
                      component:OpenCourse
                    },
                    {
                        path:'/teacherCourse',
                        name:'TeacherCourse',
                        component:TeacherCourse
                    },
                    {
                        path:'/courseList',
                        name:'CourseList',
                        component:CourseList
                    },
                    {
                        path:'/teacherInfo',
                        name:'TeacherInfo',
                        component:TeacherInfo
                    }
                ],
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

