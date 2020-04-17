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
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>如何编写代码评审的评论</h1>
                    </div>
                    <div className="article-content">
                        <h2>总结</h2>
                        <ul className="indent-2">
                            <li>保持友好。</li>
                            <li>解释你的理由。</li>
                            <li>给出明确的方向或指出问题让开发人员来权衡。</li>
                            <li>鼓励开发人员简化代码或添加代码注释，而不是仅仅向您解释代码的复杂性。</li>
                        </ul>
                        <h2>礼貌</h2>
                        <p className="indent-2">一般来说，礼貌和尊重是很重要的，同时也对您正在评审的代码的开发人员非常清晰和有帮助。一种方法是确保您总是对代码进行注释，而从不对开发人员进行注释。你不必总是遵循这个习惯，但是当你说一些可能会让人心烦意乱或有争议的话时，你绝对应该使用这个习惯。例如:</p>
                        <p className="indent-2">坏:“为什么您在这里使用线程，而显然没有从并发中获得任何好处?”</p>
                        <p className="indent-2">好:“这里的并发模型增加了系统的复杂性，但我看不到任何实际的性能优势。因为没有性能上的好处，所以这段代码最好是单线程的，而不是使用多个线程。”</p>
                        <h2>解释为什么</h2>
                        <p className="indent-2">关于上面的“好”示例，您将注意到的一件事是，它帮助开发人员理解您为什么要发表评论。您并不总是需要在评审注释中包含这些信息，但是有时候，对于您的意图、您所遵循的最佳实践，或者您的建议如何改进代码健康状况，给出更多的解释是合适的。</p>
                        <h2>给指导</h2>
                        <p className="indent-2"><b>一般来说，修复CL是开发人员的责任，而不是评审人员的责任</b>。您不需要为开发人员进行解决方案的详细设计或编写代码。</p>
                        <p className="indent-2">不过，这并不意味着评审人员应该毫无帮助。一般来说，你应该在指出问题和提供直接指导之间取得适当的平衡。指出问题并让开发人员做出决策通常有助于开发人员学习，并使代码评审变得更容易。它还可以产生更好的解决方案，因为开发人员比评审人员更接近代码。</p>
                        <p className="indent-2">然而，有时直接的指令、建议甚至代码更有帮助。代码评审的主要目标是获得尽可能好的CL。第二个目标是提高开发人员的技能，这样随着时间的推移，他们需要的评审就会越来越少。</p>
                        <h2>接受解释</h2>
                        <p className="indent-2">如果您要求开发人员解释一段您不理解的代码，通常会导致他们<b>更清楚地重写代码</b>。偶尔，在代码中添加注释也是一种适当的响应，只要它不只是解释过于复杂的代码。</p>
                        <p className="indent-2"><b>仅在代码评审工具中编写的解释对将来的代码读者没有帮助</b>。它们只在少数情况下是可接受的，例如当您正在检查一个您不太熟悉的区域，并且开发人员解释了一些代码的普通读者可能已经知道的内容时。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
