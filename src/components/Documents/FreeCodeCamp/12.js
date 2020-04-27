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
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>grid 布局(二)</h1>
                    </div>
                    <div className="article-content">
                        <h2>justify-self</h2>
                        <p>在 CSS 网格中，每个单元的内容都位于一个称为单元格的框中。可以使用网格单元上的 justify-self 设置内容在单元格中水平方向上的对齐方式。默认情况下，此属性的值为 stretch，它将使内容填充整个单元格的宽度。这个 CSS 网格属性也接受其他值:</p>
                        <ul>
                            <li>start</li>
                            <p>内容对齐单元格左侧</p>
                            <li>center</li>
                            <p>内容对齐单元格中间</p>
                            <li>end</li>
                            <p>内容对齐单元格右侧</p>
                        </ul>
                        <p>将 "2" 设置为 justify-self:center;</p>
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-6">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>align-self</h2>
                        <p>此属性设置内容在单元格中垂直方向上的对齐方式。</p>
                        <p>将 "3" 设置为 align-self:end;</p>
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-7">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <div className="tip" style={{ margin: "10px 0" }}>
                            <div className="tip-content">
                                经实践,网格容器须设置 height 或 min-height 属性,其子单元的 align-self 属性方可生效。
                            </div>
                        </div>
                        <h2>justify-items</h2>
                        <p>有时，你可能希望 CSS 网格中的所有单元都具有相同的对齐方式。可以使用网格容器的 justify-items 属性将同时设置它们水平方向上的对齐方式。</p>
                        <CodeMirror 
                            value={`justify-items:center;`} options={codeMirrorOptions} />
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-8">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>align-items</h2>
                        <p>此属性将同时设置所有单元垂直方向上的对齐方式。</p>
                        <CodeMirror 
                            value={`align-items:end;`} options={codeMirrorOptions} />
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-9">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>grid-template-areas</h2>
                        <p>您可以将网格的单元格分组到一个区域中，并为该区域提供自定义名称。通过在容器上使用 rid-template-areas 属性来做到这一点。</p>
                        <CodeMirror 
                            value={code1} options={codeMirrorOptions} />
                        <p>上面的代码将前三个单元合并到一个名为 header 的区域中。底部三个单元格组成一个 footer 区域，并在中间一行中创建两个区域:advert 和 content。注意:代码中的每个单词表示一个单元格，每一对引号表示一行。除了自定义标签之外，还可以使用句点(.)来指定网格中的空单元格。</p>
                        <h2>grid-area</h2>
                        <p>在为网格容器创建区域模板之后，可以通过引用指定的名称将单元放置到自定义区域中。为此，要对这样的单元使用 grid-area 属性</p>
                        <CodeMirror 
                            value={`grid-area: footer;`} options={codeMirrorOptions} />
                        <p>这让网格知道希望该单元位于名为 footer 的区域中。</p>
                        <p>为 “5” 设置此属性</p>
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-10">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <p>如果网格没有一个区域模板来参考，你可以创建一个区域，让一个单元像这样放置:</p>
                        <CodeMirror 
                            value={`grid-area: 3/1/4/4;`} options={codeMirrorOptions} />
                        <p>上面例子中的数字是 gird 布局(一)中提到的行号，其代表了下面的值：</p>
                        <CodeMirror 
                            value={`grid-area: 水平起始行号 / 垂直起始列号 / 水平终止行号 / 垂直终止列号;`} options={codeMirrorOptions} />
                        <p>因此，该单元将使用第3和第4行之间的行，以及第1和第4列之间的列。</p>
                        <p>为 “5” 设置此属性</p>
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-11">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>repeat()网格重复单元</h2>
                        <p>当使用 grid-templatecolumns 和 qrid-template-rows 来定义网格的结构时。要为创建的每一行或每一列输入值。</p>
                        <p>假设想要一个 100 行高度相同的网格。上面的方法需要分别插入100个值，就不是很实用了。</p>
                        <p>幸运的是，有一种更好的方法—通过使用 repeat 函数，并在后面加上逗号和重复的值来指定重复列或行的次数。</p>
                        <p>下面是一个创建“100 行网格，每行高50 px”的例子。</p>
                        <CodeMirror 
                            value={`grid-template-rows: repeat(100, 50px);`} options={codeMirrorOptions} />
                        <p>您还可以使用repeat function重复多个值，并在定义网格结构时将该函数插入到其他值中。它是这样的:</p>
                        <CodeMirror 
                            value={`grid-template-columns: repeat(2, 1fr 50px) 20px;`} options={codeMirrorOptions} />
                        <p>上面的代码等价于</p>
                        <CodeMirror 
                            value={`grid-template-columns: 1fr 50px 1fr 50px 20px;`} options={codeMirrorOptions} />
                        <p>下面是一个例子</p>
                        <CodeMirror 
                            value={code2} options={codeMirrorOptions} />
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-12">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>使用 minmax()限制大小</h2>
                        <p>还有另一个内置函数用于 gridtemplate-columns 和 grid-template-rows，称为 minmax。它用于在网格容器更改大小时限制单元的大小。为此，您需要为单元指定可接受的大小范围。下面是一个例子:</p>
                        <CodeMirror 
                            value={`grid-template-columns: 100px minmax(50px, 200px);`} options={codeMirrorOptions} />
                        <p>在上面的代码中，grid-template-columns 被设置为创建两个列:第一个列的宽度为 100px，第二个列的最小宽度为 50px，最大宽度为 200px</p>
                        <p>结果如下:</p>
                        <div className="grid-container grid-container-13">
                            <div className="d1">1</div>
                            <div className="d2">2</div>
                            <div className="d3">3</div>
                            <div className="d4">4</div>
                            <div className="d5">5</div>
                        </div>
                        <h2>使用 auto-fill 创建弹性布局</h2>
                        <p>repeat 函数带有一个auto-fill 的选项。这允许根据容器的大小自动在所需大小的列上插入尽可能多的行。创建伸缩布局时，可以结合使用 auto-fill 与 minmax，像这样:</p>
                        <CodeMirror 
                            value={`repeat(auto-fill, minmax(60px, 1fr));`} options={codeMirrorOptions} />
                        <p>当容器改变大小时，这个设置会插入 60px 的列并拉伸它们，直到可以插入另一个列为止。</p>
                        <p>注意:如果容器不能在一行中容纳所有的单元。它会把他们移到一个新的一行。</p>
                        <p>将第一个容器的 grid-template-columns 设置为此值,结果如下，拖动右侧<b>尖括号</b>以查看两个容器的区别。</p>
                        <ResizableBox
                            width={300}
                            height={316}
                            axis="x"
                            handle={<span className="react-resizable-handle" />}
                            minConstraints={[100, 316]}
                            maxConstraints={[Infinity, 316]}
                        >
                            <div>
                                <div className="grid-container grid-container-14">
                                    <div className="d1">1</div>
                                    <div className="d2">2</div>
                                    <div className="d3">3</div>
                                    <div className="d4">4</div>
                                    <div className="d5">5</div>
                                </div>
                                <div className="grid-container grid-container-15">
                                    <div className="d1">1</div>
                                    <div className="d2">2</div>
                                    <div className="d3">3</div>
                                    <div className="d4">4</div>
                                    <div className="d5">5</div>
                                </div>
                            </div>
                        </ResizableBox>
                        <h2>使用 auto-fit 创建弹性布局</h2>
                        <p>auto-fit 的工作方式与 auto-fill 几乎相同。唯一的区别是，当容器的大小超过所有单元的总和时，auto-fill 会不断插入空行或列，并将单元推到一边，而 auto-fit 会折叠这些空行或列，并拉伸项目以适应容器的大小。</p>
                        <p>注意:如果容器不能在一行中容纳所有的单元。它会把他们移到一个新的一行。</p>
                        <CodeMirror 
                            value={`repeat(auto-fit, minmax(60px, 1fr));`} options={codeMirrorOptions} />
                        <p>将第一个容器的 grid-template-columns 设置为此值,结果如下，拖动右侧<b>尖括号</b>以查看两个容器的区别。</p>
                        <ResizableBox
                            width={300}
                            height={316}
                            axis="x"
                            handle={<span className="react-resizable-handle" />}
                            minConstraints={[100, 316]}
                            maxConstraints={[Infinity, 316]}
                        >
                            <div>
                                <div className="grid-container grid-container-16">
                                    <div className="d1">1</div>
                                    <div className="d2">2</div>
                                    <div className="d3">3</div>
                                    <div className="d4">4</div>
                                    <div className="d5">5</div>
                                </div>
                                <div className="grid-container grid-container-17">
                                    <div className="d1">1</div>
                                    <div className="d2">2</div>
                                    <div className="d3">3</div>
                                    <div className="d4">4</div>
                                    <div className="d5">5</div>
                                </div>
                            </div>
                        </ResizableBox>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
