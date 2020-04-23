import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import './11.less';

let code1 = `grid-template-areas:
    "header header header"
    "advert content content"
    "footer footer footer";`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>grid 布局(二)</h1>
                    </div>
                    <div className="article-content">
                        <h2>justify-self</h2>
                        <p className="indent-2">在 CSS 网格中，每个项的内容都位于一个称为单元格的框中。可以使用网格项上的 justify-self 设置内容在单元格中水平方向上的对齐方式。默认情况下，此属性的值为 stretch，它将使内容填充整个单元格的宽度。这个 CSS 网格属性也接受其他值:</p>
                        <ul className="indent-2">
                            <li>start</li>
                            <p>内容对齐单元格左侧</p>
                            <li>center</li>
                            <p>内容对齐单元格中间</p>
                            <li>end</li>
                            <p>内容对齐单元格右侧</p>
                        </ul>
                        <p className="indent-2">将 "2" 设置为 justify-self:center;</p>
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-6">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>align-self</h2>
                        <p className="indent-2">此属性设置内容在单元格中垂直方向上的对齐方式。</p>
                        <p className="indent-2">将 "3" 设置为 align-self:end;</p>
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-7">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <div className="tip" style={{ margin: "10px 0" }}>
                            <div className="tip-content">
                                经实践,网格容器须设置 height 或 min-height 属性,其子项的 align-self 属性方可生效。
                            </div>
                        </div>
                        <h2>justify-items</h2>
                        <p className="indent-2">有时，你可能希望 CSS 网格中的所有项都具有相同的对齐方式。可以使用网格容器的 justify-items 属性将同时设置它们水平方向上的对齐方式。</p>
                        <CodeMirror
                            value={`justify-items:center;`}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-8">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>align-items</h2>
                        <p className="indent-2">此属性将同时设置所有项垂直方向上的对齐方式。</p>
                        <CodeMirror
                            value={`align-items:end;`}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-9">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>grid-template-areas</h2>
                        <p className="indent-2">您可以将网格的单元格分组到一个区域中，并为该区域提供自定义名称。通过在容器上使用 rid-template-areas 属性来做到这一点。</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">上面的代码将前三个单元合并到一个名为 header 的区域中。底部三个单元格组成一个 footer 区域，并在中间一行中创建两个区域:advert 和 content。注意:代码中的每个单词表示一个单元格，每一对引号表示一行。除了自定义标签之外，还可以使用句点(.)来指定网格中的空单元格。</p>
                        <h2>grid-area</h2>
                        <p className="indent-2">在为网格容器创建区域模板之后，可以通过引用指定的名称将项放置到自定义区域中。为此，要对这样的项使用 grid-area 属性</p>
                        <CodeMirror
                            value={`grid-area: footer;`}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">这让网格知道希望该项位于名为 footer 的区域中。</p>
                        <p className="indent-2">为 “5” 设置此属性</p>
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-10">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <p className="indent-2">如果网格没有一个区域模板来参考，你可以创建一个区域，让一个项目像这样放置:</p>
                        <CodeMirror
                            value={`grid-area: 3/1/4/4;`}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">上面例子中的数字是 gird 布局(一)中提到的行号，其代表了下面的值：</p>
                        <CodeMirror
                            value={`grid-area: 水平起始行号 / 垂直起始列号 / 水平终止行号 / 垂直终止列号;`}
                            options={{
                                theme: 'monokai',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">因此，该项将使用第3和第4行之间的行，以及第1和第4列之间的列。</p>
                        <p className="indent-2">为 “5” 设置此属性</p>
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-11">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
