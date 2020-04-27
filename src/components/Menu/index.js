/*//菜单V1
import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { totalData } from "../../assets/data";
import IconFont from "../IconFont";
import "./index.less";

const { SubMenu } = Menu;

//将data文件中所有href:title映射到一个对象中,用于检索当前路由对应的title
let keyMapObj = {}
for (let i = 0; i < totalData.length; i++) {
    keyMapObj[totalData[i].baseHref] = totalData[i].title;
    for (let j = 0; j < totalData[i].section.length; j++) {
        keyMapObj[totalData[i].baseHref + "/" + j] = totalData[i].title + totalData[i].section[j]
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
                Object.keys(dataSource.chapter).map((chapterName, chapterIndex) => {
                    let section = dataSource.chapter[chapterName];
                    return (
                        section.length > 1 || chapterName !== dataSource.section[section[0]] ?
                            <SubMenu
                                key={dataSource.title + chapterName}
                                title={<span>{chapterName}</span>}
                            >
                                {section.length > 0 ? section.map((sectionIndex, index) => 
                                    <Menu.Item key={dataSource.title + sectionIndex}><Link to={dataSource.baseHref + "/" + (section[index])}>{dataSource.section[sectionIndex]}</Link></Menu.Item>
                                ) : <Menu.Item className="menu-item-nodata"><IconFont type="iconno-data" style={{ fontSize: "40px" }} />暂无数据</Menu.Item>}
                            </SubMenu>
                            :
                            <Menu.Item key={dataSource.title + section[0]}><Link to={dataSource.baseHref + "/" + section[0]}>{dataSource.section[section[0]]}</Link></Menu.Item>
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
                {totalData.map((item, index) => 
                    item.section.length > 0 ?
                        SubMenuTemplate(item, path, mode)
                        :
                        <Menu.Item key={item.title}>
                            <Link to={item.baseHref}>{item.title}</Link>
                        </Menu.Item>
                )}
            </Menu>
        )
    }
}

export default withRouter(index);*/



//菜单V2
import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { totalData } from "../../assets/data";
import IconFont from "../IconFont";
import "./index.less";

//将data文件中所有href:title映射到一个对象中,用于检索当前路由对应的title
let keyMapObj = {}
for (let i = 0; i < totalData.length; i++) {
    keyMapObj[totalData[i].baseHref] = totalData[i].title;
    for (let j = 0; j < totalData[i].section.length; j++) {
        keyMapObj[totalData[i].baseHref + "/" + j] = totalData[i].title + totalData[i].section[j]
    }
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
                {totalData.map((item, index) =>
                    <Menu.Item key={item.title}>
                        <Link to={item.baseHref}>{item.title}</Link>
                    </Menu.Item>
                )}
            </Menu>
        )
    }
}

export default withRouter(index);