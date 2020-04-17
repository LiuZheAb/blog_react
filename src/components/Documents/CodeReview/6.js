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
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>如何处理评审后程序员拒绝修改的情况</h1>
                    </div>
                    <div className="article-content">
                        <p className="indent-2">有时开发人员会推迟代码评审。要么他们不同意你的建议，要么他们会抱怨你太严格了。</p>
                        <h2>谁是正确的?</h2>
                        <p className="indent-2">当开发人员不同意您的建议时，首先花点时间考虑一下它们是否正确。通常，他们比您更接近代码，因此他们可能对代码的某些方面有更好的了解。他们的论点有道理吗?从代码健康的角度来看，这有意义吗?如果是这样，让他们知道他们是对的，让这个问题消失。</p>
                        <p className="indent-2">然而，开发人员并不总是正确的。在这种情况下，评审人员应该进一步解释为什么他们认为他们的建议是正确的。一个好的解释说明了对开发人员的回答的理解，以及关于为什么需要更改的附加信息。</p>
                        <p className="indent-2">特别是，当评审人员认为他们的建议将改善代码的健康状况时，如果他们认为所产生的代码质量改进能够证明所要求的额外工作是合理的，那么他们应该继续提倡更改。<b>改善代码健康状况往往是一些小步骤</b>。</p>
                        <p className="indent-2">有时候，在你真正理解一个建议之前，你需要花几轮时间来解释它。只要确保始终保持<Link to="/codereview/5">礼貌</Link>，并让开发人员知道您听到了他们在说什么，只是暂时不同意。</p>
                        <h2>扰乱开发者</h2>
                        <p className="indent-2">评审人员有时认为，如果评审人员坚持要进行改进，开发人员会感到不安。有时候开发人员确实会感到沮丧，但是这通常是很短暂的，之后他们会非常感谢您帮助他们提高了代码的质量。通常，如果您在评论中表现得很有<Link to="/codereview/5">礼貌</Link>，开发人员实际上一点也不会感到不安，而这种担心只存在于评审人员的脑海中。通常，令人不安的地方更多的是<Link to="/codereview/5">评论的编写方式</Link>，而不是评审人员对代码质量的坚持。</p>
                        <h2>稍后处理</h2>
                        <p className="indent-2">一个常见的抵制原因是开发人员(可以理解)希望完成任务。他们不想通过另一轮的评审来得到这个CL。所以他们说他们会在以后的CL中处理一些东西，所以你现在应该LGTM这个CL。一些开发人员对此非常擅长，他们将立即编写一个后续CL来解决这个问题。然而，经验表明，随着开发人员编写原始CL的时间越长，这种处理发生的可能性就越小。事实上，除非开发人员在当前CL之后立即进行处理，否则通常不会发生这种情况。这并不是因为开发人员不负责任，而是因为他们有很多工作要做，处理工作在其他工作的压力下丢失或遗忘了。因此，通常最好坚持开发人员现在就处理他们的CL，在代码进入代码库并“完成”之前。让人们“稍后处理”是代码库退化的常见方式。</p>
                        <p className="indent-2">如果CL引入了新的复杂性，在提交之前必须处理它，除非是<a href="https://github.com/google/eng-practices/blob/master/review/emergencies.md" target="_blank" rel="noopener noreferrer">紧急情况</a>。如果CL暴露了周围的问题，而这些问题现在还无法解决，开发人员应该为处理工作提交一个bug文件，并将其分配给自己，这样它就不会丢失。他们还可以选择在引用已归档错误的代码中编写TODO注释。</p>
                        <h2>关于严格的一般投诉</h2>
                        <p className="indent-2">如果您以前有相当松散的代码评审，而现在您转而进行严格的评审，那么一些开发人员将会非常大声地抱怨。提高代码评审的<Link to="/codereview/4">速度</Link>通常会使这些抱怨逐渐消失。</p>
                        <p className="indent-2">有时候，这些抱怨可能需要几个月的时间才能消除，但最终开发人员往往会看到严格的代码评审的价值，因为他们看到了严格的代码评审有助于生成什么优秀的代码。有时候，最大声的抗议者甚至会成为你最坚定的支持者，一旦发生了一些事情，让他们真正看到了你的严厉所带来的价值。</p>
                        <h2>解决冲突</h2>
                        <p className="indent-2">如果您遵循上述所有方法，但是您仍然遇到您自己和开发人员之间无法解决的冲突，请参阅<Link to="/codereview/1">代码评审标准</Link>，了解有助于解决冲突的指导原则和原则。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
