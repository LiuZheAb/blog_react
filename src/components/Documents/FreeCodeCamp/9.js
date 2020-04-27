import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>链接的可访问性</h1>
                    </div>
                    <div className="article-content">
                        <p>屏幕阅读器用户对于他们的设备读取的内容类型有不同的选择。这包括跳转到(或跳过)锚点元素。跳转到主要内容。或者从标题中获取页面摘要。另一种选择是只听页面上可用的链接。</p>
                        <p>屏幕阅读器通过阅读链接文本或 a 标签之间的内容来实现这一点。“点击这里”或“阅读更多”链接是没有帮助的。相反，您应该在a标签中使用简短但具有描述性的文本，以便为这些用户提供更多的含义。</p>
                        <p>HTML 提供 accesskey 属性来指定一个快捷键来激活或将焦点转移到一个元素上。这可以使导航对于只有键盘的用户更有效。</p>
                        <p>HTML5 允许在任何元素上使用这个属性，但是当它与交互式元素一起使用时特别有用。这包括链接，按钮和表单控件。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror 
                            value={`<button accesskey="b">Important Button</button>`}
                            options={{
                                theme: 'monokai',
                                mode: 'HTML',
                                readOnly: true,
                            }} />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
