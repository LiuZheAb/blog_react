import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

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
                        <h1>React-router Warning</h1>
                    </div>
                    <div className="article-content">
                        <h2>问题</h2>
                        <p className="indent-2" style={{ color: "#ce1126", fontSize: "18px", fontWeight: 600 }}>Warning: Failed prop type: Invalid prop 'component' supplied to 'Route': the prop is not a valid React component</p>
                        <h2>问题背景</h2>
                        <p className="indent-2">2020-04-17晚</p>
                        <p className="indent-2">将文档入口文件的路由配置改为map遍历后,引入文档目录组件遇到此问题</p>
                        <h2>问题描述</h2>
                        <p className="indent-2">未解决前代码如下</p>
                        <CodeMirror
                            value={`<Route exact path={gojsData.baseHref} component={<Catalog dataSource={gojsData} />} />`}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
                                readOnly: true,
                                lineNumbers: true,
                            }}
                        />
                        <p className="indent-2">问题翻译如下</p>
                        <p className="indent-2">警告：失败的属性类型：提供给“route”的“object”类型的“component”无效，应为“function”</p>
                        <h2>解决方案</h2>
                        <p className="indent-2">就是需要通过函数返回而不是对象。所以要写成函数的形式。</p>
                        <p className="indent-2">写法如下</p>
                        <CodeMirror
                            value={`<Route exact path={gojsData.baseHref} render={() => <Catalog dataSource={gojsData} />} />`}
                            options={{
                                theme: 'monokai',
                                mode: 'JSX',
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
