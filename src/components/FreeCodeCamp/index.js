//Code Review文档
import React, { Component, Suspense, lazy } from 'react';
import { Link, HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loder from '../Loder';
import { freeCodeCamp } from "../../assets/data";

// 所有章节
const FreeCodeCamp00 = lazy(() => import('./Chapters/00'));
const FreeCodeCamp01 = lazy(() => import('./Chapters/01'));
const FreeCodeCamp02 = lazy(() => import('./Chapters/02'));

class index extends Component {
    componentDidMount() {
        document.title = freeCodeCamp.title;
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
                        <Route exact path={freeCodeCamp.catalog[0].href} render={() => { document.title = freeCodeCamp.title + "——" + freeCodeCamp.catalog[0].title; return <FreeCodeCamp00 /> }} />
                        <Route exact path={freeCodeCamp.catalog[1].href} render={() => { document.title = freeCodeCamp.title + "——" + freeCodeCamp.catalog[1].title; return <FreeCodeCamp01 /> }} />
                        <Route exact path={freeCodeCamp.catalog[2].href} render={() => { document.title = freeCodeCamp.title + "——" + freeCodeCamp.catalog[2].title; return <FreeCodeCamp02 /> }} />
                        {/* 文档首页目录 */}
                        <Route exact path={freeCodeCamp.baseHref} render={() => {
                            document.title = freeCodeCamp.title;
                            return <div className="catalog">
                                <div className="container">
                                    <div className="title">
                                        <h1>{freeCodeCamp.title}</h1>
                                    </div>
                                    <div className="contents">
                                        {Object.keys(freeCodeCamp.section).map((item, index) => {
                                            let catalog = freeCodeCamp.catalog.slice(freeCodeCamp.section[item][0], freeCodeCamp.section[item][1] + 1);
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