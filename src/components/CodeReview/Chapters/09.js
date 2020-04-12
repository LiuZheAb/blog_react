import React, { Component } from 'react';
import Directory from "../../Directory";
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
        document.title = "Code Review——如何处理评审人员的评论";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>如何处理评审人员的评论</h1>
                    </div>
                    <div className="article-content">
                        <p className="indent-2">当您发送了一个CL供评审时，评审人员很可能会对您的CL给出几个评论。下面是一些关于处理评审人员评论的有用信息。</p>
                        <h2>不要把它看成是针对你个人的</h2>
                        <p className="indent-2">评审的目的是保持代码库和产品的质量。当评审人员对您的代码提出批评时，请将其视为他们试图帮助您、代码库和谷歌，而不是针对您或您的能力的个人攻击。</p>
                        <p className="indent-2">有时评审人员感到沮丧，他们在评审中表达了这种沮丧。对于评审人员来说，这不是一个好的实践，但是作为开发人员，您应该为此做好准备。问问自己，“评审人员想要和我交流的有建设性的东西是什么?”</p>
                        <p className="indent-2"><b>永远不要对代码评审评论做出愤怒的回应</b>。这严重违反了职业礼仪，将永远存在于代码评审工具中。如果你太生气或生气而无法友好地回复，那么离开电脑一会儿，或者做点别的事情，直到你感到足够平静，可以礼貌地回复为止。</p>
                        <p className="indent-2">一般来说，如果一个评审人员没有以一种建设性和礼貌的方式提供反馈，那就当面向他们解释一下。如果你不能和他们面对面或视频通话，那就给他们发一封私人邮件。用一种友善的方式向他们解释你不喜欢什么，以及你希望他们做的不同之处。如果他们也以非建设性的方式回应这个私人讨论，或者它没有预期的效果，那么根据情况升级到你的经理。</p>
                        <h2>修复代码</h2>
                        <p className="indent-2">如果评审人员说他们不理解代码中的某些内容，您的第一反应应该是澄清代码本身。如果无法澄清代码，则添加一个代码注释，解释为什么有代码。如果一条注释看起来毫无意义，那么只有在这种情况下，您才应该在代码评审工具中给出解释。</p>
                        <p className="indent-2">如果评审人员不理解您的代码，那么将来的其他代码读者也可能不理解。在代码评审工具中编写响应对将来的代码读者没有帮助，但是澄清代码或添加代码注释确实对他们有帮助。</p>
                        <h2>独立思考</h2>
                        <p className="indent-2">编写CL需要做很多工作。通常情况下，你会很满意自己终于完成了一份评估报告，并确信不需要再做更多的工作。因此，当评审人员回来对可以改进的内容提出评论时，很容易本能地认为这些评论是错误的，审查员不必要地阻止了您，或者他们应该让您提交CL。然而，<b>无论您现在有多确定</b>，请花点时间退后一步，考虑评审人员是否提供了有价值的反馈，这将有助于代码库和谷歌。你对自己的第一个问题应该是，“评审人员是正确的吗?”</p>
                        <p className="indent-2">如果你不能回答这个问题，很可能评审人员需要澄清他们的评论。</p>
                        <p className="indent-2">如果您已经考虑过了，并且仍然认为自己是正确的，那么请随意解释为什么您的方法更适合代码库、用户和/或谷歌。通常情况下，评审人员实际上是在提供建议，他们希望您自己考虑什么是最好的。实际上，您可能知道一些关于用户、代码库或CL的信息，而评审人员并不知道这些信息。把它们填进去;给他们更多的背景。通常，您可以根据技术事实与评审人员达成一些共识。</p>
                        <h2>解决冲突</h2>
                        <p className="indent-2">解决冲突的第一步应该是与你的评审人员达成共识。如果您不能达成共识，请参阅<Link to="/codereview/1">代码评审标准</Link>，它给出了在这种情况下应该遵循的原则。</p>

                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
