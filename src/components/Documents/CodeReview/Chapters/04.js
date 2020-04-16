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
        document.title = "Code Review——代码评审的速度";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>代码评审的速度</h1>
                    </div>
                    <div className="article-content">
                        <h2>为什么代码评审应该是快速的?</h2>
                        <p className="indent-2"><b>在谷歌中，我们针对开发团队共同生产产品的速度进行优化，而不是针对单个开发人员编写代码的速度进行优化</b>。个人发展的速度很重要，只是没有整个团队的速度重要。</p>
                        <p className="indent-2">当代码评审很慢时，会发生以下几件事:</p>
                        <ul className="indent-2">
                            <li><b>整个团队的速度降低了</b>。是的，如果一个人对评审的反应不是很快，去完成其他的工作。但是，由于每个CL都要等待一次又一次的评审，团队其他成员的新特性和bug修复会延迟几天、几周或几个月。</li>
                            <li><b>开发人员开始抗议代码评审过程</b>。如果评审人员每隔几天才回复一次，但每次都要求对CL进行重大更改，这对开发人员来说可能是令人沮丧和困难的。通常，这表现为对评审人员的“严格”的抱怨。如果评审人员请求相同的实质性更改(这些更改确实改善了代码的健康状况)，但是每次开发人员进行更新时都会快速响应，那么抱怨就会消失。对代码评审过程的大多数抱怨实际上是通过加快过程来解决的。</li>
                            <li><b>代码健康状况会受到影响</b>。当评审速度较慢时，允许开发人员提交不如预期的CL的压力就会增加。缓慢的评审还会阻碍代码清理、重构和对现有CL的进一步改进。</li>
                        </ul>
                        <h2>代码评审应该有多快?</h2>
                        <p className="indent-2">如果您没有集中精力完成任务，那么应该在任务完成后不久进行代码评审。</p>
                        <p className="indent-2"><b>一个工作日</b>是响应代码评审请求(即第二天早上的第一件事)<b>所需的最长时间</b>。</p>
                        <p className="indent-2">遵循这些指导原则意味着一个典型的CL应该在一天内(如果需要的话)进行多轮评审。</p>
                        <h2>速度vs.中断</h2>
                        <p className="indent-2">有一段时间，对个人速度的考虑超过了对团队速度的考虑。<b>如果你正在集中精力做一项任务，比如写代码，不要打断自己去做代码评审</b>。研究表明，开发人员在中断开发之后，可能需要很长时间才能恢复到平稳的开发流程。因此，对团队来说，在编写代码时打断自己实际上比让另一个开发人员等待代码评审的时间更昂贵。</p>
                        <p className="indent-2">相反，在你的工作中等待一个断点，然后你才回应一个评审的请求。这可能是当你当前的编码任务完成时，午饭后，从会议回来，从微型厨房回来，等等。</p>
                        <h2>快速响应</h2>
                        <p className="indent-2">当我们讨论代码评审的速度时，我们关心的是响应时间，而不是CL完成整个评审并提交所需的时间。理想情况下，整个过程也应该是快速的，但是<b>对于单个响应的快速响应比整个过程的快速响应更重要</b>。</p>
                        <p className="indent-2">即使有时需要很长时间才能完成整个评审过程，但是在整个过程中评审人员的快速响应可以极大地减轻开发人员对“缓慢”代码评审的沮丧。</p>
                        <p className="indent-2">如果你太忙了,做一个完整的回顾在CL时,你仍然可以发送一个快速反应,让开发人员知道什么时候你会得到它,建议其他评审者可以更快地响应,或者<Link to="/codereview/3">提供一些最初的广泛评论</Link>。(注意:这并不意味着您应该中断编码，即使是为了发送这样的响应—在您工作中的一个合理的断点发送响应。)</p>
                        <p className="indent-2">重要的是，评审人员要花足够的时间进行评审，以确保他们的“LGTM”意味着“这段代码符合<Link to="/codereview/1">我们的标准</Link>”。然而，在理想情况下，个人的反应仍然应该是快速的。</p>
                        <h2>Cross-Time-Zone评审</h2>
                        <p className="indent-2">当处理时区差异时，试着在作者还在办公室的时候回到他身边。如果他们已经回家了，那么在他们第二天回到办公室之前，确保你的评审已经完成。</p>
                        <h2>带有注释的LGTM</h2>
                        <p className="indent-2">为了加快代码评审的速度，在某些情况下，评审人员应该给出LGTM/Approval，即使他们还在CL上留下未解决的注释。这是在以下两种情况下完成的:</p>
                        <ul className="indent-2">
                            <li>评审员确信开发人员将适当地处理评审员剩余的所有评论。</li>
                            <li>其余的更改是次要的，不必由开发人员完成。</li>
                            <li>如果不清楚，审查员应该指定他们想要的选项。</li>
                            <li>当开发人员和审阅人员处于不同的时区时，使用带有注释的LGTM尤其值得考虑，否则开发人员将会等待一整天，只为获得“LGTM，批准”。</li>
                        </ul>
                        <h2>大型CL</h2>
                        <p className="indent-2">如果有人给你一个代码评审这么大你不知道当你能有时间去评审它,你的典型的反应应该要求开发人员在彼此之上<Link to="/codereview/8">把CL分割成几个较小型CL</Link>,而不是必须评审一个巨大的CL。这通常是可能的，并且对评审人员非常有帮助，即使这需要开发人员做额外的工作。</p>
                        <p className="indent-2">如果一个CL不能分解成更小型CL，并且您没有时间快速地回顾整个过程，那么至少要对CL的总体设计写一些注释，并将其发回开发人员进行改进。作为评审人员，您的目标之一应该是始终解除开发人员的阻塞，或者使他们能够快速地采取某种进一步的行动，而不会牺牲代码的健康状况。</p>
                        <h2>随着时间的推移，代码评审的改进</h2>
                        <p className="indent-2">如果您遵循这些指导原则，并且对代码评审非常严格，那么您应该会发现，随着时间的推移，整个代码评审过程会变得越来越快。开发人员了解健康代码需要什么，并从一开始就向您发送非常棒的CL，这需要的评审时间越来越少。评审员学会快速响应，而不是在评审过程中添加不必要的延迟。但是<b>不要为了提高速度而牺牲代码评审标准或质量</b>——从长远来看，这实际上不会使任何事情发生得更快。</p>
                        <h2>紧急情况</h2>
                        <p className="indent-2">在一些<a href="https://github.com/google/eng-practices/blob/master/review/emergencies.md" target="_blank" rel="noopener noreferrer">紧急情况</a>下，CL必须非常快速地通过整个评审过程，并且质量指南将被放松。但是，请看看什么是紧急情况?用于描述哪些情况实际上符合紧急情况，哪些不符合紧急情况。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
