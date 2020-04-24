import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import './11.less';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'CSS',
    readOnly: true,
};
let code1 = `.container {
    display: grid,
    grid-template-columns: 50px 50px,
}`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>grid 布局(一)</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p className="indent-2">将元素的 display 属性设置为 grid,则其变成一网格容器。</p>
                        <p className="indent-2">CSS grid 的工作原理是将一个 HTML 元素转换成一个带有行和列的网格容器，以便将子元素放置在网格中想要的位置。</p>
                        <h2>grid-template-columns</h2>
                        <p className="indent-2">简单地创建一个网格元素并没有什么用。还需要定义网格的结构。要向网格中添加一些列，可以使用网格容器上的 grid-template-columns 属性，如下所示:</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-1">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <p className="indent-2">网格将有两列，每列 50px 宽。grid-template-columns 属性的参数数数量表示网格中的列数，每个参数的值表示每个列的宽度。</p>
                        <h2>grid-template-rows</h2>
                        <p className="indent-2">与 grid-template-clolumns 相似,grid-template-rows 用来设置行信息。参数数量表示行数，每个参数的值表示每个行的高度。</p>
                        <h2>使用网格单元改变行列大小</h2>
                        <p className="indent-2">你可以在网格中使用绝对和相对单位，如 px 和 em 来定义行和列的大小。你也可以使用这些:</p>
                        <ul className="indent-2">
                            <li>fr</li>
                            <p>将列或行设置为可用空间的一部分，</p>
                            <li>auto</li>
                            <p>将列或行自动设置为其内容的宽度或高度。</p>
                            <li>%</li>
                            <p>将列或行调整为其容器的宽度百分比。</p>
                        </ul>
                        <CodeMirror value={`grid-template-columns: auto 50px 10% 2fr 1fr;`} options={codeMirrorOptions} />
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-2">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <p className="indent-2">这个代码段创建了 5 个列。第一列和内容一样宽，第二列是 50px，第三列是容器宽度的 10%，最后两列将剩余的空间分为三个部分，其中两个分配给第四列，一个分配给第五列。</p>
                        <h2>grid-column-gap</h2>
                        <p className="indent-2">为列增加间距。</p>
                        <CodeMirror value={`grid-column-gap: 10px;`} options={codeMirrorOptions} />
                        <p className="indent-2">这将在所有列之间创建 10px 的空白空间。</p>
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-3">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>grid-row-gap</h2>
                        <p className="indent-2">同样的,该属性为行增加间距。</p>
                        <h2>grid-gap</h2>
                        <p className="indent-2">grid-gap 是 grid-row-gap 和 grid-column-gap 的简写属性。如果 grid-gap 只有一个值，它将在所有行和列之间创建间距。但是，如果有两个值，它将使用第一个值设置行距、第二个值设置列距。</p>
                        <CodeMirror value={`grid-gap: 10px 20px;`} options={codeMirrorOptions} />
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-4">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>grid-column</h2>
                        <p className="indent-2">创建网格的水平和垂直线称为线。这些线从网格左上角的 1 开始编号，对于列向右移动，对于行向下移动，向上计数。</p>
                        <p className="indent-2">这是 3 * 3 网格的线条:</p>
                        <div style={{ position: "relative", margin: "auto", background: "Gainsboro", display: "block", marginTop: 100, marginBottom: 50, width: 200, height: 200 }}>
                            <p style={{ left: "25%", top: "-30%", fontSize: "130%", position: "absolute", color: "RoyalBlue" }}>column lines</p>
                            <p style={{ left: "0%", top: "-15%", fontSize: "130%", position: "absolute", color: "RoyalBlue" }}>1</p>
                            <p style={{ left: "30%", top: "-15%", fontSize: "130%", position: "absolute", color: "RoyalBlue" }}>2</p>
                            <p style={{ left: "63%", top: "-15%", fontSize: "130%", position: "absolute", color: "RoyalBlue" }}>3</p>
                            <p style={{ left: "95%", top: "-15%", fontSize: "130%", position: "absolute", color: "RoyalBlue" }}>4</p>
                            <p style={{ left: "-40%", top: "45%", fontSize: "130%", transform: "rotateZ(-90deg)", position: "absolute" }}>row lines</p>
                            <p style={{ left: "-10%", top: "-10%", fontSize: "130%", position: "absolute" }}> 1</p>
                            <p style={{ left: "-10%", top: "21%", fontSize: "130%", position: "absolute" }}> 2</p>
                            <p style={{ left: "-10%", top: "53%", fontSize: "130%", position: "absolute" }}> 3</p>
                            <p style={{ left: "-10%", top: "85%", fontSize: "130%", position: "absolute" }}> 4</p>
                            <div style={{ left: "0%", top: "0%", width: "5%", height: "100%", background: "RoyalBlue", position: "absolute" }}></div>
                            <div style={{ left: "31%", top: "0%", width: "5%", height: "100%", background: "RoyalBlue", position: "absolute" }}></div>
                            <div style={{ left: "63%", top: "0%", width: "5%", height: "100%", background: "RoyalBlue", position: "absolute" }}></div>
                            <div style={{ left: "95%", top: "0%", width: "5%", height: "100%", background: "RoyalBlue", position: "absolute" }}></div>
                            <div style={{ left: "0%", top: "0%", width: "100%", height: "5%", background: "black", position: "absolute" }}></div>
                            <div style={{ left: "0%", top: "31%", width: "100%", height: "5%", background: "black", position: "absolute" }}></div>
                            <div style={{ left: "0%", top: "63%", width: "100%", height: "5%", background: "black", position: "absolute" }}></div>
                            <div style={{ left: "0%", top: "95%", width: "100%", height: "5%", background: "black", position: "absolute" }}></div>
                        </div>
                        <p className="indent-2">要控制单元所占列的数量，可以将 grid-column 属性设置为如下形式：</p>
                        <CodeMirror value={`grid-column: 2 / 4;`} options={codeMirrorOptions} />
                        <p className="indent-2">2 为起始列号,4 为终止列号。现在给 “5” 设置此属性</p>
                        <p className="indent-2">结果如下:</p>
                        <div className="grid-container grid-container-5">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>grid-row</h2>
                        <p className="indent-2">grid-row 控制单元所占行数,用法与 grid-column 一致。</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
