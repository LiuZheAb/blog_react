import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/3024-day.css';
import './5.less';

let code1 = `@keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
}`;
let code2 = `@keyframes identifier {
    0% { top: 0; left: 0; }
    30% { top: 50px; }
    68%, 72% { left: 50px; }
    100% { top: 100px; left: 100%; }
}`;
let code3 = `@keyframes identifier {
    0% { top: 0; left: 0px}
    50% { top: 30px; left: 20px; }
    50% { top: 10px; }
    100% { top: 0; left: 30px;}
}`;
let code4 = `@keyframes important1 {
    from { margin-top: 50px; }
    50%  { margin-top: 150px !important; } /* 忽略 */
    to   { margin-top: 100px; }
}
  
@keyframes important2 {
    from { margin-top: 50px;
           margin-bottom: 100px; }
    to   { margin-top: 150px !important; /* 忽略 */
           margin-bottom: 50px; }
}`;
let code5 = `@keyframes <keyframes-name> {
    <keyframe-block-list>
}
where 
<keyframes-name> = <custom-ident> | <string>
<keyframe-block-list> = <keyframe-block>+

where 
<keyframe-block> = <keyframe-selector># {
    <declaration-list>
}

where 
<keyframe-selector> = from | to | <percentage>`;
let code6 = `p {
    animation-duration: 3s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}


@keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%; 
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
}`;
export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>@keyframes</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p className="indent-2">@keyframes 规则通过在动画序列中定义关键帧（或waypoints）的样式来控制CSS动画序列中的中间步骤。这比转换更能控制动画序列的中间步骤。</p>
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">JavaScript 可以通过 CSS对象模型接口CSSKeyframesRule来访问 @keyframes </p>
                        <p className="indent-2">要使用关键帧, 先创建一个带名称的@keyframes规则，以便后续使用 animation-name 这个属性来将一个动画同其关键帧声明匹配。每个@keyframes 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。</p>
                        <p className="indent-2">您可以按任意顺序列出关键帧百分比；他们将按照其应该发生的顺序来处理。</p>
                        <h3>让关键帧序列生效</h3>
                        <p className="indent-2">如果一个关键帧规则没有指定动画的开始或结束状态（也就是，0%/from 和100%/to，浏览器将使用元素的现有样式作为起始/结束状态。这可以用来从初始状态开始元素动画，最终返回初始状态。</p>
                        <p className="indent-2">如果在关键帧的样式中使用了不能用作动画的属性，那么这些属性会被忽略掉，支持动画的属性仍然是有效的，不受波及。</p>
                        <h3>重复定义（Duplicate resolution）</h3>
                        <p className="indent-2">如果多个关键帧使用同一个名称，以最后一次定义的为准。 @keyframes 不存在层叠样式(cascade)的情况，所以动画在一个时刻（阶段）只会使用一个的关键帧的数据。</p>
                        <p className="indent-2">如果一个@keyframes 里的关键帧的百分比存在重复的情况，以最后一次定义的关键帧为准。 因为@keyframes 的规则不存在层叠样式(cascade)的情况，即使多个关键帧设置相同的百分值也不会全部执行。</p>
                        <h3>属性个数不定</h3>
                        <p className="indent-2">如果一个关键帧中没有出现其他关键帧中的属性，那么这个属性将使用插值(不能使用插值的属性除外, 这些属性会被忽略掉)。例如：</p>
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">例子中，"top"属性分别出现在 0%, 30%和100% 的关键帧中，"left"属性分别出现在0%, 68%和100% 关键帧中.</p>
                        <h3>当关键帧被重复定义</h3>
                        <p className="indent-2">如果某一个关键帧出现了重复的定义，且重复的关键帧中的css属性值不同，以最后一次定义的属性为准。例如：</p>
                        <CodeMirror
                            value={code3}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">上面这个例子中，50% 关键帧中设置的属性top: 10px是有效的，但是其他的属性会被忽略</p>
                        <h3>关键帧中的 !important 关键词</h3>
                        <p className="indent-2">关键帧中出现的 !important 关键词将会被忽略</p>
                        <CodeMirror
                            value={code4}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <h2>语法</h2>
                        <h3>取值</h3>
                        <ul>
                            <li>{`<identifier>`}</li>
                            <p>帧列表的名称。 名称必须符合 CSS 语法中对标识符的定义。</p>
                            <li>from</li>
                            <p>等效于 0%.</p>
                            <li>to</li>
                            <p>等效于 100%.</p>
                            <li>{`<percentage>`}</li>
                            <p>动画序列中，触发关键帧的时间点，使用百分值来表示。</p>
                        </ul>
                        <h3>语法格式</h3>
                        <CodeMirror
                            value={code5}
                            options={{
                                theme: '3024-day',
                                mode: 'default',
                                readOnly: true,
                            }}
                        />
                        <h2>示例</h2>
                        <p className="indent-2">CSS</p>
                        <CodeMirror
                            value={code6}
                            options={{
                                theme: '3024-day',
                                mode: 'CSS',
                                readOnly: true,
                            }}
                        />
                        <p className="indent-2">结果</p>
                        <div style={{ padding: 20, border: "1px solid #000", width: "100%", maxWidth: 800, minHeight: 300, margin: "0 auto", overflow: "auto" }}>
                            <p style={{ animationDuration: "3s", animationName: "slidein", animationIterationCount: "infinite", animationDirection: "alternate" }}>
                                The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressedher in a languid, sleepy voice.
                                </p>
                        </div>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
