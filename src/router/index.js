import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import applyDal from "~/router/views/ApplyDal.vue";
import applyLau from "~/router/views/ApplyLau.vue";

import applyVisa from "~/router/views/ApplyVisa.vue";

const router = createRouter({
    history: createWebHashHistory(), // createWebHashHistory 为哈希模式的路由，如果需要选择 histiry 模式，可以用 createWebHistory 方法。
    routes: [ // routes 属性和 vue-router 3 的配置一样，通过数组对象的形式，配置路径对应展示的组件。
        {
            path: '/',
            name: '/',
            component: applyDal
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path:'/apply/dal',
            name: 'applyDal',
            component: applyDal
        },
        {

            path:'/apply/lau',
            name: 'applyLau',
            component: applyLau
        },
        {
            path:'/apply/visa',
            name: 'applyVisa',
            component: applyVisa
        }
    ]
})

export default router