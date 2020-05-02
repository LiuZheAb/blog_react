//内容组件
import React, { Component, lazy } from 'react';
import { Layout } from 'antd';
import { Route, withRouter } from "react-router-dom";
import HomeList from "../HomeList";
import { TOTAL_DATA } from "../../assets/data";
import setKeyMap from "../../utils/keymap";
import "./index.less";

const { Content } = Layout;
const PageFooter = lazy(() => import('../PageFooter'));
const Documents = lazy(() => import('../Documents'));
let nameMap = setKeyMap(TOTAL_DATA);
let hrefArray = [];
for (let i = 0; i < TOTAL_DATA.length; i++) {
    hrefArray.push(TOTAL_DATA[i].baseHref)
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
        let dataSource = null, dataIndex = null;

        return (
            <Layout className="content-layout">
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: "#fff"
                    }}
                >
                    <Route exact path="/" render={() => { return <HomeList /> }} />
                    {hrefArray.map((item, index) => {
                        dataSource = TOTAL_DATA[index]; dataIndex = index;
                        return (
                            <Route key={index} path={item} component={() => <Documents dataSource={dataSource} />} />
                        )
                    })}
                    <Route path={hrefArray} render={() => (<PageFooter dataSource={dataSource} index={dataIndex} />)} />
                </Content>
            </Layout>
        )
    }
}

export default withRouter(index);