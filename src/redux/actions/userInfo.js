import * as api from '../../api/base'

function fetchUser(res){
    return {type: 'fetch', data:res}
}

export const setUserInfo = (userInfo) => {
    return {type: 'set', data:userInfo}
}

export const fetchUserInfo = () => {
    return (dispatch)=>{
        api.getUserBaseInfo({token:window.sessionStorage.getItem('token')}).then((res)=>{
            delete res.menus;
            delete res.elements;
            dispatch(fetchUser(res))
        })
    }
}

