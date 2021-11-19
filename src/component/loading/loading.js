import React from 'react';
import ReactDOM from 'react-dom';
import './loading.scss';

class Loading{
    domNode = null;
    isExistNode = false;
    timer = null;
    defaultTime = 1000;
    defaultHideTimer = null;
    removeTimer = null;

    show(){
        // console.log('调用show方法')
        
        this.timer && clearTimeout(this.timer);
        this.render(true);
    }

    hide(){
        this.render(false)
    }

    createNode(){
        return (
            <div className="Load-box"></div>
        )
    }

    removeNode(){
        // console.log(this.domNode,this.isExistNode,'this.domNode')
        try{
            document.body.removeChild(this.domNode);
        }catch(e){

        }
    }

    render(visible) {        
        if (!this.isExistNode && visible){
            this.domNode = document.createElement('div');
            document.body.appendChild(this.domNode);
            const children = this.createNode();
            ReactDOM.render(children,this.domNode);
            this.isExistNode = true;
        }
        if (visible){
            this.domNode.className = "Load-body";
        } else {
            this.domNode.className = "Load-body willHide";
            this.removeTimer = setTimeout(()=>{
                this.domNode.className = "Load-body hide";
                clearTimeout(this.removeTimer);
                this.removeNode();
                this.isExistNode = false;
            },1000)
        }
    }
}

export default new Loading();