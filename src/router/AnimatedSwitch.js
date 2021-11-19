import React from 'react';
import { Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class AnimatedSwitch extends React.Component{
    constructor(props){
        super(props)
    }
    
    children = this.props.children;

    render(){
        // console.log(this,'animate--this')
        return (
            <Route 
                render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames={'router outerPage'}
                            timeout={800}
                        >
                            <Switch location={location}>{this.children}</Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        )
    }
}

export default AnimatedSwitch