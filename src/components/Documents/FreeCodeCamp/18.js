import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'CSS',
    readOnly: true,
};
let code1 = `/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Global values */
filter: inherit;
filter: initial;
filter: unset;`;
let code2 = `none | <filter-function-list>
where 
<filter-function-list> = [ <filter-function> | <url> ]+

where 
<filter-function> = <blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <saturate()> | <sepia()>

where 
<blur()> = blur( <length> )
<brightness()> = brightness( <number-percentage> )
<contrast()> = contrast( [ <number-percentage> ] )
<drop-shadow()> = drop-shadow( <length>{2,3} <color>? )
<grayscale()> = grayscale( <number-percentage> )
<hue-rotate()> = hue-rotate( <angle> )
<invert()> = invert( <number-percentage> )
<opacity()> = opacity( [ <number-percentage> ] )
<saturate()> = saturate( <number-percentage> )
<sepia()> = sepia( <number-percentage> )

where 
<number-percentage> = <number> | <percentage>
<color> = <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>

where 
<rgb()> = rgb( <percentage>{3} [ / <alpha-value> ]? ) | rgb( <number>{3} [ / <alpha-value> ]? ) | rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? )
<rgba()> = rgba( <percentage>{3} [ / <alpha-value> ]? ) | rgba( <number>{3} [ / <alpha-value> ]? ) | rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? )
<hsl()> = hsl( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )
<hsla()> = hsla( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsla( <hue>, <percentage>, <percentage>, <alpha-value>? )

where 
<alpha-value> = <number> | <percentage>
<hue> = <number> | <angle>`;
let code3 = `.mydiv { filter: grayscale(50%) }

/* gray all images by 50% and blur by 10px */
img {
    filter: grayscale(0.5) blur(10px);
}`;
let code4 = `.target { filter: url(#c1); }

.mydiv { filter: url(commonfilters.xml#large-blur) }`;
let code5 = `<svg height="0" xmlns="http://www.w3.org/2000/svg">
    <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
    </filter>
</svg>`;
let code6 = `<svg height="0" xmlns="http://www.w3.org/2000/svg">
    <filter id="brightness">
        <feComponentTransfer>
            <feFuncR type="linear" slope="[amount]"/>
            <feFuncG type="linear" slope="[amount]"/>
            <feFuncB type="linear" slope="[amount]"/>
        </feComponentTransfer>
    </filter>
</svg>`;
let code7 = `<svg height="0" xmlns="http://www.w3.org/2000/svg">
    <filter id="contrast">
        <feComponentTransfer>
            <feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
            <feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
            <feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
        </feComponentTransfer>
    </filter>
</svg>`;
let code8 = `<svg height="0" xmlns="http://www.w3.org/2000/svg">
    <filter id="drop-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/>
        <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/>
        <feFlood flood-color="[color]"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
</svg>`;

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
                        <p>CSS 标准里包含了一些已实现预定义效果的函数。你也可以参考一个 SVG 滤镜，通过一个 URL 链接到 SVG 滤镜元素(<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank" rel="noopener noreferrer">SVG filter element</a>)。</p>
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
                        <h2>语法</h2>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <p>设置一种函数，方法如下：</p>
                        <CodeMirror value={`filter: <filter-function> [<filter-function>]* | none`} options={codeMirrorOptions} />
                        <p>{`给SVG元素 <filter>引用滤镜, 如下：`}</p>
                        <CodeMirror value={`filter: url(svg-url#element-id) `} options={codeMirrorOptions} />
                        <h3>插值</h3>
                        <p>{`如果起始和结束过滤器都有一个不含<url>的相同长度的函数列表，则会根据其指定的规则对其每个过滤器函数进行插值。如果它们的长度不同，较长列表中确实的等效过滤器函数将使用空白的值添加到较短列表的尾部，然后所有的过滤器函数根据其特定的规则插值。如果一个过滤器是 none 则会使用过滤器函数的默认值替换函数列表，然后根据特定的规则进行插值，否则使用离散插值。`}</p>
                        <h3>形式语法</h3>
                        <CodeMirror value={code2} options={{
                            theme: 'monokai',
                            mode: 'default',
                            readOnly: true,
                        }} />
                        <h2>实例</h2>
                        <p>下面的例子是使用预设的滤镜函数。每个函数都有特定的例子.</p>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <p>下面的例子展示：通过url函数引入一个svg资源.</p>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <h2>函数</h2>
                        <p>使用 CSS 滤镜属性，你需要设定下面某一函数的值。如果该值无效，函数返回"none"。除特殊说明外，函数的值如果接受百分比值（如 34%），那么该函数也接受小数值（如 0.34）。</p>
                        <h3>url()</h3>
                        <p>URL函数接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素.</p>
                        <CodeMirror value={`filter: url(resources.svg#c1)`} options={codeMirrorOptions} />
                        <h3>blur()</h3>
                        <p>给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是 0；这个参数可设置 css 长度值，但不接受百分比值。</p>
                        <CodeMirror value={`filter: blur(5px)`} options={codeMirrorOptions} />
                        <CodeMirror value={code5} options={{
                            theme: 'monokai',
                            mode: 'HTML',
                            readOnly: true,
                        }} />
                        <h3>brightness()</h3>
                        <p>给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。</p>
                        <CodeMirror value={`filter: brightness(0.5)`} options={codeMirrorOptions} />
                        <CodeMirror value={code6} options={{
                            theme: 'monokai',
                            mode: 'HTML',
                            readOnly: true,
                        }} />
                        <h3>contrast()</h3>
                        <p>调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。</p>
                        <CodeMirror value={`filter: contrast(200%)`} options={codeMirrorOptions} />
                        <CodeMirror value={code7} options={{
                            theme: 'monokai',
                            mode: 'HTML',
                            readOnly: true,
                        }} />
                        <h3>drop-shadow()</h3>
                        <p>{`给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。 函数接受<shadow>（在CSS3背景中定义）类型的值，除了“inset”关键字是不允许的。该函数与已有的 box-shadow box-shadow 属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。 <shadow>参数如下：`}</p>
                        <p><b>{`<offset-x> <offset-y> (必须)`}</b></p>
                        <p>{`这是设置阴影偏移量的两个 <length>值. <offset-x> 设定水平方向距离. 负值会使阴影出现在元素左边. <offset-y>设定垂直距离.负值会使阴影出现在元素上方。.查看 <length>可能的单位.`}</p>
                        <p>{`如果两个值都是0, 则阴影出现在元素正后面 (如果设置了 <blur-radius> and/or <spread-radius>，会有模糊效果).`}</p>
                        <p><b>{`<blur-radius> (可选)`}</b></p>
                        <p>{`这是第三个 <length>值. 值越大，越模糊，则阴影会变得更大更淡.不允许负值 若未设定，默认是 0 (则阴影的边界很锐利).`}</p>
                        <p><b>{`<spread-radius> (可选)`}</b></p>
                        <p>{`这是第四个 <length> 值. 正值会使阴影扩张和变大，负值会是阴影缩小.若未设定，默认是 0 (阴影会与元素一样大小). `}</p>
                        <p>{`注意: Webkit, 以及一些其他浏览器 不支持第四个长度，如果加了也不会渲染。`}</p>
                        <p><b>{`<color> (可选)`}</b></p>
                        <p>{`查看 <color>该值可能的关键字和标记。若未设定，颜色值基于浏览器。在Gecko (Firefox), Presto (Opera)和Trident (Internet Explorer)中， 会应用 color 属性的值。另外，如果颜色值省略，WebKit 中阴影是透明的。`}</p>
                        <CodeMirror value={`filter: drop-shadow(16px 16px 10px black)`} options={codeMirrorOptions} />
                        <CodeMirror value={code8} options={{
                            theme: 'monokai',
                            mode: 'HTML',
                            readOnly: true,
                        }} />
                        <h3>grayscale()</h3>
                        <p>将图像转换为灰度图像。值定义转换的比例。值为 100% 则完全转为灰度图像，值为 0% 图像无变化。值在 0% 到 100% 之间，则是效果的线性乘子。若未设置，值默认是 0。</p>
                        <CodeMirror value={`filter: grayscale(100%)`} options={codeMirrorOptions} />
                        <h3>hue-rotate()</h3>
                        <p>给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是 0deg。该值虽然没有最大值，超过 360deg 的值相当于又绕一圈。</p>
                        <CodeMirror value={`filter: hue-rotate(90deg)`} options={codeMirrorOptions} />
                        <h3>invert()</h3>
                        <p>反转输入图像。值定义转换的比例。100% 的价值是完全反转。值为 0% 则图像无变化。值在 0% 和 100% 之间，则是效果的线性乘子。 若值未设置，值默认是 0。</p>
                        <CodeMirror value={`filter: invert(100%)`} options={codeMirrorOptions} />
                        <h3>opacity()</h3>
                        <p>转化图像的透明程度。值定义转换的比例。值为 0% 则是完全透明，值为 100% 则图像无变化。值在 0% 和 100% 之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是 1。该函数与已有的 opacity 属性很相似，不同之处在于通过 filter，一些浏览器为了提升性能会提供硬件加速。</p>
                        <CodeMirror value={`filter: opacity(50%)`} options={codeMirrorOptions} />
                        <h3>saturate()</h3>
                        <p>转换图像饱和度。值定义转换的比例。值为 0% 则是完全不饱和，值为 100% 则图像无变化。其他值，则是效果的线性乘子。超过 100% 的值是允许的，则有更高的饱和度。 若值未设置，值默认是 1。</p>
                        <CodeMirror value={`filter: saturate(200%)`} options={codeMirrorOptions} />
                        <h3>sepia()</h3>
                        <p>将图像转换为深褐色。值定义转换的比例。值为 100% 则完全是深褐色的，值为 0% 图像无变化。值在 0% 到 100% 之间，则是效果的线性乘子。若未设置，值默认是 0。</p>
                        <CodeMirror value={`filter: sepia(100%)`} options={codeMirrorOptions} />
                        <h2>复合函数</h2>
                        <p>你可以组合任意数量的函数来控制渲染。下面的例子可以增强图像的对比度和亮度。</p>
                        <CodeMirror value={`filter: contrast(175%) brightness(3%)`} options={codeMirrorOptions} />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
