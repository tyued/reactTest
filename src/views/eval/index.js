import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './eval.scss'
// import ListPage from '../list'
import {fetchUserInfo} from '../../redux/actions/userInfo'
import {connect} from 'react-redux'

class Eval extends React.Component {

    componentDidMount() {
        // 这里无论redux是否有值都重新拉取接口或许新的数据、、此处可以加一个this.props.userinfo的一个判断
        this.props.fetchUserInfo();
        console.log(this.props,'获取完数据后的数据')
    }

    componentDidUpdate(){
        // redux更新状态后会调用此方法
        console.log(this.props,'组件更新')
    }

    render() {
        console.log(this.props,'eval渲染')
        return(
            <div className="evalPage">
                这里是点评页面
                <Link to="/home/b"><button>我这里要跳</button></Link>
                {/* <Route path="/home/list" component={ListPage} /> */}
            </div>
        );
    }
}

export default connect(
    state => ({
        userInfo:state.userInfo
    }),
    {fetchUserInfo}
)(Eval)

// export default Eval;