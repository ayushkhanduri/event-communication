import React from 'react';
import {BrowserRouter as Router, Route, Link,withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

// import LoginUI from './presentational/Login/LoginUI';
import Card from './components/Card/Card.component';
import Counter from './components/Counter/Counter.component';
import Parent from './Parent.component'

import About from './about';

import createStore from './config/store.config';

import './app.css';

const AppRouter = (history) =>{ 


    return(    <Provider store={createStore({initialState:{}})}>
        <Router>
            <div className="main-container">
                <Parent>
                    <ul>
                        <li>
                            <Link to="/">Card</Link> <br/>
                            
                        </li>
                        <li><Link to="/counter">Counter</Link> </li>
                        <li> <Link to="/about">About</Link></li>
                    </ul>
                    
                    <Route exact path='/' component={Card}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/about' component={About}/>
                </Parent>
                
            </div>
        </Router>
    </Provider>)
};

export default AppRouter;