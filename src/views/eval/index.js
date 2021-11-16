import React from 'react';
import { Link } from 'react-router-dom';
// import ListPage from '../list'

class Eval extends React.Component {
    render() {
        return(
            <div className="innerPage">
                这里是点评页面
                <Link to="/home/b"><button>我这里要跳</button></Link>
                {/* <Route path="/home/list" component={ListPage} /> */}
            </div>
        );
    }
}

export default Eval;