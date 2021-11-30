import * as api from '../../api/base'

const initState = {}

export default function userInfo(preState=initState,action){
    console.log(action,'action')
    const {type,data} = action
    switch (type){
        case 'set' :
            return data || null
        case 'fetch' :
            console.log('fetch获取数据')
            return data
        // case 'fetch' :
        //     console.log('这里来获取数据');
        //     let res = await api.getUserBaseInfo({token:window.sessionStorage.getItem('token')});
        //     delete res.menus;
        //     delete res.elements;
        //     console.log(res,'AAAAA')
        //     return res || null 
        default :
            return null
    }

    


}