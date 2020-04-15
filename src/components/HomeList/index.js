//首页文档列表
import React, { Component } from 'react';
import { List } from 'antd';
import { Link } from "react-router-dom";
import { totalData } from "../../assets/data";
import IconFont from "../IconFont"
import "./index.less";

export default class index extends Component {
    render() {
        let dataSource = [];
        for (let i = 0; i < totalData.length; i++) {
            dataSource.push({
                href: totalData[i].baseHref,
                className: totalData[i].name,
                title: totalData[i].title,
                description: totalData[i].description,
                img: totalData[i].img,
                content: totalData[i].content,
            })
        }
        return (
            <div className="home-list">
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={dataSource}
                    renderItem={item => (
                        <Link to={item.href}>
                            <List.Item
                                className="list-item"
                                key={item.title}
                                extra={
                                    <div className="box">
                                        <img src={require("../../assets/images/" + item.img)} alt={item.title} />
                                        <div className="box-content">
                                            <span className="title">点击进入</span>
                                        </div>
                                    </div >

                                }
                            >
                                <List.Item.Meta
                                    title={item.title}
                                    description={item.description}
                                />
                                <p style={{ textIndent: "2em", color: "rgba(0, 0, 0, 0.65)" }}>{item.content}</p>
                            </List.Item>
                        </ Link>
                    )}
                />
                <div className="footer">
                    <div className="othersites">
                        <span>我的站点：</span>
                        <a target="_blank" rel="noopener noreferrer" href="https://music.163.com/#/playlist?id=117824494" title="网易云音乐"><IconFont type="iconwyy" /></a>
                        <a target="_blank" style={{ fontSize: 34, color: "#000" }} rel="noopener noreferrer" href="https://github.com/LiuZheAb/" title="Github"><IconFont type="icongithub" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.yuque.com/liuzheab" title="语雀"><IconFont type="iconyuquemianlogo" /></a>
                    </div>
                    <div className="author">
                        <div className="author-content">
                            <span>&copy; 2020 Deved By <a target="_blank" rel="noopener noreferrer" href="https://github.com/LiuZheAb/" title="Github">LiuZheAb</a> </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
