import React from 'react';
// import Eval from '../eval';
// import ListPage from '../list';
import { NavLink } from 'react-router-dom';
import Routes from '../../router/index';
import AnimatedSwitch from '../../router/AnimatedSwitch';

class Layer extends React.Component {
    
    componentDidMount() {
        // this.props.history.push("/home/index?p="+Math.random())
    }

    render(){
        console.log('layer框架渲染')
        return (
            <div>
                <div className="AppFoot">
                    <div className="foot_nav">
                        <NavLink activeClassName="activ"  to='/base/home'>
                            <div className="navImg nav-1"></div>
                        </NavLink>
                    </div>
                    <div className="foot_nav">
                        <NavLink activeClassName="activ" to='/base/eval'>
                            <div className="navImg nav-2"></div>
                        </NavLink>
                    </div>
                    <div className="foot_nav">
                        <NavLink activeClassName="activ" to='/base/task'>
                            <div className="navImg nav-3"></div>
                        </NavLink>
                    </div>
                    <div className="foot_nav">
                        <NavLink activeClassName="activ" to='/base/record'>
                            <div className="navImg nav-4"></div>
                        </NavLink>
                    </div>
                    <div className="foot_nav">
                        <NavLink activeClassName="activ" to='/base/my'>
                            <div className="navImg nav-5"></div>
                        </NavLink>
                    </div>
                </div>
                {/* 这里要动态的获取路由... */}
                {/* <Route path="/home/eval" component={Eval}/>
                <Route path="/home/index" component={Home}/> */}
                <AnimatedSwitch>
                    <Routes rootPath='base'/>
                </AnimatedSwitch>
            </div>
        )
    }
}

export default Layer

// export default function(props){
//     console.log(useRouteMatch(),'props_Layout')
//     const { path } = useRouteMatch()
//     return (
//         <div>
//             <div>啦啦啦框架</div>
//             {props.children}
//             <Switch>
//                 <Route exact path={path} render={() => <h3>嵌套路由</h3>}/>
//                 <Route  path={`${path}/a`} component={Eval}/>
//                 <Route  path={`${path}/b`} component={ListPage}/>
//             </Switch>
//         </div>
//     )
// }
