import React, { Component } from 'react'
import { Layout, Menu, } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// // eslint-disable-next-line
import { Link } from "react-router-dom";
import "./index.less";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class index extends Component {
    render() {
        return (
            <Sider width={200} className="site-layout-background">
                <div className="personal">
                    <img src={require("../../assets/images/avatar.jpg")} alt="??" />
                </div>
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    defaultOpenKeys={['gojs']}
                >
                    <SubMenu
                        key="gojs"
                        title={<span><UserOutlined />Go JS</span>}
                    >
                        <Menu.Item key="1"><Link to="/gojs-intro">介绍</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/gojs-1">第一节</Link></Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><LaptopOutlined />subnav 2</span>}
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={<span><NotificationOutlined />subnav 3</span>}
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}
