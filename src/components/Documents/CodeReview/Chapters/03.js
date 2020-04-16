import React, { Component } from 'react';
import Directory from "../../../Directory";
import { Link } from "react-router-dom";

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
        document.title = "Code Review——在评审中如何查看CL";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>在评审中如何查看CL</h1>
                    </div>
                    <div className="article-content">
                        <h2>总结</h2>
                        <p className="indent-2">既然您知道要<Link to="/codereview/2">查看什么</Link>，那么管理跨多个文件的评审的最有效方法是什么?</p>
                        <ol style={{ paddingLeft: "2em" }}>
                            <li>这种变化有意义吗?<Link to="/codereview/7">描述</Link>得好吗?</li>
                            <li>首先看看变化中最重要的部分。整体设计好吗?</li>
                            <li>按照适当的顺序查看CL的其余部分。</li>
                        </ol>
                        <h2>第一步:从更广泛的角度看待更改</h2>
                        <p className="indent-2">看看<Link to="/codereview/7">CL的描述</Link>，以及CL通常做什么。这种变化有意义吗?如果这个变更一开始就不应该发生，请立即回复并解释为什么不应该发生变更。当您拒绝这样的变更时，向开发人员建议他们应该做什么也是一个好主意。</p>
                        <p className="indent-2">例如，你可以说“看起来你在这方面做得不错，谢谢!”不过，我们实际上是在删除这里修改的FooWidget系统，所以我们现在不想对它做任何新的修改。不如重构我们的新BarWidget类?”</p>
                        <p className="indent-2">注意，评审人员不仅拒绝了当前的CL并提供了一个替代的建议，而且他们做得很有礼貌。这种礼貌是很重要的，因为我们想要表现出我们作为开发人员彼此尊重，即使我们意见不一致。</p>
                        <p className="indent-2">如果您得到了多个表示不希望进行更改的CL，那么您应该考虑重新处理团队的开发流程或外部贡献者发布的流程，以便在编写CL之前有更多的沟通。最好在人们完成大量工作之前就说“不”，这些工作现在必须扔掉或彻底重写。</p>
                        <h2>第二步:检查CL的主要部分</h2>
                        <p className="indent-2">查找一个或多个文件，这些文件是这个CL的“主要”部分。通常，只有一个文件具有最多的逻辑更改，它是CL的主要部分。首先看看这些主要部分。这有助于为CL的所有较小部分提供上下文，并且通常会加速代码评审。如果CL太大，您无法确定哪些部分是主要部分，请询问开发人员应该首先查看什么，<Link to="/codereview/8">或者让他们将CL分割成多个CL</Link>。</p>
                        <p className="indent-2">如果您看到CL的这一部分存在一些主要的设计问题，您应该立即发送这些评论，即使您现在没有时间来评审CL的其余部分。事实上，评审CL的其余部分可能是浪费时间，因为如果设计问题足够严重，那么许多其他正在检查的代码将会消失，不管怎样都无关紧要。</p>
                        <p className="indent-2">有两个很重要的原因，应该立即发送这些主要的设计意见:</p>
                        <ul className="indent-2">
                            <li>开发人员通常会发送一个CL，然后在等待评审时立即基于该CL开始新的工作。如果您正在评审的CL中存在主要的设计问题，那么他们还必须重新编写后面的CL。提前捕捉它们以免在有问题的设计上做过多额外的工作。</li>
                            <li>大的设计变更比小的变更需要更长的时间。开发人员几乎都有截止日期;为了在代码库中保持高质量代码的同时完成这些截止日期，开发人员需要根据CL尽快开始更新工作。</li>
                        </ul>
                        <h2>第三步:按照适当的顺序查看CL的其余部分</h2>
                        <p className="indent-2">当您确认整个CL没有主要的设计问题时，请尝试找出一个逻辑顺序来检查文件，同时确保您不会错过评审任何文件。通常，在您浏览完主要文件之后，按照代码评审工具显示的顺序浏览每个文件是最简单的。有时候，在阅读主代码之前先阅读测试也是有帮助的，因为这样你就知道了这个改变应该做什么。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
