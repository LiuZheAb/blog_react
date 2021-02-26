//路由
import React, { Suspense, lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Loader from '../components/Loader';

const Home = lazy(() => import('../pages/Home'));
const CustomForm = lazy(() => import('../pages/DemoPages/CustomForm'));
const WebIDE = lazy(() => import('../pages/DemoPages/WebIDE'));
const WebIDE2 = lazy(() => import('../pages/DemoPages/WebIDE2'));
const Vis = lazy(() => import('../pages/DemoPages/Vis'));

export default class EarthRouter extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/customform" render={() => <CustomForm />} />
                        <Route path="/webide" render={() => <WebIDE />} />
                        <Route path="/webide2" render={() => <WebIDE2 />} />
                        <Route path="/vis" render={() => <Vis />} />
                        <Route path="/" render={() => <Home />} />
                    </Switch>
                </Suspense>
            </Router>
        );
    };
};