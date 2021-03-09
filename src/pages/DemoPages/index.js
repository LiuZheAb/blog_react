import React, { Component, lazy } from 'react';
import { Route } from "react-router-dom";

const CustomForm = lazy(() => import('./CustomForm'));
const WebIDE = lazy(() => import('./WebIDE'));
const WebIDE2 = lazy(() => import('./WebIDE2'));
const Vis = lazy(() => import('./Vis'));
const ModelCalc = lazy(() => import('./ModelCalc'));

export default class index extends Component {
    render() {
        return (
            <>
                <Route exact path="/demo/0/preview" render={() => <CustomForm />} />
                <Route exact path="/demo/1/preview" render={() => <WebIDE />} />
                <Route exact path="/demo/2/preview" render={() => <WebIDE2 />} />
                <Route exact path="/demo/3/preview" render={() => <Vis />} />
                <Route exact path="/demo/5/preview" render={() => <ModelCalc />} />
            </>
        )
    }
}

