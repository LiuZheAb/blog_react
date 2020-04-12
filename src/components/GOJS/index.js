//GoJS文档
import React, { Component, Suspense, lazy } from 'react';
import { Link, HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loder from '../Loder';
import { gojsData } from "../../assets/data";
import "./index.less";

// 所有章节
const GoJS00 = lazy(() => import('./Chapters/00'));
const GoJS01 = lazy(() => import('./Chapters/01'));
const GoJS02 = lazy(() => import('./Chapters/02'));
const GoJS03 = lazy(() => import('./Chapters/03'));
const GoJS04 = lazy(() => import('./Chapters/04'));
const GoJS05 = lazy(() => import('./Chapters/05'));
const GoJS06 = lazy(() => import('./Chapters/06'));
const GoJS07 = lazy(() => import('./Chapters/07'));
const GoJS08 = lazy(() => import('./Chapters/08'));
const GoJS09 = lazy(() => import('./Chapters/09'));
const GoJS10 = lazy(() => import('./Chapters/10'));
const GoJS11 = lazy(() => import('./Chapters/11'));
const GoJS12 = lazy(() => import('./Chapters/12'));
const GoJS13 = lazy(() => import('./Chapters/13'));
const GoJS14 = lazy(() => import('./Chapters/14'));
const GoJS15 = lazy(() => import('./Chapters/15'));
const GoJS16 = lazy(() => import('./Chapters/16'));
const GoJS17 = lazy(() => import('./Chapters/17'));
const GoJS18 = lazy(() => import('./Chapters/18'));
const GoJS19 = lazy(() => import('./Chapters/19'));
const GoJS20 = lazy(() => import('./Chapters/20'));
const GoJS21 = lazy(() => import('./Chapters/21'));

class index extends Component {
    componentDidMount() {
        document.title = gojsData.title;
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
                        <Route exact path={gojsData.catalog[0].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[0].title; return <GoJS00 /> }} />
                        <Route exact path={gojsData.catalog[1].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[1].title; return <GoJS01 /> }} />
                        <Route exact path={gojsData.catalog[2].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[2].title; return <GoJS02 /> }} />
                        <Route exact path={gojsData.catalog[3].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[3].title; return <GoJS03 /> }} />
                        <Route exact path={gojsData.catalog[4].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[4].title; return <GoJS04 /> }} />
                        <Route exact path={gojsData.catalog[5].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[5].title; return <GoJS05 /> }} />
                        <Route exact path={gojsData.catalog[6].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[6].title; return <GoJS06 /> }} />
                        <Route exact path={gojsData.catalog[7].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[7].title; return <GoJS07 /> }} />
                        <Route exact path={gojsData.catalog[8].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[8].title; return <GoJS08 /> }} />
                        <Route exact path={gojsData.catalog[9].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[9].title; return <GoJS09 /> }} />
                        <Route exact path={gojsData.catalog[10].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[10].title; return <GoJS10 /> }} />
                        <Route exact path={gojsData.catalog[11].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[11].title; return <GoJS11 /> }} />
                        <Route exact path={gojsData.catalog[12].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[12].title; return <GoJS12 /> }} />
                        <Route exact path={gojsData.catalog[13].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[13].title; return <GoJS13 /> }} />
                        <Route exact path={gojsData.catalog[14].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[14].title; return <GoJS14 /> }} />
                        <Route exact path={gojsData.catalog[15].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[15].title; return <GoJS15 /> }} />
                        <Route exact path={gojsData.catalog[16].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[16].title; return <GoJS16 /> }} />
                        <Route exact path={gojsData.catalog[17].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[17].title; return <GoJS17 /> }} />
                        <Route exact path={gojsData.catalog[18].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[18].title; return <GoJS18 /> }} />
                        <Route exact path={gojsData.catalog[19].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[19].title; return <GoJS19 /> }} />
                        <Route exact path={gojsData.catalog[20].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[20].title; return <GoJS20 /> }} />
                        <Route exact path={gojsData.catalog[21].href} render={() => { document.title = gojsData.title + "——" + gojsData.catalog[21].title; return <GoJS21 /> }} />
                        {/* 文档首页目录 */}
                        <Route exact path={gojsData.baseHref} render={() => {
                            document.title = gojsData.title;
                            return <div className="catalog">
                                <div className="container">
                                    <div className="title">
                                        <h1>{gojsData.title}</h1>
                                    </div>
                                    <div className="contents">
                                        {Object.keys(gojsData.section).map((item, index) => {
                                            let catalog = gojsData.catalog.slice(gojsData.section[item][0], gojsData.section[item][1] + 1);
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