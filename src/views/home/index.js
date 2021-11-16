import React from 'react';
import './home.scss';
// import ReactCssTransitionGroup from "react-addons-css-transition-group";
// import * as api from '../../api/base';
import Summary from '../../component/summary';
import Develop from '../../component/develop';


class HomePage extends React.Component {
    // constructor(props){
    //     super(props);
    //     // console.log(props,"props");
    //     this.state = {flag:true};
    // }
    state = {
        selTimeAreaType:0
    }

    componentDidMount(){
        // console.log("这里是父组件初始化")
    }

    render() {
        return(
            <div className="homePage">
                <div className="home-page">
                    <div className="welcome">
                        <div className="evalTit">公众号演示学校·学生发展核心素养</div>
                        <div className="welcome-login">欢迎您，华盼妮老师!</div>
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