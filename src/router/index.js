import React from 'react';
import { Redirect, Route, Switch } from "react-router";
import menus from './config'
import substance from './substance'
function CRouter(){
    const getAsyncMenus = () => menus;

    // console.log(this,'this.props')

    const createMenu = (item) => {
        // console.log(item,substance,'item')
        if (!item.redirect){
            return (
                <Route 
                    path = { item.path || item.key }
                    key = { item.path || item.key }
                    component = { substance[item.component] || '' }
                />
            )
        } else {
            return (
                <Redirect key = { item.path || item.key } exact from="/" to="/home"></Redirect>
            )
        }
    }
    // console.log(getAsyncMenus(),'6677')
    return (
        <Switch>
            {getAsyncMenus().map(createMenu)}
        </Switch>
    )
}

export default CRouter;