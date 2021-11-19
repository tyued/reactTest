import React from 'react'
import * as api from '../../api/base'
import { UrlToParams } from '../../utils/tools'

import './login.scss'

class Login extends React.Component {

    constructor(props){
        super(props);
        // 把url中?以后的参数转成对象形式
        this.urlParams = UrlToParams(this.props.location.search)
    }
    urlParams = {}
    state = {
        loginForm:{},
    }

    async submitLogin(){
        console.log(this,'登录form')
        await this.getToken();
        await this.getUserInfo();
    }

    async getToken(){
        let params = {};
        params.xxdm = this.urlParams.xxdm;
        params.usercode = this.urlParams.usercode;
        params.platform = 2;
        let res = await api.getTokenByXxt(params);
        if(res.status===200){
            console.log(res,'tokenRes');
            this.token = res.data;
            window.sessionStorage.setItem('token',this.token);
        }
    }

    async getUserInfo(){
        let params = {};
        params.token = this.token;
        let res = await api.getUserBaseInfo(params);
        // 删除不必要的属性值..减少缓存的数据
        delete res.menus;
        delete res.elements;
        window.localStorage.setItem('xxdm',res.xxdm);
        window.sessionStorage.setItem('userinfo',JSON.stringify(res));
        // //获取 角色的权限信息
        // await this.getUserPermission();
        // //获取全局配置权限
        // await this.getConfig();
        window.sessionStorage.setItem('isStudent','false');
        // window.localStorage.setItem('warning','true');
        this.props.history.push("/base?p="+Math.random())
    }
    
    handleChange = (itemName) => {
        return (event) => {
            let tempState = {[itemName]:event.target.value};
            tempState = Object.assign(this.state.loginForm,tempState)
            this.setState({
                loginForm:tempState
            })
        }
    }

    render(){
        return (
            <div className="loginMain">
                {/* <div className="colBox">
                    登录名：<input className="ipt" onChange={this.handleChange('username')}></input>
                </div>
                <div className="colBox">
                    密码：<input className="ipt" onChange={this.handleChange('password')}></input>
                </div> */}
                <div className="colBox">
                    <button className="loginBtn" onClick={()=>this.submitLogin()}>登录</button>
                </div>
            </div>
        )
    }
}

export default Login
