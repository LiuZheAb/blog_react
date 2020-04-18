import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/3024-day.css';

let code1 = `/* 渐变轴为45度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);

/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);

/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);`
let code2 = `background: linear-gradient(#e66465, #9198e5);`;
let code3 = `background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);`;
let code4 = `background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);`;
let code5 = `background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`;
let code6 = `linear-gradient(red, orange, yellow, green, blue); 
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);`;
let code7 = `linear-gradient(red 10%, 30%, blue 90%);`;
let code8 = `linear-gradient(red 40%, yellow 30%, blue 65%);`;
let code9 = `linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);`;
let code10 = `linear-gradient(
    [ <angle> | to <side-or-corner> ,]? <color-stop-list> )
   \\---------------------------------/ \\-------------------/
      Definition of the gradient line        List of color stops  
  
  where <side-or-corner> = [ left | right ] || [ top | bottom ]
    and <color-stop-list> = [ <linear-color-stop> [, <color-hint>? ]? ]#, <linear-color-stop>
    and <linear-color-stop> = <color> [ <color-stop-length> ]?
    and <color-stop-length> = [ <percentage> | <length> ]{1,2}
    and <color-hint> = [ <percentage> | <length> ]`;
let code11 = `background-color: #F07575; /* 不支持渐变的浏览器回退方案 */
background-image: -webkit-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* 支持 Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
background-image:    -moz-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* 支持 Firefox (3.6 to 15) */
background-image:      -o-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* 支持旧 Opera (11.1 to 12.0) */ 
background-image:         linear-gradient(to bottom, hsl(0, 80%, 70%), #bada55); /* 标准语法; 需要最新版本 */`;
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTree: [],
            divStyle: { width: "100%", height: "300px", maxWidth: "300px", margin: "0 auto 8px", background: "linear-gradient(#e66465, #9198e5)" }
        };
    }
    selectCode(index) {
        let divStyle = { ...this.state.divStyle };
        index === 0 ? divStyle.background = "linear-gradient(#e66465, #9198e5)"
            : index === 1 ? divStyle.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
                : index === 2 ? divStyle.background = "linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)"
                    : index === 3 ? divStyle.background = "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)"
                        : divStyle.background = "";
        this.setState({
            divStyle
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
                        <h1>linear-gradient()</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p className="indent-2">{`CSS linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片。其结果属于<gradient>数据类型，是一种特别的<image>数据类型。`}</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <h2>示例</h2>
                        <p>点击下面的代码块查看预览</p>
                        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
                            <div className="code-box code-box-active" onClick={this.selectCode.bind(this, 0)}>
                                <CodeMirror
                                    value={code2}
                                    options={{
                                        theme: '3024-day',
                                        mode: 'CSS',
                                        readOnly: true,
                                    }}
                                />
                            </div>
                            <div className="code-box" onClick={this.selectCode.bind(this, 1)}>
                                <CodeMirror
                                    value={code3}
                                    options={{
                                        theme: '3024-day',
                                        mode: 'CSS',
                                        readOnly: true,
                                    }}
                                />
                            </div>
                            <div className="code-box" onClick={this.selectCode.bind(this, 2)}>
                                <CodeMirror
                                    value={code4}
                                    options={{
                                        theme: '3024-day',
                                        mode: 'CSS',
                                        readOnly: true,
                                    }}
                                />
                            </div>
                            <div className="code-box" onClick={this.selectCode.bind(this, 3)}>
                                <CodeMirror
                                    value={code5}
                                    options={{
                                        theme: '3024-day',
                                        mode: 'CSS',
                                        readOnly: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div style={this.state.divStyle}></div>
                        <p>具有多个颜色停止的渐变</p>
                        <CodeMirror
                            value={`background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);`}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <div style={{ margin: "10px 0", background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)", width: "100%", height: "20px" }}></div>
                        <div className="tip">
                            <div className="tip-content">
                                <p><em>{`由于<gradient>数据类型系<image>的子数据类型，<gradient>只能被用于<image>可以使用的地方。因此，linear-gradient() 并不适用于background-color以及类似的使用 <color>数据类型的属性中。`}</em></p>
                            </div>
                        </div>
                        <h2>线形渐变的构成</h2>
                        <div className="text-center">
                            <img src={require("../../../assets/images/linear-gradient.png")} alt="" style={{ width: 300 }} />
                        </div>
                        <p className="indent-2">线性渐变由一个轴 (梯度线) 定义，其上的每个点具有两种或多种的颜色，且轴上的每个点都具有独立的颜色。为了构建出平滑的渐变，linear-gradient() 函数构建一系列垂直于渐变线的着色线，每一条着色线的颜色则取决于与之垂直相交的渐变线上的色点</p>
                        <p className="indent-2">渐变线由包含渐变图形的容器的中心点和一个角度来定义的。渐变线上的颜色值是由不同的点来定义，包括起始点，终点，以及两者之间的可选的中间点（中间点可以有多个）。</p>
                        <p className="indent-2">起始点是渐变线上代表起始颜色值的点。起始点由渐变线和过容器顶点的垂直线之间的交叉点来定义。（垂直线跟渐变线在同一象限内）。</p>
                        <p className="indent-2">同样的，终点是渐变线上代表最终颜色值的点。终点也是由渐变线和从最近的顶点发出的垂直线之间的交叉点定义的，然而从起始点的对称点来定义终点是更容易理解的一种方式，因为终点是起点关于容器的中心点的反射点。</p>
                        <p className="indent-2">关于起点和终点的稍微有些复杂的定义导致了一个有趣的性质，有时候被叫做不可思议的顶点效应：起点附近的点具有跟起点相同的颜色值，终点附近的点具有跟终点相同的颜色值。</p>
                        <p className="indent-2">不仅仅只有起点和终点的颜色值可以指定。通过提供额外的颜色中间点，Web开发者可以构建在起始颜色值和终点颜色值之间的自定义更强的过渡效果，另外还可以提供多种颜色值的渐变线。</p>
                        <p className="indent-2">{`当颜色中间点的位置被隐式定义，它被放置在位于它之前的点和位于它之后的点之间的中间位置处。利用<length>或者<percentage>数据类型可以显示定义一个位置。`}</p>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">默认情况下，从一个颜色的终止点平滑的过渡到另一个颜色的终止点，颜色之间的中点是两个颜色颜色转换的中点。你可以将中点移动到这两个颜色之间的任意位置，方法是在两个颜色之间添加未标记的 %，以指示颜色的中转位置。下面的示例是从起始点到10%的位置标记红色，从90%到结束标记蓝色。在10%到90%之间，颜色从红色过渡到蓝色，然而过渡的中点是在30%的标记上，而不是在没有30%中转点的情况下会默认为50%。</p>
                        <CodeMirror
                            value={code7}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">如果两个或多个颜色终止在同一位置，则在该位置声明的第一个颜色和最后一个颜色之间的过渡将是一条生硬线。</p>
                        <p className="indent-2">颜色终止列表中颜色的终止点应该是依次递增的。如果后面的颜色终止点小于前面颜色的终止点则后面的会被覆盖，从而创建一个硬转换。下面的变化是从红色到黄色在40%的位置，然后过渡从黄色到蓝色终止于65%的位置处。</p>
                        <CodeMirror
                            value={code8}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">允许颜色多个颜色终止位置。通过在CSS声明中包含两个位置，可以将一个颜色声明为两个相邻的颜色终止。以下三个梯度是相等的:</p>
                        <CodeMirror
                            value={code9}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">默认情况下，如果不带0%终止的颜色，则在该点声明的第一个颜色。类似地，最后一种颜色将持续到100%标记，或者如果在最后一个没有声明长度，则在100%标记处。</p>
                        <h2>语法</h2>
                        <ul>
                            <li>{`<side-or-corner>`}</li>
                            <p>描述渐变线的起始点位置。它包含to和两个关键词：第一个指出水平位置left or right，第二个指出垂直位置top or bottom。关键词的先后顺序无影响，且都是可选的。</p>
                            <p>to top, to bottom, to left 和 to right这些值会被转换成角度0度、180度、270度和90度。其余值会被转换为一个以向顶部中央方向为起点顺时针旋转的角度。渐变线的结束点与其起点中心对称。</p>
                            <li>{`<angle>`}</li>
                            <p>用角度值指定渐变的方向（或角度）。角度顺时针增加。 </p>
                            <li>{`<linear-color-stop>`}</li>
                            <p>{`由一个<color>值组成，并且跟随着一个可选的终点位置（可以是一个百分比值或者是沿着渐变轴的<length>）。CSS渐变的颜色渲染采取了与SVG相同的规则。`}</p>
                            <li>{`<color-hint>`}</li>
                            <p>颜色中转点是一个插值提示，它定义了在相邻颜色之间渐变如何进行。长度定义了在两种颜色之间的哪个点停止渐变颜色应该达到颜色过渡的中点。如果省略，颜色转换的中点是两个颜色停止之间的中点。 </p>
                        </ul>
                        <h3>正式语法</h3>
                        <CodeMirror
                            value={code10}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <h2>使用透明度</h2>
                        <CodeMirror
                            value={`background: linear-gradient(to bottom right, red, rgba(0,0,0,0));`}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <div style={{ margin: "10px 0", background: "linear-gradient(to bottom right, red, rgba(0,0,0,0))", width: "100%", height: "20px" }}></div>
                        <h2>跨浏览器兼容性</h2>
                        <p className="indent-2"></p>
                        <CodeMirror
                            value={code11}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">-moz-前缀的规则用于兼容Fx 3.6 to Fx 15的火狐浏览器。 -webkit-前缀的规则用于兼容在Android 4.3以前版本、iOS 6.1以前版本、Safari 6。当使用带前缀的规则时，不要加“to”关键字。</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
