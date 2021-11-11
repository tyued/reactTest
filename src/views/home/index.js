import React from 'react';
import './home.scss';
import ReactCssTransitionGroup from "react-addons-css-transition-group"
import * as api from '../../api/base'


class List extends React.Component {
    constructor(props){
        super(props);
        // console.log(props,"props");
        this.state = {flag:true};
    }

    render() {
        // console.log(this.state.flag,"flag")
        let liHtml;
        if (this.state.flag){
            liHtml = <li key="amache" className='animate__animated'>CCC</li>
        }
        return(
            <div className="shopping-list">
                <ul>
                    <li>AAA</li>
                    <li>BBB</li>
                    <ReactCssTransitionGroup transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionName={{enter: "animate__fadeInRight", leave: "animate__fadeOutRight"}} >
                        {liHtml}
                    </ReactCssTransitionGroup>
                    <li>{this.props.value}</li>
                </ul>
                <button className="alert" onClick={() => this.testAlert()}>这里是alert</button>
            </div>
        );
    }

    async testAlert(){
        console.log(api.getList,"this")

        let res = api.getList({page:1,limit:10});
        // console.log(res,'res')
        this.setState({
            flag: !this.state.flag
        })
        // console.log("this.state.flag="+this.state.flag)
    }
}

export default List;