import React,{Component} from 'react';
import Contact from '../containers/Contact'
import About from '../containers/About'
import Home from '../containers/Home'
import Project from '../containers/Project'
import Skill from '../containers/Skill'
import App from '../layouts/App'
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/project" component={Project}/>
            <Route path="/skill" component={Skill}/>
        </Route>
    </Router>
)