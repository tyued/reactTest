import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom';

import Home from './views/home';
import Eval from './views/eval';
import ListPage from './views/list';
import Layouts from './views/layout';
function App() {

    // 函数组件中没有生命周期，那么可以使用 useEffect 来替代。如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
    useEffect(() => {
        console.log('8899')
    })

    return (
        <Router>
        <div className="App">
            <div className="AppMain">
                <Switch>
                    <Route path="/home" component={Layouts}>

                        {/* <Route path="index" component={Eval} />
                        <Route path="list" component={ListPage} /> */}
                    </Route>
                    {/* <Route  path='/home/a' component={Eval}/>
                    <Route  path={`${path}/b`} component={ListPage}/> */}
                    <Route path="/eval" component={Home} />
                </Switch>
            </div>

            <div className="AppFoot">
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
                    <Link to='/task'>
                        <div className="navImg nav-3"></div>
                    </Link>
                </div>
                <div className="foot_nav">
                    <Link to='/record'>
                        <div className="navImg nav-4"></div>
                    </Link>
                </div>
                <div className="foot_nav">
                    <Link to='/my'>
                        <div className="navImg nav-5"></div>
                    </Link>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default App;
