//文档底部footer
import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import IconFont from "../IconFont";
import { WeiboShareButton } from "react-share";
import QRCode from "qrcode.react";
import setKeyMap from "../../utils/keymap";
import { myblogData, gojsData, codeReview } from "../../assets/data"
import "./index.less";

class index extends Component {
    render() {
        let path = this.props.location.pathname;
        //将path以"/"分割,并保存到数组中
        const pathSnippets = path.split('/').filter(i => i);
        let dataSource, recommandData;
        switch (pathSnippets[0]) {
            case "myblog":
                dataSource = myblogData;
                recommandData = [{
                    title: "GoJS 教程",
                    baseHref: "/gojs",
                }, {
                    title: "Code Review",
                    baseHref: "/codereview",
                }];
                break;
            case "gojs":
                dataSource = gojsData;
                recommandData = [{
                    title: "本站介绍",
                    baseHref: "/myblog",
                }, {
                    title: "Code Review",
                    baseHref: "/codereview",
                }];
                break;
            case "codereview":
                dataSource = codeReview;
                recommandData = [{
                    title: "本站介绍",
                    baseHref: "/myblog",
                }, {
                    title: "GoJS 教程",
                    baseHref: "/gojs",
                }];
                break;
            default:
                break;
        }
        //获取数组中count个随机值
        function getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        }
        const nameMap = setKeyMap([dataSource]);
        //查找当前文档所处section
        let check = (num, obj) => {
            for (let key in obj) {
                if (num >= obj[key][0] && num <= obj[key][1] && obj[key][0] !== obj[key][1]) return key + "——";
            }
        }

        let pageNum = Number(pathSnippets[1]), baseHref = "/" + pathSnippets[0] + "/";
        //上一页/下一页路由
        let prevHref = baseHref + (pageNum - 1);
        let nextHref = baseHref + (pageNum + 1);
        return (
            <div className="page-footer">
                <div>
                    <div className="share">
                        <div>
                            <div className="wx-icon" style={{ position: "relative" }}>
                                <IconFont type="iconweixin" />
                                <div className="qrcode" >
                                    <div className="arrow"></div>
                                    <div className="inner">微信扫码阅读文档<QRCode value={window.location.href} /></div>
                                </div>
                            </div>
                            <WeiboShareButton style={{ marginLeft: 24 }} url={window.location.href} title={dataSource.title + "——" + nameMap[this.props.location.pathname]} ><IconFont type="iconweibo" style={{ fontSize: 40 }} /></WeiboShareButton>
                        </div>
                    如果觉得这篇文章有帮助的话,就分享一下吧,谢谢~
                </div>
                    {!isNaN(pageNum) ?
                        <div className="content">
                            <div className="prev">
                                {nameMap[prevHref] ?
                                    <Link to={prevHref} className="pager">
                                        <div className="label">上一篇</div>
                                        <span className="title">{check(pageNum - 1, dataSource.section)}{nameMap[prevHref]}</span>
                                    </Link>
                                    : null}
                            </div>
                            <div className="next">
                                {nameMap[nextHref] ?
                                    <Link to={nextHref} className="pager">
                                        <div className="label">下一篇</div>
                                        <span className="title">{check(pageNum + 1, dataSource.section)}{nameMap[nextHref]}</span>
                                    </Link>
                                    : null}
                            </div>

                        </div>
                        : null
                    }
                    <div className="books">
                        <div className="book">
                            <span className="from">本文来自</span>
                            <div className="icon"><IconFont type="iconbook" style={{ fontSize: 40 }} /></div>
                            <div className="name"><h4><Link to={dataSource.baseHref}>{dataSource.title}</Link></h4></div>
                        </div>
                        {getRandomArrayElements(recommandData, 2).map((item, index) => {
                            return (
                                <div className="book" key={index}>
                                    <span className="from">精品推荐</span>
                                    <div className="icon"><IconFont type="iconbook" style={{ fontSize: 40 }} /></div>
                                    <div className="name"><h4><Link to={item.baseHref}>{item.title}</Link></h4></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="connect">
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

export default withRouter(index);