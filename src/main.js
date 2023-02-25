import {createApp} from 'vue'
import App from './App.vue'

//router
import router from './router/index'

//element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// let loadingInstance = null; //声明变量,用来存储loading组件的实例对象

//axios
import axios from 'axios'
// import {Loading} from "element-plus/es/components/loading/src/service";
// axios.defaults.baseURL = 'https://www.runoob.com/try/ajax/json_demo.json'//配置请求路径
axios.defaults.baseURL = 'http://localhost:8080'//配置请求路径
//配置请求拦截器
axios.interceptors.request.use(function (config){
    //配置token认证
    config.headers.Authorization = 'Bearer XXX'
    // loadingInstance = Loading.service({fullscreen:true})    //调用loading组件的service()方法,创建loading组件的实例,并全屏展示loading效果
    console.log(config)
    return config//固定写法
})
//配置响应拦截器
axios.interceptors.response.use(response=>{
    // loadingInstance.close()
    return response
})




const app = createApp(App)
    app.use(router)
    app.use(ElementPlus)
    app.config.globalProperties.$http = axios   //全局配置axios
    app.mount('#app')