import React from 'react';
import ReactDOM from 'react-dom';
import './toast.scss';

class toast{
    domNode = null;
    isExistNode = false;
    timer = null;
    defaultTime = 1500;
    defaultHideTimer = null;
    removeTimer = null;
    context = '';
    // constructor(){
        
    // }

    show(isDelay=true,delay=300,context=''){

        // console.log(context,this.isExistNode,'调用show方法')
        // console.log('调用show方法')
        this.context = context;
        this.timer && clearTimeout(this.timer);
        if (!isDelay) {
            this.render(true);
        } else {
            this.timer = setTimeout(()=>{
                this.render(true);
            },delay)
        }
    }

    hide(){
        this.render(false)
    }

    createNode(){
        return (
            <div className="loading">{this.context}</div>
        )
    }

    removeNode(){
        console.log(this.domNode,'this.domNode')
        try{
            document.body.removeChild(this.domNode);
        }catch(e){

        }
        this.isExistNode = false;
        // console.log('移除节点')
    }

    render(visible) {
        // console.log('渲染Loading')
        if (this.defaultHideTimer){
            clearTimeout(this.defaultHideTimer);
            clearTimeout(this.removeTimer);
        }
        this.defaultHideTimer = setTimeout(()=>{
            this.hide();
            clearTimeout(this.defaultHideTimer);
        },this.defaultTime)
        
        if (!this.isExistNode && visible){
            this.domNode = document.createElement('div');
            document.body.appendChild(this.domNode);
            const children = this.createNode();
            ReactDOM.render(children,this.domNode);
            this.isExistNode = true;
        }
        if (visible){
            this.domNode.className = "hp-loading-wrap";
        } else {
            this.domNode.className = "hp-loading-wrap hide";
            this.removeTimer = setTimeout(()=>{
                this.removeNode();
                this.isExistNode = false;
            },1500)
        }
    }
}

export default new toast();