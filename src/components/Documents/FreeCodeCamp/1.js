import React, { Component } from 'react';
import Directory from "../../Directory";
import IconFont from "../../IconFont";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/3024-day.css';

let code1 = `:root {
--main-bg-color: pink;
}

body {
background-color: var(--main-bg-color);
}`;
let code2 = `/* 后备值 */

/* 在父元素样式中 */
.component {
  --text-color: #080; /* header-color 并没有被设定 */
}

/* 在 component 的样式中： */
.component .header {
  color: var(--header-color, blue); /* 此处 color 被回退到 blue */
}

.component .text {
  color: var(--text-color, black);
}`;
export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>var()</h1>
                    </div>
                    <div className="article-content">
                        <div className="tip">
                            <p className="tip-title">
                                <IconFont type="iconshiyan" className="tip-icon" />这是一个实验中的功能
                            </p>
                            <div className="tip-content">
                                此功能某些浏览器尚在开发中，请参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/var#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7" target="_blank" rel="noopener noreferrer">浏览器兼容性表格</a>以得到在不同浏览器中适合使用的前缀。由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。
                            </div>
                        </div>
                        <h2>概述</h2>
                        <p className="indent-2">var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）</p>
                        <h2>语法</h2>
                        <p className="indent-2">方法的第一个参数是要替换的自定义属性的名称。函数的可选第二个参数用作回退值。如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。</p>
                        <p className="indent-2"><code>{`var( <custom-property-name> , <declaration-value>? )`}</code></p>
                        <ul>
                            <li>{`<custom-property-name> 自定义属性名`}</li>
                            <p>在实际应用中它被定义为以两个破折号开始的任何有效标识符。 自定义属性仅供作者和用户使用; CSS 将永远不会给他们超出这里表达的意义。</p>
                            <li>{`<declaration-value> 声明值（后备值）`}</li>
                            <p>回退值被用来在自定义属性值无效的情况下保证函数有值。回退值可以包含任何字符，但是部分有特殊含义的字符除外，例如换行符、不匹配的右括号（如)、]或}）、感叹号以及顶层分号（不被任何非var()的括号包裹的分号，例如var(--bg-color, --bs;color)是不合法的，而var(--bg-color, --value(bs;color))是合法的）。</p>
                        </ul>
                        <h2>示例</h2>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <br />
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />

                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
