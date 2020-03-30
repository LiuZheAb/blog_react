import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from "../../components/Header";
import Sider from "../../components/Sider";
import HomeContent from "../../components/HomeContent";
import "./index.less";

export default class index extends Component {
    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Header />
                <Layout className="content">
                    <Sider />
                    <HomeContent />
                </Layout>
            </Layout>
        )
    }
}
