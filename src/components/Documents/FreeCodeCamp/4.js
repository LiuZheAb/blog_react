import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'CSS',
    readOnly: true,
};
let code1 = `transform: skew(0);`;
let code2 = `transform: skew(15deg, 15deg);`;
let code3 = `transform: skew(-0.06turn, 18deg);`;
let code4 = `transform: skew(.312rad);`;
let code5 = `<div>Normal</div>
<div class="skewed">Skewed</div>`;
let code6 = `div {
    width: 80px;
    height: 80px;
    background-color: skyblue;
}

.skewed {
    transform: skew(10deg); /* Equal to skewX(10deg) */
    background-color: pink;
}`
let code7 = `<div>Normal</div>
<div class="skewed">Skewed</div>`;
let code8 = `div {
    width: 80px;
    height: 80px;
    background-color: skyblue;
}
  
.skewed {
    transform: skew(10deg, 10deg);
    background-color: pink;
}`;
export default class index extends Component {
    state = {
        style: { maxWidth: 300, transition: "transform 0.3s", transform: "skew(15deg, 15deg)" }
    }
    selectCode(index) {
        let style = { ...this.state.style };
        style.transform = index === 0 ? "skew(0)"
            : index === 1 ? "skew(15deg, 15deg)"
                : index === 2 ? "skew(-0.06turn, 18deg)"
                    : index === 3 ? "skew(.312rad)"
                        : "";
        this.setState({
            style
        });
        let codeBox = document.getElementsByClassName("code-box");
        for (let i = 0, len = codeBox.length; i < len; i++) {
            if (index === i) {
                codeBox[index].className = "code-box code-box-active";
            } else {
                codeBox[i].className = "code-box";
            }
        }
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>skew()</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p>{`skew() 函数定义了一个元素在二维平面上的倾斜转换。它的结果是一个<transform-function> 数据类型`}</p>
                        <h2>示例</h2>
                        <p>点击下面的代码块查看预览</p>
                        <div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 0)}></div>
                                <CodeMirror value={code1} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box code-box-active">
                                <div className="mask" onClick={this.selectCode.bind(this, 1)}></div>
                                <CodeMirror value={code2} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 2)}></div>
                                <CodeMirror value={code3} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 3)}></div>
                                <CodeMirror value={code4} options={codeMirrorOptions} />
                            </div>
                        </div>
                        <div className="text-center" style={{ margin: "50px 0" }}>
                            <img src={require("../../../assets/images/freecodecamp.png")} alt="" style={this.state.style}></img>
                        </div>
                        <p>这种转换是一种剪切映射(横切)，它在水平和垂直方向上将单元内的每个点扭曲一定的角度。每个点的坐标根据指定的角度以及到原点的距离，进行成比例的值调整；因此，一个点离原点越远，其增加的值就越大。</p>
                        <h2>语法</h2>
                        <p>skew() 函数指定一个或两个参数，它们表示在每个方向上应用的倾斜量。</p>
                        <ul>
                            <li>skew(ax)</li>
                            <li>skew(ax, ay)</li>
                        </ul>
                        <h3>参数值</h3>
                        <ul>
                            <li>ax</li>
                            <p>{`ax 是一个 <angle>，表示用于沿横坐标扭曲元素的角度。`}</p>
                            <li>ay</li>
                            <p>{`ay 是一个 <angle> ，表示用于沿纵坐标扭曲元素的角度。如果未定义，则其默认值为 0，导致纯水平倾斜。`}</p>
                        </ul>
                        <h2>示例</h2>
                        <h3>使用单个参数</h3>
                        <b><p>HTML</p></b>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: 'monokai',
                                mode: 'HTML',
                                readOnly: true,
                            }} />
                        <b><p>CSS</p></b>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                        <b><p>结果</p></b>
                        <div style={{ padding: 20, border: "1px solid #000", width: "100%", maxWidth: 300, margin: "0 auto" }}>
                            <div style={{ width: 80, height: 80, backgroundColor: "skyblue" }}>Normal</div>
                            <div style={{ width: 80, height: 80, backgroundColor: "pink", transform: "skew(10deg)" }}>Skewed</div>
                        </div>
                        <h3>使用两个参数</h3>
                        <b><p>HTML</p></b>
                        <CodeMirror
                            value={code7}
                            options={{
                                theme: 'monokai',
                                mode: 'HTML',
                                readOnly: true,
                            }} />
                        <b><p>CSS</p></b>
                        <CodeMirror value={code8} options={codeMirrorOptions} />
                        <b><p>结果</p></b>
                        <div style={{ padding: 20, border: "1px solid #000", width: "100%", maxWidth: 300, margin: "0 auto" }}>
                            <div style={{ width: 80, height: 80, backgroundColor: "skyblue" }}>Normal</div>
                            <div style={{ width: 80, height: 80, backgroundColor: "pink", transform: "skew(10deg,10deg)" }}>Skewed</div>
                        </div>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
