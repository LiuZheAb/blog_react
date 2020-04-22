import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let code1 = `function test(a){
    let b={...a};
    
    b.c={}   // ok
 }`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>无法设置对象属性</h1>
                    </div>
                    <div className="article-content">
                        <h2>问题</h2>
                        <p className="indent-2" style={{ color: "#ce1126", fontSize: 18, fontWeight: 600 }}>Cannot add property x, object is not extensible</p>
                        <h2>问题背景</h2>
                        <p className="indent-2">2020-04-16 晚</p>
                        <p className="indent-2">在整理 FreeCodeCamp——css 篇 linear-gradient()时遇到此问题</p>
                        <h2>问题描述</h2>
                        <p className="indent-2">无法设置或修改对象的属性</p>
                        <h2>解决方案</h2>
                        <p className="indent-2">参考地址<a href="http://www.fed123.com/pwa/5501.html" target="_blank" rel="noopener noreferrer">http://www.fed123.com/pwa/5501.html</a></p>
                        <p className="indent-2">使用扩展运算符(...)</p>
                        <p className="indent-2">写法如下</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'JS',
                                readOnly: true,
                                lineNumbers: true,
                            }}
                        />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
