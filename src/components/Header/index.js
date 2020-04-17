//头部Header组件
import React, { Component } from 'react'
import { Layout, } from 'antd';
import { Link, withRouter } from "react-router-dom";
import Menu from "../Menu";
import Breadcrumb from "../Breadcrumb";
import IconFont from "../IconFont";
import "./index.less";

const { Header } = Layout;

class index extends Component {
    state = {
        display: "none"
    }
    // scrollTop() {
    //     window.scrollTo({
    //         left: 0,
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // }
    render() {
        return (
            <Header className="header" id="header">
                <div className="header-content">
                    <div className="logo" title="首页">
                        <Link to="/">
                            <IconFont type="iconpc-dongman" />
                        </Link>
                    </div>
                    <Breadcrumb />
                    <Menu className="menu-horiz" mode="horizontal" />

                    {/* <Route path="/gojs/:id" render={() => (
                        <div className="back-to-top">
                            <img src={require("../../assets/images/top.png")} alt="回到顶部" title="回到顶部" onClick={this.scrollTop} />
                        </div>
                    )} /> */}
                </div>
            </Header>
        )
    }
}

export default withRouter(index);