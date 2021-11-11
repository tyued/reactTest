import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

    // 函数组件中没有生命周期，那么可以使用 useEffect 来替代。如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
    useEffect(() => {
        console.log('8899')
    })

    return (
        <div className="App">
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React 
            </a>
        </header> */}
            <div className="AppMain">

            </div>
            <div className="AppFoot">
                <div className="foot_nav">首页</div>
                <div className="foot_nav">任务</div>
                <div className="foot_nav">点评</div>
                <div className="foot_nav">记录</div>
                <div className="foot_nav">我的</div>
            </div>
        </div>
    );
}

export default App;
