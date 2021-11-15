import React from 'react';
import { Route, Switch } from "react-router";
import menus from './config'
import substance from './substance'
function CRouter(){
    const getAsyncMenus = () => menus;
    const createMenu = (item) => {
        // console.log(item,substance,'item')
        return (
            <Route 
                path = { item.path || item.key }
                exact
                key = { item.path || item.key }
                component = { substance[item.component] || '' }
            />
        )
    }
    // console.log(getAsyncMenus(),'6677')
    return (
        <Switch>
            {getAsyncMenus().map(createMenu)}
        </Switch>
    )
}

export default CRouter;