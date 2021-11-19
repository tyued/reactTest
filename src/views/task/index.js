import React from 'react';
import { Link } from 'react-router-dom';
import './task.scss'
class List extends React.Component {
    render() {
        return(
            <div className="taskPage">
              List页面<Link to="/home/a"><button>回跳</button></Link>
            </div>
        );
    }
}

export default List;