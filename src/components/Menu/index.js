//菜单
import React, { Component } from 'react'
import { Menu, } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { totalData } from "../../assets/data";
import IconFont from "../IconFont";
import "./index.less";

const { SubMenu } = Menu;

//将data文件中所有href:title映射到一个对象中,用于检索当前路由对应的title
let keyMapObj = {}
for (let i = 0; i < totalData.length; i++) {
    keyMapObj[totalData[i].baseHref] = totalData[i].title;
    for (let j = 0; j < totalData[i].catalog.length; j++) {
        keyMapObj[totalData[i].catalog[j].href] = totalData[i].title + totalData[i].catalog[j].title
    }
}

//封装分级菜单
const SubMenuTemplate = (dataSource, path, mode) => {
    return (
        <SubMenu
            key={dataSource.title}
            title={<span>{dataSource.title}</span>}
            // onTitleClick={() => { window.location.href = "#" + dataSource.baseHref }}
            style={keyMapObj[path] === dataSource.title ? mode === "vertical" ? { background: "#e6f7ff", color: "#1890ff" } : {
                borderBottom: "2px solid #1890ff", color: "#1890ff"
            } : null}
        >
            {
                Object.keys(dataSource.section).map((item, index) => {
                    let catalog = dataSource.catalog.slice(dataSource.section[item][0], dataSource.section[item][1] + 1)
                    return (
                        catalog.length > 1 ?
                            <SubMenu
                                key={dataSource.title + item}
                                title={<span>{item}</span>}
                            >
                                {catalog.map((item2, index2) => {
                                    return (
                                        <Menu.Item key={dataSource.title + item2.title}><Link to={item2.href}>{item2.title}</Link></Menu.Item>
                                    )
                                })}
                            </SubMenu>
                            :
                            <Menu.Item key={dataSource.title + catalog[0].title}><Link to={catalog[0].href}>{catalog[0].title}</Link></Menu.Item>
                    )
                })
            }
        </SubMenu >
    )
}

class index extends Component {
    render() {
        const path = this.props.location.pathname;
        let { mode } = this.props;
        return (
            <Menu
                className={this.props.className}
                mode={mode}
                theme="light"
                id="menu"
                selectedKeys={keyMapObj[path]}
            >
                {
                    mode === "horizontal" ?
                        <Menu.Item key="logo" className="logo-menu" title="首页" onClick={() => { window.location.href = "#/" }}>
                            <IconFont type="iconpc-dongman" />
                        </Menu.Item>
                        : null
                }
                {totalData.map((item, index) => {
                    return (
                        item.catalog.length > 0 ?
                            SubMenuTemplate(item, path, mode)
                            :
                            <Menu.Item key={item.title}>
                                <Link to={item.baseHref}>{item.title}</Link>
                            </Menu.Item>
                    )
                })}
            </Menu>
        )
    }
}

export default withRouter(index);