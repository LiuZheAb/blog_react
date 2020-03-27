import React from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import loadable from '../utils/lazyLoad';

const Home = loadable(()=>import( '../pages/Home'));

export default class EarthRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (<Home />)} />
                </Switch>
            </Router>
        );
    };
};
