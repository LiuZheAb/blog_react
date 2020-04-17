//内容组件
import React, { Component, Suspense, lazy } from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Loder from '../Loder';
import HomeList from "../HomeList";
import { totalData } from "../../assets/data";
import setKeyMap from "../../utils/keymap";
import "./index.less";

const { Content } = Layout;
const PageFooter = lazy(() => import('../PageFooter'));
const Documents = lazy(() => import('../Documents'));
let nameMap = setKeyMap(totalData);
let hrefArray = [];
for (let i = 0; i < totalData.length; i++) {
    hrefArray.push(totalData[i].baseHref)
}

class index extends Component {
    render() {
        //根据路由确定当前的title
        let path = this.props.location.pathname;
        if (path !== "/") {
            const pathSnippets = "/" + path.split('/').filter(i => i)[0];
            document.title = pathSnippets === path ? nameMap[pathSnippets] : nameMap[pathSnippets] + "——" + nameMap[path];
        } else {
            document.title = "Liuzhe's Blog";
        }
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
                            <Route exact path="/" render={() => { return <HomeList /> }} />
                            {hrefArray.map((item, index) => {
                                return (
                                    <Route key={index} path={item} component={() => <Documents dataSource={totalData[index]} />} />
                                )
                            })}
                            <Route path={hrefArray} render={() => (<PageFooter />)} />
                        </Suspense>
                    </Router>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(index);