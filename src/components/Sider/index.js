//侧边栏sider
import React, { Component } from 'react'
import { Layout } from 'antd';
import Menu from "../Menu";
import IconFont from "../IconFont";
import "./index.less";

const { Sider } = Layout;

export default class index extends Component {
    componentDidMount() {
        //页面向上滚动时将sider固定
        let Div = document.getElementById("sider-content"),
            H = 0,
            Y = Div;
        while (Y) {
            H += Y.offsetTop;
            Y = Y.offsetParent;
        }
        window.addEventListener('scroll', function (e) {
            var s = document.body.scrollTop || document.documentElement.scrollTop;
            if (s > H) {
                Div.style = "position:fixed;top:0;";
            } else {
                Div.style = "";
            }
        })
    }
    render() {
        return (
            <Sider width={240} className="site-layout-background" id="sider">
                <div id="sider-content">
                    <div className="personal">
                        <div className="block">
                            <img src={require("../../assets/images/avatar.jpg")} alt="avatar" />
                        </div>
                        <p className="author">LiuZheAb</p>
                        <div>FED</div>
                        <a className="email" href="mailto:liu748951@163.com">liu748951@163.com</a>
                        <div className="othersites">
                            <a target="_blank" rel="noopener noreferrer" href="https://music.163.com/#/playlist?id=117824494" title="网易云音乐"><IconFont type="iconwyy" /></a>
                            <a target="_blank" style={{ fontSize: 34, color: "#000" }} rel="noopener noreferrer" href="https://github.com/LiuZheAb/" title="Github"><IconFont type="icongithub" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.yuque.com/liuzheab" title="语雀"><IconFont type="iconyuquemianlogo" /></a>
                        </div>
                        <div>爱编程。爱音乐</div>
                    </div>
                    <Menu mode="vertical" />
                </div>
            </Sider >
        )
    }
}
