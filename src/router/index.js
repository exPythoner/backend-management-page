import { createRouter, createWebHashHistory } from 'vue-router'


export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: () => import("@/views/Home.vue"),
            children: [
                {
                    name: 'list',
                    path: 'goods/list',
                    component: () => import("@/goods/list.vue")
                },
                {
                    name: 'sendgoods',
                    path: 'goods/send',
                    component: () => import("@/goods/SendGoods.vue")
                },
                {
                    name: 'about',
                    path: 'about',
                    component: () => import("@/views/About.vue")
                }

            ]
        },
    ]
})