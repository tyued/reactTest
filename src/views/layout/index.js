import React from 'react';
import Eval from '../eval';
import ListPage from '../list';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
export default function(props){
    console.log(useRouteMatch(),'props_Layout')
    const { path, url, params } = useRouteMatch()
    return (
        <div>
            <div>啦啦啦框架</div>
            {props.children}
            <Switch>
                <Route exact path={path} render={() => <h3>嵌套路由</h3>}/>
                <Route  path={`${path}/a`} component={Eval}/>
                <Route  path={`${path}/b`} component={ListPage}/>
            </Switch>
        </div>
    )
}