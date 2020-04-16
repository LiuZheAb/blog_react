//Code Review文档
import React, { Component, Suspense, lazy } from 'react';
import { Link, HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loder from '../Loder';
import { proplemData } from "../../assets/data";

// 所有章节
const Proplem00 = lazy(() => import('./Chapters/00'));
const Proplem01 = lazy(() => import('./Chapters/01'));

class index extends Component {
    componentDidMount() {
        document.title = proplemData.title;
        //路由变化时强制将header显示出来
        window.addEventListener('hashchange', () => {
            document.getElementsByClassName("header")[0].className = "ant-layout-header header header-visible";
        })
    }
    render() {
        return (
            <Router>
                <Suspense fallback={<Loder />}>
                    <Switch>
                        <Route exact path={proplemData.catalog[0].href} render={() => { document.title = proplemData.title + "——" + proplemData.catalog[0].title; return <Proplem00 /> }} />
                        <Route exact path={proplemData.catalog[1].href} render={() => { document.title = proplemData.title + "——" + proplemData.catalog[1].title; return <Proplem01 /> }} />
                        {/* 文档首页目录 */}
                        <Route exact path={proplemData.baseHref} render={() => {
                            document.title = proplemData.title;
                            return <div className="catalog">
                                <div className="container">
                                    <div className="title">
                                        <h1>{proplemData.title}</h1>
                                    </div>
                                    <div className="contents">
                                        {Object.keys(proplemData.section).map((item, index) => {
                                            let catalog = proplemData.catalog.slice(proplemData.section[item][0], proplemData.section[item][1] + 1);
                                            return (
                                                <ul key={index}>
                                                    {catalog.length > 1 ?
                                                        <>
                                                            <li className="catalog-item-1">{item}</li>
                                                            {catalog.map((item2, index2) => {
                                                                return (
                                                                    <li key={index2} className="catalog-item-2"><Link to={item2.href}>{item2.title}</Link></li>
                                                                )
                                                            })}
                                                        </>
                                                        :
                                                        <li className="catalog-item-1 catalog-item-nochild" onClick={() => { this.props.history.push(catalog[0].href) }}>{catalog[0].title}</li>}
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }} />
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}

export default withRouter(index);