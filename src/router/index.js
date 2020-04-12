//路由
import React, { Suspense, lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Loder from '../components/Loder';
const Home = lazy(() => import('../pages/Home'));

export default class EarthRouter extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<Loder />}>
                    <Switch>
                        <Route path={["/"]} render={() => (<Home />)} />
                    </Switch>
                </Suspense>
            </Router>
        );
    };
};
