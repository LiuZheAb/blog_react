import React, { Component } from 'react'
import { Layout, 
    // Menu 
} from 'antd';
import "./index.less";

const { Header } = Layout;

export default class index extends Component {
    render() {
        return (
            <Header className="header">
                <div className="header-content">
                    <div className="logo" />
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu> */}
                </div>
            </Header>
        )
    }
}
