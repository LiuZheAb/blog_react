//内容组件
import React, { Component, Suspense, lazy } from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Route } from "react-router-dom";
import Loder from '../Loder';
import HomeList from "../HomeList";
import "./index.less";

const { Content } = Layout;
const GoJS = lazy(() => import('../Documents/GOJS'));
const MyBlog = lazy(() => import('../Documents/MyBlog'));
const CodeReview = lazy(() => import('../Documents/CodeReview'));
const FreeCodeCamp = lazy(() => import('../Documents/FreeCodeCamp'));
const Problem = lazy(() => import('../Documents/Problem'));
const PageFooter = lazy(() => import('../PageFooter'));

export default class index extends Component {
    componentDidMount() {
        document.title = "Liuzhe's Blog";
    }
    render() {
        return (
            <Layout className="content-layout">
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: "#fff"
                    }}
                >
                    <Router>
                        <Suspense fallback={<Loder />}>
                            <Route exact path="/" render={() => { document.title = "Liuzhe's Blog"; return <HomeList /> }} />
                            <Route path="/gojs" render={() => { document.title = "GoJS 入门教程"; return <GoJS /> }} />
                            <Route path="/myblog" render={() => { document.title = "本站介绍"; return <MyBlog /> }} />
                            <Route path="/codereview" render={() => { document.title = "Code Review"; return <CodeReview /> }} />
                            <Route path="/freecodecamp" render={() => { document.title = "FreeCodeCamp"; return <FreeCodeCamp /> }} />
                            <Route path="/problem" render={() => { document.title = "问题汇总"; return <Problem /> }} />
                            <Route path={["/myblog", "/gojs", "/codereview", "/freecodecamp", "/problem"]} render={() => (<PageFooter />)} />
                        </Suspense>
                    </Router>
                </Content>
            </Layout>
        )
    }
}
