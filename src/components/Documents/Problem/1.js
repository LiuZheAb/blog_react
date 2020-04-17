import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/3024-day.css';

let code1 = `function test(a){
    let b={...a};
    
    b.c={}   // ok
 }`;

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTree: []
        };
        this.getArticleTree = this.getArticleTree.bind(this);
    }
    getArticleTree() {
        let childrens = document.getElementsByClassName("article-content")[0].children;
        let articleTree = [];
        for (let i = 0; i < childrens.length - 1; i++) {
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
    componentDidMount() {
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>无法设置对象属性</h1>
                    </div>
                    <div className="article-content">
                        <h2>问题</h2>
                        <p className="indent-2" style={{ color: "#ce1126", fontSize: "18px", fontWeight: 600 }}>Cannot add property x, object is not extensible</p>
                        <h2>问题背景</h2>
                        <p className="indent-2">2020-04-16晚</p>
                        <p className="indent-2">在整理FreeCodeCamp——css篇linear-gradient()时遇到此问题</p>
                        <h2>问题描述</h2>
                        <p className="indent-2">无法设置或修改对象的属性</p>
                        <h2>解决方案</h2>
                        <p className="indent-2">参考地址<a href="http://www.fed123.com/pwa/5501.html" target="_blank" rel="noopener noreferrer">http://www.fed123.com/pwa/5501.html</a></p>
                        <p className="indent-2">使用扩展运算符(...)</p>
                        <p className="indent-2">写法如下</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: '3024-day',
                                mode: 'JS',
                                readOnly: true,
                                lineNumbers: true,
                            }}
                        />
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
