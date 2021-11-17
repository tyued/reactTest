import axios from 'axios';
import loading from '../component/loading/loading';

const service = axios.create({
    timeout: 20000
});

// 接口列表池
const requestList = [];

service.interceptors.request.use(config =>{
    window.toast.show(true,0,'提示啦啦啦')
    requestList.push(config.url);
    loading.show()
    // console.log('这里是请求拦截器')
    // console.log(config);
    config.headers.Authorization = window.sessionStorage.getItem('token'); 
    return config
}, error =>{
    Promise.reject(error)
})

/* Response拦截器 */
service.interceptors.response.use(
    response => {
        // console.log(response,'response')
        const index = requestList.findIndex(text => text === response.config.url);
        requestList.splice(index, 1);
        // console.log(requestList,'requestList')
        if(requestList.length==0) {
            console.log('进来了')
            loading.hide();
        }

        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            Promise.reject(response.data);
        }
    },
    error => {
        if (error.response) {
            requestList = [];
            switch (error.response.status) {
                case 401:
                    setTimeout(() => {}, 2200)
                    break;
                default:
                    break;
            }
            return
        }
        return Promise.reject(error);
    }
);

export default service;