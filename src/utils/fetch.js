import axios from 'axios';
import loading from '../component/loading/loading';

const service = axios.create({
    timeout: 10000
});

// 接口列表池
let requestList = [];

service.interceptors.request.use(config =>{
    requestList.push(config.url);
    loading.show()
    // console.log('这里是请求拦截器')
    // console.log(config);

    config.headers.Authorization = window.sessionStorage.getItem('token'); 

    // let cancel;
    // config.cancelToken = new axios.CancelToken(function(c){
    //     console.log('77777',c)
    //     cancel = c
    // })

    return config
}, error =>{
    loading.hide();
    Promise.reject(error)
})

/* Response拦截器 */
service.interceptors.response.use(
    response => {
        // console.log(response,'response')
        const index = requestList.findIndex(text => text === response.config.url);
        requestList.splice(index, 1);
        // console.log(requestList,'requestList')
        if(requestList.length===0) {
            // console.log('进来了')
            loading.hide();
        }

        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            Promise.reject(response.data);
        }
    },
    error => {
        loading.hide();
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