import React, { Component } from 'react'
import { Layout } from 'antd';
import { HashRouter as Router, Route } from "react-router-dom";
import loadable from '../../utils/lazyLoad';
import "./index.less";

const { Content } = Layout;
const GoJSintro = loadable(() => import('../GOJS/Intro'));
const GoJSfirst = loadable(() => import('../GOJS/First'));

export default class index extends Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Router>
                        <Route path="/gojs-intro" render={() => (<GoJSintro />)} />
                        <Route path="/gojs-1" render={() => (<GoJSfirst />)} />
                    </Router>
                </Content>
            </Layout>
        )
    }
}
