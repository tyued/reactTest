import React from 'react';
import { Redirect, Route, Switch } from "react-router";
import menus from './config'
import substance from './substance'

class CRouter extends React.Component {
    constructor(props){
        super(props);
    }

    createMenu = (item) => {
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
                <Redirect key = { item.path || item.key } exact from={ item.path || item.key } to={item.redirect}></Redirect>
            )
        }
    }

    /**
     * 根据<Routes>组件中的rootPath的属性 找到这个节点下的children 并返回
     * @param {当前节点} nodeList 
     * @param {目标节点} targetPath 
     * @param {当前层级} index 
     * @returns 
     */
    findCurrentNodeMenus = (nodeList,targetPath,index=0) => {  
        // console.log(nodeList,'nodeList')
        for(let i=0;i<nodeList.length;i++){
            if(nodeList[i].key==='/'+targetPath.split('/').slice(0,index+1).join('/')){
                if(targetPath.split('/').length>index+1){
                    return this.findCurrentNodeMenus(nodeList[i].children,targetPath,index+1)
                }else{
                    return nodeList[i].children;
                }
            }
        }
        return [];
    }
    
    /**
     * 获取当前节点的children会调用findCurrentNodeMenus,如果rootPath的值为空或者'root' 返回整个静态路由
     * @returns 
     */
    currentMenus = () => {
        let currentMenu;
        currentMenu = (!this.props.rootPath || this.props.rootPath === 'root') ? menus : this.findCurrentNodeMenus(menus,this.props.rootPath);
        // console.log(currentMenu,'currentMenu')
        return currentMenu;
    }

    /**
     * 返回 路由注册内容
     * @returns 
     */
    render(){
        return (
            <Switch>
                {this.currentMenus().map(this.createMenu)}
            </Switch>
        )
    }
}
export default CRouter
