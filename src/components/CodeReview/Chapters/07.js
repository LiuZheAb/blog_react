import React, { Component } from 'react';
import Directory from "../../Directory";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTree: []
        };
        this.getArticleTree = this.getArticleTree.bind(this);
    }
    getArticleTree() {
        let childrens = document.getElementsByClassName("article-content")[0].children;
        let articleTree = [];
        for (let i = 0; i < childrens.length - 1; i++) {
            let nodeName = childrens[i].nodeName;
            if (nodeName === "H2" || nodeName === "H3") {
                childrens[i].id = childrens[i].innerText;
                articleTree.push({
                    name: childrens[i].innerText,
                    tag: childrens[i].nodeName
                });
            }
        }
        this.setState({ articleTree });
    }
    componentDidMount() {
        document.title = "Code Review——写出好的CL文档";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>写出好的CL文档</h1>
                    </div>
                    <div className="article-content">
                        <p className="indent-2">CL文档是对<b>正在进行的更改及其原因的公开记录</b>。它将成为我们版本控制历史的一个永久部分，并且可能会被数百人阅读，而不是您的评审人员。</p>
                        <p className="indent-2">未来的开发人员将根据您的CL的文档来搜索它。将来有人可能会寻找你的改变，因为他们对你的改变有微弱的记忆，但却没有现成的细节。如果所有重要的信息都在代码中，而不是文档中，那么查找CL就会困难得多。</p>
                        <h2>第一行</h2>
                        <ul className="indent-2">
                            <li>对正在做的事情做一个简短的总结。</li>
                            <li>完整的句子，写的好像它是一个命令。</li>
                            <li>后面跟着空行。</li>
                        </ul>
                        <p className="indent-2">CL文档的<b>第一行</b>应该是一个简短的总结，具体说明CL正在<b>做什么</b>，然后是一个空白行。这就是未来的大部分代码搜索者会看到当他们浏览一段代码版本控制的历史,这第一行应该足够的信息,他们不需要阅读你的CL或整个文档只是为了得到你的CL究竟做了什么。</p>
                        <p className="indent-2">按照传统，CL文档的第一行是一个完整的句子，写起来就像一个命令(一个祈使句)。例如，说“删除FizzBuzz RPC并用新系统替换它”，而不是“将要删除FizzBuzz RPC并将用新系统替换它”。不过，你不必把文档的其余部分写成祈使句。</p>
                        <h2>主体提供信息</h2>
                        <p className="indent-2">文档的其余部分应该是信息丰富的。它可能包括对正在解决的问题的简要描述，以及为什么这是最好的方法。如果这种方法有任何缺点，应该提到。如果相关，包括背景信息，例如bug号、基准测试结果和设计文档的链接。</p>
                        <p className="indent-2">即使是很小型CL也需要注意一些细节。将CL放在上下文中。</p>
                        <h2>坏的CL文档</h2>
                        <p className="indent-2">“修复bug”是一个不合适的CL文档。什么错误?你做了什么来修理它?其他类似的不良文档包括:</p>
                        <ul className="indent-2">
                            <li>修复</li>
                            <li>添加补丁</li>
                            <li>将代码从A移动到B</li>
                            <li>第1阶段</li>
                            <li>添加便利功能</li>
                            <li>删除奇怪的地址</li>
                        </ul>
                        <p className="indent-2">其中一些是真实的CL文档。它们的作者可能认为它们提供了有用的信息，但是它们没有达到CL文档的目的。</p>
                        <h2>好的CL文档</h2>
                        <p className="indent-2">下面是一些很好的例子。</p>
                        <h3>功能变化</h3>
                        <p className="indent-2"><em>rpc:删除RPC服务器消息自由列表上的大小限制。</em></p>
                        <p className="indent-2"><em>像FizzBuzz这样的服务器拥有非常大的消息，并且可以从重用中获益。使自由列表更大，并添加一个线程，随着时间的推移缓慢地释放自由列表条目，以便空闲服务器最终释放所有自由列表条目。</em></p>
                        <p className="indent-2">前几句话描述了CL的实际功能。文档的其余部分将讨论正在解决的问题，为什么这是一个好的解决方案，以及关于特定实现的更多信息。</p>
                        <h3>重构</h3>
                        <p className="indent-2"><em>使用计时器构造任务，以使用其TimeStr和Now方法。</em></p>
                        <p className="indent-2"><em>向Task添加一个Now方法，这样就可以删除borglet() getter方法(OOMCandidate只使用该方法来调用borglet's Now方法)。这将替换Borglet上委托给计时员的方法。</em></p>
                        <p className="indent-2"><em>现在允许任务提供是消除对Borglet依赖的一步。最终，依赖于现在完成任务的协作者应该被更改为直接使用计时器，但这是对小步骤重构的一种适应。</em></p>
                        <p className="indent-2"><em>继续重构Borglet层次结构的长期目标。</em></p>
                        <p className="indent-2">第一行描述了CL做了什么，以及这是如何从过去的变化。文档的其余部分讨论了特定的实现、CL的上下文、解决方案并不理想以及未来可能的方向。这也解释了为什么会发生这种变化。</p>
                        <h3>需要一些上下文的小CL</h3>
                        <p className="indent-2"><em>为status.py创建Python3构建规则。</em></p>
                        <p className="indent-2"><em>这允许已经在Python3中使用该规则的消费者依赖于原始状态构建规则旁边的规则，而不是依赖于他们自己树中的某个地方。它鼓励新用户尽可能使用Python3，而不是Python2，并显著简化了当前正在使用的一些自动构建文件重构工具。</em></p>
                        <p className="indent-2">第一句话描述了实际在做什么。文档的其余部分解释了为什么要进行更改，并为审阅者提供了很多上下文。</p>
                        <h2>在提交CL之前，请检查文档</h2>
                        <p className="indent-2">CL在评审期间可能会发生显著的变化。在提交CL之前，有必要检查CL文档，以确保文档仍然反映CL所做的工作。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
