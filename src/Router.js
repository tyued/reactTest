import React from 'react';
import Home from './views/home';
import Index from './views/index';

import { BrowserRouter as Router,Route } from "react-router-dom";

function router(){
    return (
        <Router>
            <Route path='/home' component={Home}/>
            <Route path='/detail' component={Index}/>
        </Router>
    )
}

export default router;