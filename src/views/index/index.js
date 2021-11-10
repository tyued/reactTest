import React from 'react';
import Home from '../home/index'
const name = 'Josh Perez';


export default class detail extends React.Component {

    render(){
        let element = (
            <div>
                <Home></Home>
                <h1>Hello,{name}</h1>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
        return(
            element
        );
    }

}