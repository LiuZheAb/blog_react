import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let code1 = `:root {
--main-bg-color: pink;
}

body {
background-color: var(--main-bg-color);
}`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>reduce()</h1>
                    </div>
                    <div className="article-content">
                        <p>reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。</p>
                        {/* <CodeMirror value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }} /> */}

                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
