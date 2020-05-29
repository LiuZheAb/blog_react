//首页文档列表
import React, { Component } from 'react';
import { List } from 'antd';
import { Link } from "react-router-dom";
import { TOTAL_DATA } from "../../assets/data";
import IconFont from "../IconFont"
import "./index.less";

export default class index extends Component {
    render() {
        return (
            <div className="home-list">
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={TOTAL_DATA}
                    renderItem={item => (
                        <List.Item
                            className="list-item"
                            extra={
                                <Link to={item.baseHref}>
                                    <div className="box">
                                        <img src={require("../../assets/images/" + item.img)} alt={item.title} />
                                        <div className="box-content">
                                            <span className="title">点击进入</span>
                                        </div>
                                    </div >
                                </Link>
                            }
                        >
                            <Link to={item.baseHref}>
                                <List.Item.Meta
                                    title={item.title}
                                    description={item.description}
                                />
                                <p style={{ textIndent: "2em", color: "rgba(0, 0, 0, 0.65)" }}>{item.content}</p>
                            </Link>
                        </List.Item>
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
