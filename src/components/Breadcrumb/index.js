//header面包屑组件
import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { myblogData, gojsData, codeReview } from "../../assets/data";
import setKeyMap from "../../utils/keymap";
import "./index.less";

//将所有文档以url:title的形式存储到数组中，用于通过使用url找title
let breadcrumbNameMap = setKeyMap([myblogData, gojsData, codeReview]);

class index extends Component {
    render() {
        //将pathname以"/"分割,并保存到数组中
        const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        
        //pathSnippets中每一项都是一个面包屑
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            );
        });
        return (
            <Breadcrumb>
                {<>
                    <Breadcrumb.Item key="home">
                        <Link to="/">首页</Link>
                    </Breadcrumb.Item>
                    {extraBreadcrumbItems}
                </>}
            </Breadcrumb>
        )
    }
}

export default withRouter(index);