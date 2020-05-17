import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import { ResizableBox } from 'react-resizable';
import './11.less';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'CSS',
    readOnly: true,
};
let code1 = `grid-template-areas:
    "header header header"
    "advert content content"
    "footer footer footer";`;
let code2 = `.container {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 10px;
}`;
export default class index extends Component {
    state = {
        style: { maxWidth: 300, filter: "hue-rotate(90deg)" }
    }
    selectCode(index) {
        let style = { ...this.state.style };
        style.filter = index === 0 ? `url("../../media/examples/shadow.svg#element-id")`
            : index === 1 ? "blur(5px)"
                : index === 2 ? "contrast(200%)"
                    : index === 3 ? "grayscale(80%)"
                        : index === 4 ? "hue-rotate(90deg)" :
                            "drop-shadow(16px 16px 20px red) invert(75%)";
        this.setState({
            style
        });
        let codeBox = document.getElementsByClassName("code-box");
        for (let i = 0; i < codeBox.length; i++) {
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
                        <h1>filter</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p>filter CSS 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染。</p>
                        <p>CSS标准里包含了一些已实现预定义效果的函数。你也可以参考一个SVG滤镜，通过一个URL链接到SVG滤镜元素(<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank" rel="noopener noreferrer">SVG filter element</a>)。</p>
                        <h2>示例</h2>
                        <p>点击下面的代码块查看预览</p>
                        <div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 0)}></div>
                                <CodeMirror value={`filter: url("../../media/examples/shadow.svg#element-id");`} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 1)}></div>
                                <CodeMirror value={`filter: blur(5px);`} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 2)}></div>
                                <CodeMirror value={`filter: contrast(200%);`} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 3)}></div>
                                <CodeMirror value={`filter: grayscale(80%);`} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box code-box-active">
                                <div className="mask" onClick={this.selectCode.bind(this, 4)}></div>
                                <CodeMirror value={`filter: hue-rotate(90deg);`} options={codeMirrorOptions} />
                            </div>
                            <div className="code-box">
                                <div className="mask" onClick={this.selectCode.bind(this, 5)}></div>
                                <CodeMirror value={`filter: drop-shadow(16px 16px 20px red) invert(75%);`} options={codeMirrorOptions} />
                            </div>
                        </div>
                        <div className="text-center" style={{ margin: "50px 0" }}>
                            <img src={require("../../../assets/images/freecodecamp.png")} alt="" style={this.state.style}></img>
                        </div>
                    </div>
                    
                </div>
                <Directory />
            </div>
        )
    }
}
