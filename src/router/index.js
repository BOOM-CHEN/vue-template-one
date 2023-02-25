import {createRouter , createWebHashHistory} from 'vue-router'

import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'

const router = createRouter({
    history:createWebHashHistory(),//指定通过hash管理路由的切换
    routes:[    //创建路由规则我
        {
            path:'/home',component : Home
        },
        {
            path:'/movie',component : Movie
        }
    ]
});
export default router