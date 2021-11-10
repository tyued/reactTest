import axios from 'axios';

const service = axios.create({
    timeout: 20000
});

service.interceptors.request.use(config =>{
    console.log('这里是请求拦截器')
    return config
}, error =>{
    Promise.reject(error)
})

export default service;