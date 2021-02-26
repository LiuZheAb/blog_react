//路由
import React, { Suspense, lazy } from 'react';
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Loader from '../components/Loader';
import { TOTAL_DATA } from "../assets/data";

const Home = lazy(() => import('../pages/Home'));
const Demos = lazy(() => import('../pages/DemoPages'));
const NotFound = lazy(() => import('../pages/NotFound'));
let hrefArray = [];
for (let i = 0, len = TOTAL_DATA.length; i < len; i++) {
    hrefArray.push(TOTAL_DATA[i].baseHref);
    hrefArray.push(TOTAL_DATA[i].baseHref + "/:num");
}

export default class EarthRouter extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/demo/:num/preview" render={() => <Demos />} />
                        <Route exact path={["/", ...hrefArray]} render={() => <Home />} />
                        <Route render={() => <div style={{ width: "100vw", height: "100vh" }}><NotFound /></div>} />
                    </Switch>
                </Suspense>
            </Router>
        );
    };
};