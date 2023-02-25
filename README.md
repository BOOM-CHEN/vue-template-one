# 路由3.x创建模块
`router/index.js`
```js
//1.导入Vue的构造函数
import Vue from 'vue'
//2.导入3.x路由的构造函数
import VueRouter from 'vue-router'
//导入需要使用路由切换的组件,@代表src这一目录
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
//调用Vue.use()函数,把路由配置为Vue的插件
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
    routers:[//声明路由规则

        {
            path:'/',redirect:'/home'
        },{
            path:'/home',component:Home
        },{
            path:'/movie',component:Movie
        },

    ],
})

//向外共享路由对象
export default router
```
# 路由4.x创建模块
`router/index.js`
```js
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
```
`main.js`
```js
import Vue, {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
createApp(App).use(router).mount('#app')
```
# Element导入
## 全部导入
```js
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```
## 按需导入
`npm install -D unplugin-vue-components unplugin-auto-import`
```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    // ...
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
}
```