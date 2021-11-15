import axios from 'axios';

const service = axios.create({
    timeout: 20000
});

service.interceptors.request.use(config =>{
    // console.log('这里是请求拦截器')
    return config
}, error =>{
    Promise.reject(error)
})

/* Response拦截器 */
service.interceptors.response.use(
    response => {
        // console.log(response,'response')
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            Promise.reject(response.data);
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                setTimeout(() => {}, 2200)
                break;
            }
            return
        }
        return Promise.reject(error);
    }
);

export default service;