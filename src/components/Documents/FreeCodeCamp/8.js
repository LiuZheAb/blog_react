import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let code1 = `.sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
 }`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>css 的可访问性</h1>
                    </div>
                    <div className="article-content">
                        <h2>只在屏幕阅读器显示</h2>
                        <p className="indent-2">当您想要在视觉上隐藏只对屏幕阅读器有意义的内容时,CSS 也可以提高页面的可访问性。当信息以可视格式(如图表)显示时，就会发生这种情况。但是，屏幕阅读器用户需要另一种表示(如表格)来访问数据。CSS用于将只在屏幕阅读器显示的元素置于浏览器窗口的可视区域之外。</p>
                        <p className="indent-2">下面是一个 CSS 规则的例子:</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <h2>对比度</h2>
                        <p className="indent-2">前景和背景颜色之间的低对比度会使文本难以阅读。足够的对比可以提高内容的可读性，但是“足够”到底是什么意思呢?</p>
                        <p className="indent-2">Web 内容可访问性指南(Web Content Accessibility Guidelines)建议正常文本的对比度至少为 4.5:1。这个比率是通过比较两种颜色的相对亮度值计算出来的。这个范围从相同颜色或没有对比的 1:1，到白色对黑色的 21:1，这是最强烈的对比。网上有很多对比检查工具可以帮你计算这个比率。</p>
                        <h2>避免色盲</h2>
                        <p className="indent-2">色彩是视觉设计的重要组成部分，但它的使用带来了两个可访问性问题。第一,不应该使用颜色作为传达重要信息的唯一方式，因为屏幕阅读器用户不会看到它。第二。前景色和背景色需要足够的对比度，这样色盲用户才能区分它们。</p>
                        <p className="indent-2">色盲用户在区分某些颜色方面有困难——通常是在色调方面，但有时在亮度方面也有困难，你可能会想起，对比度是使用前景和背景颜色的相对亮度(或亮度)值计算出来的。</p>
                        <p className="indent-2">在实践中，4.5:1 的对比度可以通过增加深色的底纹(增加黑色)和增加浅色的底色(增加白色)来达到。色盘上较深的阴影被认为是 blue、violet、magenta 和 red 的阴影，而较浅的颜色是 orange、yellow、green 和 blue-green。</p>
                        <p className="indent-2">色盲有多种形式。从对特定波长的光的敏感度降低到根本看不见颜色。最常见的形式是通过灵敏度来检测绿色。</p>
                        <p className="indent-2">例如，如果两个相似的绿色是内容的前景和背景颜色。色盲用户可能无法区分它们。相近的颜色可以被认为是色轮上的邻居，在传达重要信息时应该避免这些组合。</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
