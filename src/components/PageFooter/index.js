//文档底部footer
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import IconFont from "../IconFont";
import { WeiboShareButton } from "react-share";
import QRCode from "qrcode.react";
import setKeyMap from "../../utils/keymap";
import { totalData } from "../../assets/data";
import "./index.less";

class index extends Component {
    //获取数组中count个随机值
    getRandomArrayElements = (arr, count) => {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    //查看当前文档在哪个chapter，返回“chapter名”+“——”
    check = (num, obj) => {
        for (let key in obj) {
            if (obj[key].indexOf(num) > -1 && obj[key].length > 1) {
                return key + "——"
            }
        }
    }
    render() {
        let path = this.props.location.pathname;
        //将path以"/"分割,并保存到数组中
        const pathSnippets = path.split('/').filter(i => i);
        //获取当前文档及推荐文档数据
        let dataSource = [], recommandData = [];
        for (let i = 0; i < totalData.length; i++) {
            if (pathSnippets[0] === totalData[i].baseHref.substr(1)) {
                dataSource = totalData[i];
                for (let j = 0; j < totalData.length; j++) {
                    if (j !== i) {
                        recommandData.push({
                            title: totalData[j].title,
                            baseHref: totalData[j].baseHref,
                        })
                    }
                }
            }
        }
        const nameMap = setKeyMap([dataSource]);
        //查找当前文档所处section
        let pageArray = [];
        for (let key in dataSource.chapter) {
            pageArray = pageArray.concat(dataSource.chapter[key])
        }
        let pageNum = Number(pathSnippets[1]), baseHref = "/" + pathSnippets[0] + "/";
        let currentIndex = pageArray.indexOf(pageNum), prevIndex = currentIndex - 1, nextIndex = currentIndex + 1;
        //上一页/下一页路由
        let prevHref = baseHref + pageArray[prevIndex];
        let nextHref = baseHref + pageArray[nextIndex];
        return (
            <div className="page-footer" style={!isNaN(pageNum) ? { minHeight: "100vh" } : {}}>
                <div>
                    <div className="share">
                        <div>
                            <div className="wx-icon" style={{ position: "relative" }}>
                                <IconFont type="iconweixin1" title="微信" style={{ fontSize: 32, cursor: "pointer" }} />
                                <div className="qrcode" >
                                    <div className="arrow"></div>
                                    <div className="inner">微信扫码阅读文档<QRCode value={window.location.href} /></div>
                                </div>
                            </div>
                            <WeiboShareButton style={{ marginLeft: 24, outline: "none" }} url={window.location.href} title={dataSource.title + "——" + nameMap[this.props.location.pathname]} ><IconFont type="iconweibo1" title="微博" style={{ fontSize: 32 }} /></WeiboShareButton>
                        </div>
                    如果觉得这篇文章有帮助的话,就分享一下吧,谢谢~
                </div>
                    {!isNaN(pageNum) ?
                        <div className="content">
                            <div className="prev">
                                {nameMap[prevHref] ?
                                    <Link to={prevHref} className="pager">
                                        <div className="label">上一篇</div>
                                        <span className="title">{this.check(prevIndex, dataSource.chapter)}{nameMap[prevHref]}</span>
                                    </Link>
                                    : null}
                            </div>
                            <div className="next">
                                {nameMap[nextHref] ?
                                    <Link to={nextHref} className="pager">
                                        <div className="label">下一篇</div>
                                        <span className="title">{this.check(nextIndex, dataSource.chapter)}{nameMap[nextHref]}</span>
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
                        {this.getRandomArrayElements(recommandData, 2).map((item, index) => {
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