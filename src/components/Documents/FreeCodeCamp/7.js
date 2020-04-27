import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'HTML',
    readOnly: true,
};
let code1 = `<audio id="meowClip" controls>
    <source src="audio/meow.mp3" type="audio/mpeg" />
    <source src="audio/meow.ogg" type="audio/ogg" />
</audio>`;
let code2 = `<figure>
    <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
    <br>
    <figcaption>
        Master Camper Cat demonstrates proper form of a roundhouse kick.
    </figcaption>
</figure>`;
let code3 = `<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
</form>`;
let code4 = `<form>
    <fieldset>
        <legend>Choose one of these three items:</legend>
        <input id="one" type="radio" name="items" value="one">
        <label for="one">Choice One</label><br>
        <input id="two" type="radio" name="items" value="two">
        <label for="two">Choice Two</label><br>
        <input id="three" type="radio" name="items" value="three">
        <label for="three">Choice Three</label>
    </fieldset>
</form>`;
let code5 = `<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">`;
let code6 = `<p>Master Camper Cat officiated the cage match between Goro and Scorpion 
<time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>html 的可访问性</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p>“可访问性”(Accessibility)通常意味着拥有易于理解、可引导并可与广泛用户互动的 web 内容和界面。这包括有视觉、听觉、行动能力或认知障碍的人。</p>
                        <p>无论用户的能力或资源如何,网站应该对所有人开放，每个人都可以访问。一些用户依赖于辅助技术，例如屏幕阅读器或语音识别软件。还有些用户可能只能使用键盘来浏览网站。在开发项目时，将各种用户的需求考虑在内，这对于创建开放式 web 会有很大帮助。</p>
                        <h2>{`<img> —— alt`}</h2>
                        <p><b>alt</b> 属性描述图像的内容，并为其提供文本替代。这有助于在图像加载失败或无法被用户看到某些情况下，它也可以被搜索引擎用来了解图像中包含的内容，以便在搜索结果中显示出来。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={`<img src="logo.jpeg" alt="logo" />`} options={codeMirrorOptions} />
                        <p>有视觉障碍的人依赖屏幕阅读器将 web 内容转换成音频。如果信息只是以视觉形式呈现，他们就不会得到信息。对于图像，屏幕阅读器可以访问 alt 属性并读取其内容以传递关键信息。</p>
                        <p>好的 alt 文本为读者提供图像的简短描述。根据 HTML5 规范，在图像上包含一个 alt 属性被认为是强制性的。</p>
                        <h3>何时 alt 属性应该为空？</h3>
                        <p>在已经用文本内容解释了图像，或者对页面没有意义(装饰性img)的情况下，img 仍然需要一个 alt 属性，但是可以将其设置为空字符串。这里有一个例子:</p>
                        <CodeMirror value={`<img src="visualDecoration.jpeg" alt="" />`} options={codeMirrorOptions} />
                        <h2>{`<h1> ~ <h6>`}</h2>
                        <p>标题(h1 到 h6 元素)是帮助为内容提供结构和标记的常用标记。可以将屏幕阅读器设置为只阅读页面上的标题，以便用户获得摘要。这意味着标记中的标题标记必须具有语义意义并相互关联，而不是仅仅因为它们的大小值而选择它们。</p>
                        <p>标题的使用要注意以下几点:</p>
                        <ul>
                            <li>网页中的标题需要按顺序排列并指出标题之间的层次关系</li>
                            <li>等级相等(或更高)的标题表示开始新的章节，等级较低的标题表示继续前一个章节。</li>
                            <li>最后一点，每个页面都应该有一个(只有一个)h1 元素，这是你的内容的主要方面。h1 和其他的标题部分被搜索引擎用来理解页面的主题。</li>
                        </ul>
                        <h2>HTML5新语义标签</h2>
                        <p>HTML5 引入了许多新元素，为开发人员提供了更多的选择，同时也整合了可访问性特性。这些标签包括{`<main>,<article>,<section>,<header>,<nav>,<footer>`}和其他部分。</p>
                        <p>默认情况下，浏览器呈现这些元素的方式与 div 类似。但是，在适当的情况下使用它们会给标记带来额外的意义。仅标记名就可以指示它所包含的信息的类型，这为内容增加了语义含义。辅助技术可以访问这些信息，为用户提供更好的页面摘要或导航选项。</p>
                        <h3>{`<main>`}</h3>
                        <p>main 标签用于包装主要内容，每个页面应该只有一个 main，它用于包围与页面中心主题相关的信息。它并不意味着包含跨页面重复的项。比如导航链接或页脚。</p>
                        <p>main 标签具有锚点功能，辅助技术可以用来快速导航到主要内容。如果你曾经在页面顶部看到过“跳转到主要内容”的链接，那么使用 main 标签就会自动为辅助设备提供该功能。</p>
                        <h3>{`<article>和<section>`}</h3>
                        <p>article 是一个分段标签，用于包装独立的、自包含的内容。标签可以很好地与博客条目、论坛帖子或新闻文章配合使用。</p>
                        <p>section 标签的语义和 article 略有不同。article 用于独立的内容，而 section 用于按主题对相关内容进行分组。它们可以根据需要相互使用。例如，如果一本书是 article，那么每一章就是一个 section。当内容组之间没有关系时，使用 div。</p>
                        <h3>{`<header>`}</h3>
                        <p>header 标签用于作为父标签包装介绍性信息或导航链接，并能很好地处理在多个页面顶部重复出现的内容。</p>
                        <p>header 标签也有锚点功能，允许辅助技术快速导航到该内容。</p>
                        <h3>{`<nav>`}</h3>
                        <p>nav 标签也有锚点功能,便于屏幕阅读器导航。这个标签用来包装页面中的主要导航链接。</p>
                        <p>如果在页面底部有重复的站点链接，则没有必要使用 nav 标签,使用 footer 就足够了。</p>
                        <h3>{`<footer>`}</h3>
                        <p>footer 标签也有锚点功能,允许辅助设备快速导航。它主要用来容纳版权信息或相关链接，通常位于页面的底部。</p>
                        <h3>{`<audio>`}</h3>
                        <p>当将声音或音频流内容包装到标记中时，HTML5 的 audio 标签提供了语义意义。音频内容还需要一个文本选项，以便聋人或重听人可以访问，这可以通过页面上邻近的文本或到文本的链接来实现。</p>
                        <p>audio 标签支持 controls 属性。这将显示浏览器默认的播放、暂停和其他控件，并支持键盘功能。这是一个布尔属性，意味着它不需要值。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <h3>{`<figure>`}</h3>
                        <p>HTML5 引入了 figure 元素，以及相关的 figcaption 标签。一起使用时，这些项将图像、图表或表格添加图注或表注。通过对相关内容进行语义分组，并提供解释 figure 的文本替代，这将提供双重的可访问性。</p>
                        <p>对于图表之类的数据可视化，可以使用标题简要地记录趋势或结论。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <h2>{`form中的<label>`}</h2>
                        <p>label 标签包装特定表单控件项的文本，通常是某个选项的名称或标签。这将意义与项联系起来，使表单更具可读性。label 标签上的 for 属性显式地将该标签与表单控件关联起来，供屏幕阅读器使用</p>
                        <p>for 属性的值必须与"表单控件"的 id 属性的值相同。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <h2>{`<fieldset>`}</h2>
                        <p>每个单选按钮都有一个 label 标签，其 for 属性的值为单选按钮的 id。由于单选按钮通常出现在用户必须选择其中一个的组中，所以有一种方法可以从语义上显示这些选择是集合的一部分。</p>
                        <p>fieldset 标签将整个单选按钮分组包围起来以实现此目的。它通常使用一个{`<legend>`}标签来提供分组的描述，屏幕阅读器将为 fieldset 标签中的每个选项读取该描述。</p>
                        <p>当选择是自解释的，比如性别选择时，fieldset 和 legend 标签是不必要的。为每个单选按钮使用带有 for 属性的标签就足够了。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <h2>{`date类型的input适配`}</h2>
                        <p>表单通常包含 input 标签，可用于创建多个不同的表单控件。此元素上的 type 属性指示将创建何种类型。</p>
                        <p>HTML5 引入了一个指定 date 字段的选项。根据浏览器的支持，日期选择器将在 input 区域中出现。这使得所有用户更容易地填写表单。:</p>
                        <p>对于较老的浏览器，类型将默认为 text，因此为以防万一要在 label 或 placeholder 中为用户显示预期的日期格式。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <h2>{`<time>及其datetime属性`}</h2>
                        <p>HTML5 还引入了 time 标签和 datetime 属性来标准化时间。这是一个可以在页面上包装日期或时间的内联元素。日期的有效格式由 datetime 属性保存。这是辅助设备访问的值。它通过陈述一个时间的标准版本来帮助避免混淆，即使它是以非正式或口语的方式在文本中编写的。</p>
                        <p>这里有一个例子:</p>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
