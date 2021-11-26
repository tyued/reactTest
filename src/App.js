import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import ReactCssTransitionGroup from "react-addons-css-transition-group"
import Routes from './router/index';
import toast from './component/toast/toast';
import 'animate.css'

// import Home from './views/home/index';
// import Eval from './views/eval/index';
// import Home from './views/home';
// import Eval from './views/eval';
// import ListPage from './views/list';
// import Layouts from './views/layout';
function App() {

    // 函数组件中没有生命周期，那么可以使用 useEffect 来替代。如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
    useEffect(() => {
        // console.log('111111');
        window.toast = toast;
        // console.log('8899')
    })

    return (
        <Router>
        <div className="App">
            <div className="AppMain">
                {/* <Route path="/eval" component={Eval}/> */}
                
                {/* <Switch> */}
                    <Routes/>
                    {/* <Route path="/home" component={Layouts}>
                    </Route>
                    <Route path="/eval" component={Home} /> */}
                {/* </Switch> */}
                
            </div>

            {/* <div className="AppFoot">
                <div className="foot_nav">
                    <NavLink activeClassName="activ"  to='/home'>
                        <div className="navImg nav-1"></div>
                    </NavLink>
                </div>
                <div className="foot_nav">
                    <NavLink activeClassName="activ" to='/eval'>
                        <div className="navImg nav-2"></div>
                    </NavLink>
                </div>
                <div className="foot_nav">
                    <NavLink activeClassName="activ" to='/task'>
                        <div className="navImg nav-3"></div>
                    </NavLink>
                </div>
                <div className="foot_nav">
                    <NavLink activeClassName="activ" to='/record'>
                        <div className="navImg nav-4"></div>
                    </NavLink>
                </div>
                <div className="foot_nav">
                    <NavLink activeClassName="activ" to='/my'>
                        <div className="navImg nav-5"></div>
                    </NavLink>
                </div>
            </div> */}
        </div>
        </Router>
    );
}

export default App;
