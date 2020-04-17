import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/3024-day.css';

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
                        <h1>scale()</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p className="indent-2">CSS 函数 scale() 用于修改元素的大小。可以通过向量形式定义的缩放值来放大或缩小元素，同时可以在不同的方向设置不同的缩放值。</p>
                        <div className="text-center">
                            <img src={require("../../../assets/images/scale.png")} alt="" />
                        </div>
                        <p className="indent-2">该变换通过一个二维向量确定在一个方向缩放的多少。如果缩放向量的两个坐标是相等的，那么所讲是均等的，或者说是各向同的，同时元素的形状是被保持的。这种情况下进行的是位似变换。</p>
                        <p className="indent-2">当坐标值处于区间 [-1, 1] 之外时，该变换将在相应的坐标方向上放大该元素，当处在区间之中时，该变换将在相应的坐标方向上缩小该元素。当值为1时将不进行任何处理，当为负数时，将进行像素点反射之后再进行大小的修改。</p>
                        <div className="tip">
                            <div className="tip-content">
                                scale() 仅适用于在欧几里德平面（二维平面）上的变换。如果需要进行空间中的缩放，必须使用 scale3D() 。
                            </div>
                        </div>

                        <h2>语法</h2>
                        <CodeMirror
                            value={`scale(sx)`}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />

                        <p>或</p>
                        <CodeMirror
                            value={`scale(sx, sy)`}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <h2>值</h2>
                        <ul>
                            <li>sx</li>
                            <p>{`<number>，表示缩放向量的横坐标。`}</p>
                            <li>sy</li>
                            <p>{`<number> ，表示缩放向量的纵坐标。如果未设置，则他的默认值被设置为 sx。 从而使得元素在保持原有形状下均等缩放`}</p>
                        </ul>
                        <h2>示例</h2>
                        <p>HTML</p>
                        <CodeMirror
                            value={`<p>foo</p>
<p class="transformed">bar</p>`}
                            options={{
                                theme: '3024-day',
                                mode: 'HTML',
                                readOnly: true,
                            }}
                        />
                        <p>CSS</p>
                        <CodeMirror
                            value={`p { 
    width: 50px;
    height: 50px;
    background-color: teal;
}

.transformed {
    /* 等同于变换: scaleX(2) scaleY(2);*/
    transform: scale(2);
    background-color: blue;
}`}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p>结果</p>
                        <div style={{ paddingLeft: 24 }}>
                            <p style={{ width: "50px", height: "50px", backgroundColor: "#CCFFFF" }}>foo</p>
                            <p style={{ width: "50px", height: "50px", transform: "scale(2)", backgroundColor: "#FFCCCC" }}>bar</p>
                        </div>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}