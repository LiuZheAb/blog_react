//文档右侧标题导航
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TOTAL_DATA } from "../../assets/data";
import "./index.less";

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleTree: [],
            scrollTop: null
        }
        this.getArticleTree = this.getArticleTree.bind(this);
    }
    getArticleTree() {
        let childrens = document.getElementsByClassName("article-content")[0].children;
        let articleTree = [];
        for (let i = 0, len = childrens.length; i < len - 1; i++) {
            let nodeName = childrens[i].nodeName;
            if (nodeName === "H2" || nodeName === "H3") {
                childrens[i].id = childrens[i].innerText;
                articleTree.push({
                    name: childrens[i].innerText,
                    tag: childrens[i].nodeName
                });
            }
        }
        this.setState({ articleTree });
    }
    setTitle() {
        let path = this.props.location.pathname;
        const pathSnippets = path.split('/').filter(i => i);
        for (let i = 0, len = TOTAL_DATA.length; i < len; i++) {
            if (pathSnippets[0] === TOTAL_DATA[i].name) {
                document.getElementsByTagName("h1")[0].innerHTML = TOTAL_DATA[i].section.length > 0 ? TOTAL_DATA[i].section[pathSnippets[pathSnippets.length - 1]] : TOTAL_DATA[i].title;
            }
        }
    }
    componentDidMount() {
        //获取文档标题树
        this.getArticleTree();
        this.setTitle();
        //页面滚动到文档末尾时，将directory逐渐向上隐藏
        let header = document.getElementById("header");
        let before = window.scrollY;
        let directory = document.getElementsByClassName("directory-list")[0];
        //offsetTop为页面加载时directory距顶端的距离
        let offsetTop = directory.offsetTop;
        window.addEventListener('scroll', this.bindHandleScroll);
        window.onscroll = function () {
            let footer = document.getElementsByClassName("page-footer")[0], H = 0;
            while (footer) {
                //H为footer距顶端的距离
                H += footer.offsetTop;
                footer = footer.offsetParent;
            }
            let s = document.body.scrollTop || document.documentElement.scrollTop;
            //s为当前滚动距离加offsetTop加directory高度,即directory底端距顶部的距离
            s = s + (offsetTop + directory.offsetHeight);
            //当s超出H时,directory向上收起
            if (s > H + header.offsetHeight) {
                directory.style = `position:fixed;top:${offsetTop - s + H}px;transition:none`;
            } else {
                // 在s<=H时,若向下滚动时,滚动距离超过header高度将header收起;向上滚动则将header显示,并且directory随header平移
                let after = window.scrollY;
                if (after > header.offsetHeight) {
                    if (before < after) {
                        header.className = "ant-layout-header header header-affixed";
                        directory.className = "directory-list directory-affixed"
                        before = after;
                    };
                    if (before > after) {
                        header.className = "ant-layout-header header header-visible";
                        directory.className = "directory-list"
                        before = after;
                    };
                }
                directory.style = "";
            }
        }
    }
    //获取滚动条滚动的高度
    bindHandleScroll = (event) => {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        this.setState({ scrollTop });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    //点击directory跳转到锚点
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        }
    }
    render() {
        let { articleTree, scrollTop } = this.state;
        let length = articleTree.length;
        if (document.getElementById(`tree-num-0`) && length > 0) {
            let array = [];
            //array内为所有锚点的offsetTop,从小到大排列
            for (let i = 0; i < length; i++) {
                let targetObj = document.getElementById(articleTree[i].name);
                array.push(targetObj.offsetTop);
            }
            //targetIndex为array中第一个大于当前滚动距离的值的index,通过offsetTop判断当前滚动到哪个锚点,并改变对应的标题导航样式。
            let targetIndex = array.findIndex(n => n > scrollTop) - 1;
            for (let i = 0; i < length; i++) {
                i === targetIndex ? document.getElementById(`tree-num-${i}`).className = "tree-num directory-item-active" : document.getElementById(`tree-num-${i}`).className = "tree-num";
            }
            //当滚动距离超过最后一个锚点时,array中找不到,返回-1
            if (targetIndex === -2) {
                document.getElementById(`tree-num-${length - 1}`).className = "tree-num directory-item-active";
            }
        }
        return (
            <div className="directory">
                <ul className="directory-list">
                    {articleTree.map((key, index) =>
                        <li key={index} id={`tree-num-${index}`} className="tree-num" title={key.name} style={{ paddingLeft: key.tag === "H2" ? 10 : 22 }} onClick={() => { this.scrollToAnchor(`${key.name}`) }}>{key.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default withRouter(index);