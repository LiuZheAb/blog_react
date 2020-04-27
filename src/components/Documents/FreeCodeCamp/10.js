import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let code1 = `<div tabindex="1">I get keyboard focus, and I get it first!</div>
<div tabindex="2">I get keyboard focus, and I get it second!</div>`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>使用tabindex</h1>
                    </div>
                    <div className="article-content">
                        <p>HTML tabindex 属性有三个与标签的键盘焦点相关的不同函数。当它位于标签上时，它表示可以将焦点放在该元素上。值(正整数,负整数,或0)决定行为。</p>
                        <p>某些元素，如链接和表单控件，在用户点击Tab键自动接收键盘焦点。它的顺序与HTML源文件中相同。通过在其他元素(如div、span和p)上设置 tabindex="0" 属性，也可以实现相同的功能。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror
                            value={`<div tabindex="0">I need keyboard focus!</div>`}
                            options={{
                                theme: 'monokai',
                                mode: 'HTML',
                                readOnly: true,
                            }} />
                        <p>tabindex 属性指定元素的准确制表顺序。这是在属性值设置为 1 或更高的正数时实现的。</p>
                        <p>设置 tabindex="1" 将首先把键盘焦点移到该元素上。然后它循环遍历指定的 tabindex 值(2,3，等等)的序列，然后移动到default和tabindex="0"项。</p>
                        <p>需要注意的是，当以这种方式设置选项卡顺序时，它会覆盖默认顺序。这可能会让希望从页面顶部开始导航的用户感到困惑。这种技术在某些情况下可能是必要的，但是在可访问性方面，在应用它之前要小心。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'HTML',
                                readOnly: true,
                            }} />
                        <div tabIndex="1">I get keyboard focus, and I get it first!</div>
                        <div tabIndex="2">I get keyboard focus, and I get it second!</div>
                        <em>点击Tab键以查看效果</em>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
