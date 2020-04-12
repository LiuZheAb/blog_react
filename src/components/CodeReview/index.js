//Code Review文档
import React, { Component, Suspense, lazy } from 'react';
import { Link, HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loder from '../Loder';
import { codeReview } from "../../assets/data";
import "./index.less";

// 所有章节
const CodeReview00 = lazy(() => import('./Chapters/00'));
const CodeReview01 = lazy(() => import('./Chapters/01'));
const CodeReview02 = lazy(() => import('./Chapters/02'));
const CodeReview03 = lazy(() => import('./Chapters/03'));
const CodeReview04 = lazy(() => import('./Chapters/04'));
const CodeReview05 = lazy(() => import('./Chapters/05'));
const CodeReview06 = lazy(() => import('./Chapters/06'));
const CodeReview07 = lazy(() => import('./Chapters/07'));
const CodeReview08 = lazy(() => import('./Chapters/08'));
const CodeReview09 = lazy(() => import('./Chapters/09'));

class index extends Component {
    componentDidMount() {
        document.title = codeReview.title;
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
                        <Route exact path={codeReview.catalog[0].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[0].title; return <CodeReview00 /> }} />
                        <Route exact path={codeReview.catalog[1].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[1].title; return <CodeReview01 /> }} />
                        <Route exact path={codeReview.catalog[2].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[2].title; return <CodeReview02 /> }} />
                        <Route exact path={codeReview.catalog[3].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[3].title; return <CodeReview03 /> }} />
                        <Route exact path={codeReview.catalog[4].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[4].title; return <CodeReview04 /> }} />
                        <Route exact path={codeReview.catalog[5].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[5].title; return <CodeReview05 /> }} />
                        <Route exact path={codeReview.catalog[6].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[6].title; return <CodeReview06 /> }} />
                        <Route exact path={codeReview.catalog[7].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[7].title; return <CodeReview07 /> }} />
                        <Route exact path={codeReview.catalog[8].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[8].title; return <CodeReview08 /> }} />
                        <Route exact path={codeReview.catalog[9].href} render={() => { document.title = codeReview.title + "——" + codeReview.catalog[9].title; return <CodeReview09 /> }} />
                        {/* 文档首页目录 */}
                        <Route exact path={codeReview.baseHref} render={() => {
                            document.title = codeReview.title;
                            return <div className="catalog">
                                <div className="container">
                                    <div className="title">
                                        <h1>{codeReview.title}</h1>
                                    </div>
                                    <div className="contents">
                                        {Object.keys(codeReview.section).map((item, index) => {
                                            let catalog = codeReview.catalog.slice(codeReview.section[item][0], codeReview.section[item][1] + 1);
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