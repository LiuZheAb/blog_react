import React, { Component } from 'react';
import Directory from "../../Directory";
import { Link } from "react-router-dom";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>代码评审标准</h1>
                    </div>
                    <div className="article-content">
                        <p className="indent-2">代码评审的主要目的是确保随着时间的推移，谷歌的代码库的整体代码健康状况正在改善。代码评审的所有工具和过程都是为此目的而设计的。</p>
                        <p className="indent-2">为了实现这一点，必须平衡一系列的权衡。</p>
                        <p className="indent-2">首先，开发人员必须能够在他们的任务上取得进展。如果您从来没有向代码库提交过改进，那么代码库也就从来没有改进过。另外，评审人员做任何更改都很困难，那么开发人员就没有动力在将来进行改进。</p>
                        <p className="indent-2">另一方面，评审人员的职责是确保每个CL的质量，使其代码库的总体代码健康度不会随着时间的推移而下降。这可能很棘手，因为随着时间的推移，代码库常常会随着代码健康状况的小幅下降而退化，尤其是当团队面临重大的时间限制，并且他们觉得必须走捷径才能实现目标时。</p>
                        <p className="indent-2">此外，评审人员对他们所评审的代码拥有所有权和责任。他们希望确保代码库保持一致、可维护，以及“<Link to="/codereview/2">代码评审要点</Link>”中提到的所有其他内容。</p>
                        <p className="indent-2">因此，我们得到以下规则作为我们在代码评审中期望的标准:</p>
                        <p className="indent-2"><b>一般来说，只要 CL 确实提高了正在处理的系统的整体代码健康度，评审人员就应该赞成此CL，即使此CL不是完美的。</b></p>
                        <p className="indent-2">这是所有代码评审指南中的高级原则。</p>
                        <p className="indent-2">当然，这也有局限性。例如，如果 CL 添加了评审人员不希望在其系统中使用的功能，那么即使代码设计良好，评审人员也可以拒绝批准。</p>
                        <p className="indent-2">这里的一个关键点是，没有“完美”的代码，只有更好的代码。评审人员不应该要求作者在批准之前对CL的每一个微小部分进行打磨。相反，评审人员应该权衡取得进展的需要和他们所建议的变更的重要性。评审人员不应该追求完美，而应该追求持续的改进。作为一个整体，提高系统可维护性、可读性和可理解性的 CL 不应该因为它不是“完美的”而被延迟几天或几周。</p>
                        <p className="indent-2">评审人员应该随时留下评论，表示有些东西可以做得更好，但是如果不是很重要，可以在前面加上“ Nit: ”这样的前缀，让作者知道这只是一种修饰，他们可以选择忽略。</p>
                        <p className="indent-2">注意:本文档中没有任何内容证明签入 CLs 肯定会恶化系统的整体代码健康状况。只有在<a href="https://github.com/google/eng-practices/blob/master/review/emergencies.md" target="_blank" rel="noopener noreferrer">紧急情况</a>下你才会这么做。</p>
                        <h2>指导</h2>
                        <p className="indent-2">代码评审的一个重要功能是教开发人员关于语言、框架或一般软件设计原则的新知识。留下帮助开发人员学习新东西的评论总是好的。随着时间的推移，共享知识是改善系统代码健康状况的一部分。请记住，如果您的评论纯粹是教育性的，但对于满足本文档中描述的标准并不是至关重要的，那么在它前面加上“ Nit: ”，或者以其他方式表明作者并不强制在本 CL 中解决它。</p>
                        <h2>原则</h2>
                        <ul className="indent-2">
                            <li>技术事实和数据比意见和个人偏好更重要。</li>
                            <li>在风格问题上，<a href="http://google.github.io/styleguide/" target="_blank" rel="noopener noreferrer">风格指南</a>是绝对权威的。任何不在样式指南中的纯样式点(空格等)都是个人偏好的问题。风格应该与现有的一致。如果没有以前的风格，接受作者的风格。</li>
                            <li>软件设计的各个方面几乎从来不是纯粹的风格问题，也不只是个人偏好。它们是建立在基本原则的基础上的，应该在这些原则的基础上加以衡量，而不仅仅是个人意见。有时有一些有效的选择。如果作者能够证明(通过数据或基于可靠的工程原理)几种方法是同样有效的，那么评审人员应该接受作者的偏好。否则，选择取决于软件设计的标准原则。</li>
                            <li>如果没有其他规则适用，那么评审人员可能会要求作者与当前代码库中的内容保持一致，只要这不会恶化系统的整体代码健康状况。</li>
                        </ul>
                        <h2>解决冲突</h2>
                        <p className="indent-2">对代码评审中的任何冲突，开发人员和评审人员应该始终根据本文档的内容以及代码开发者指南和代码评审者指南中的其他文档，尝试达成一致意见。</p>
                        <p className="indent-2">当达成一致意见变得特别困难时，在评审人员和作者之间进行面对面的会议或风险投资将会有所帮助，而不是仅仅试图通过代码评审的评论来解决冲突。(不过，如果您这样做了，请确保将讨论结果记录在 CL 的评论中，以供将来的读者参考。)</p>
                        <p className="indent-2">如果这不能解决问题，最常见的解决方法就是升级。升级途径通常是更广泛的团队讨论，让 TL (Team Leader)参与进来，请求代码维护人员作出决策，或者请求 Eng (engineer)经理提供帮助。<b>不要因为作者和评审人员不能达成一致意见而让 CL 无所事事。</b></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
