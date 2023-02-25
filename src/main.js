import {createApp} from 'vue'
import App from './App.vue'

//router
import router from './router/index'

//element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// let loadingInstance = null; //��������,�����洢loading�����ʵ������

//axios
import axios from 'axios'
// import {Loading} from "element-plus/es/components/loading/src/service";
// axios.defaults.baseURL = 'https://www.runoob.com/try/ajax/json_demo.json'//��������·��
axios.defaults.baseURL = 'http://localhost:8080'//��������·��
//��������������
axios.interceptors.request.use(function (config){
    //����token��֤
    config.headers.Authorization = 'Bearer XXX'
    // loadingInstance = Loading.service({fullscreen:true})    //����loading�����service()����,����loading�����ʵ��,��ȫ��չʾloadingЧ��
    console.log(config)
    return config//�̶�д��
})
//������Ӧ������
axios.interceptors.response.use(response=>{
    // loadingInstance.close()
    return response
})




const app = createApp(App)
    app.use(router)
    app.use(ElementPlus)
    app.config.globalProperties.$http = axios   //ȫ������axios
    app.mount('#app')