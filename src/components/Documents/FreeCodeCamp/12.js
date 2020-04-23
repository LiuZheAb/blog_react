import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import './11.less';

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
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                        <p className="indent-2"></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
