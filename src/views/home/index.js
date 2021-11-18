import React from 'react';
import './home.scss';
// import ReactCssTransitionGroup from "react-addons-css-transition-group";
// import * as api from '../../api/base';
import Summary from '../../component/summary';
import Develop from '../../component/develop';
// import toast from '../../component/toast/toast';


class HomePage extends React.Component {
    // constructor(props){
    //     super(props);
    //     // console.log(props,"props");
    //     this.state = {flag:true};
    // }
    state = {
        selTimeAreaType:0
    }

    userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'));

    componentDidMount(){
        console.log(this.userInfo,'userInfo')
        // console.log(window,window.toast)
        // setTimeout(() => {
        //     window.toast.show(true,0,'提示啦啦啦')
        // }, 2000);
        
        // setInterval(()=>{
            // toast.show(true,0,'提示啦啦啦')
        // },5000)
        // loading.show(true)
        // console.log("这里是父组件初始化")
        // console.log(loading.show(false),'调用了render')
        // console.log(loading)
    }

    render() {
        return(
            <div className="homePage">
                <div className="home-page">
                    <div className="welcome">
                        <div className="evalTit">{this.userInfo.xxmc}·学生发展核心素养</div>
                        <div className="welcome-login">欢迎您，{this.userInfo.name}老师!</div>
                        <div className="login-time">今天是 11月15日 星期一</div>
                    </div>
                    {/* 这里是组件 */}
                    <Summary></Summary>
                    <Develop timeType={this.state.selTimeAreaType} className="mt30"></Develop>
                </div>
            </div>
        );
    }

}

export default HomePage;