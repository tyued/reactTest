import React from 'react';
import { Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class AnimatedSwitch extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    
    children = this.props.children;

    render(){
        // console.log(this,this.children,'animate--this')
        return (
            // 最外层要包一个 Route 是为了获取 location ,用于CSSTransition中指定key值(location.key),无此属性动画无法播放
            <Route 
                render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames={'router outerPage'}
                            timeout={500}
                        >
                            {/* 这里返回的就是路由列表 this.children */}
                            <Switch location={location}>{this.children}</Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        )
    }
}

export default AnimatedSwitch