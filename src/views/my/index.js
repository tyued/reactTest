import React from 'react';
import { Link, Router } from 'react-router-dom';

class List extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="innerPage">
              List页面<Link to="/home/a"><button>回跳</button></Link>
            </div>
        );
    }
}

export default List;