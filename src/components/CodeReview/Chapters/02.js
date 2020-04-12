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
        document.title = "Code Review——代码评审要点";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>代码评审要点</h1>
                    </div>
                    <div className="article-content">
                        <p className="indent-2">注意:在考虑这些要点时，一定要考虑到代码评审的标准。</p>
                        <h2>设计</h2>
                        <p className="indent-2">评审中最重要的内容是CL的总体设计。CL中不同代码段之间的交互有意义吗?这个更改属于您的代码库，还是属于总库?它与系统的其他部分集成得好吗?现在是添加此功能的好时机吗?</p>
                        <h2>功能</h2>
                        <p className="indent-2">这个CL是否达到了开发人员的目的?开发人员的意图对这段代码的用户有好处吗?“用户”通常是终端用户(当他们受到更改的影响时)和开发人员(将来必须“使用”这些代码的人)。</p>
                        <p className="indent-2">大多数情况下，我们希望开发人员能够很好地测试CL，以便在进行代码评审时能够正确地使用。然而，作为评审人员，您仍然应该考虑边缘情况，寻找并发性问题，尝试像用户一样思考问题，并确保仅通过阅读代码就不会看到错误。</p>
                        <p className="indent-2">如果您愿意，您可以验证CL—检查CL行为最重要的时间是当它具有面向用户的影响时，例如<b>UI更改</b>。当您仅仅阅读代码时，很难理解一些更改将如何影响用户。对于这样的更改，如果不方便在CL中进行修补并亲自尝试，您可以让开发人员提供功能的演示。</p>
                        <p className="indent-2">在代码评审过程中考虑功能的另一个特别重要的时刻是，在CL中是否存在某种<b>并行编程</b>，理论上可能会导致死锁或竞争条件。仅通过运行代码很难发现这类问题，通常需要有人(开发人员和评审人员)仔细考虑这些问题，以确保没有引入问题。(注意，这也是一个不使用可能存在竞争条件或死锁的并发模型的好理由——这会使代码评审或理解代码变得非常复杂。)</p>
                        <h2>复杂性</h2>
                        <p className="indent-2">CL比它应该的更复杂吗?在CL的每一级检查——单个行是不是太复杂了?函数是否过于复杂?类太复杂了吗?“太复杂”通常意味着“<b>代码阅读器无法快速理解</b>”。这也意味着“<b>当开发人员试图调用或修改这段代码时，他们很可能会引入bug</b>”。</p>
                        <p className="indent-2">一种特殊类型的复杂性是<b>过度工程</b>，开发人员让代码比需求的更通用，或者增加了系统目前不需要的功能。评审人员应该特别警惕过度工程。鼓励开发人员解决他们知道现在需要解决的问题，而不是开发人员推测将来可能需要解决的问题。未来的问题应该在它到来后解决，你可以看到它在实际中真正的的形态和需求。</p>
                        <h2>测试</h2>
                        <p className="indent-2">根据更改要求进行单元测试、集成测试或端到端测试。一般来说，测试应该添加到与生产代码相同的CL中，除非CL正在处理<a href="https://github.com/google/eng-practices/blob/master/review/emergencies.md" target="_blank" rel="noopener noreferrer">紧急情况</a>。</p>
                        <p className="indent-2">确保CL中的测试是正确的、合理的和有用的。测试本身不进行测试，而且我们很少为我们的测试编写测试——必须确保测试是有效的。</p>
                        <p className="indent-2">当代码被破坏时，测试实际上会失败吗?如果下面的代码发生变化，它们会开始产生假阳性吗?每个测试都做出简单而有用的断言吗?测试是否在不同的测试方法之间适当地分开?</p>
                        <p className="indent-2">请记住，测试也是必须维护的代码。不要仅仅因为测试不是主体部分就允许测试的复杂性。</p>
                        <h2>命名</h2>
                        <p className="indent-2">开发人员是否为所有东西都选择了好名字?一个好的名字足够长，可以充分地表达条目是什么或做了什么，而不会长到让人难以阅读。</p>
                        <h2>注释</h2>
                        <p className="indent-2">开发人员是否用可理解的英语编写了清晰的注释?所有的注释都是必要的吗?通常，注释在解释某些代码<b>为什么</b>存在时很有用，而不应该解释某些代码在做什么。如果代码不够清晰，无法解释自己，那么应该简化代码。也有一些例外(例如，正则表达式和复杂算法常常从解释它们在做什么的注释中受益匪浅)，但大多数注释是针对代码本身不可能包含的信息，比如决策背后的推理。</p>
                        <p className="indent-2">查看CL之前的注释也会很有帮助。也许现在有一个可以删除的待办事项，刚好有注释建议不要做这个更改的，等等。</p>
                        <p className="indent-2">注意，注释不同于类、模块或函数的文档，这些文档应该表示代码的用途、应该如何使用以及使用时的行为。</p>
                        <h2>样式</h2>
                        <p className="indent-2">我们在谷歌有针对所有主要语言的<a href="http://google.github.io/styleguide/" target="_blank" rel="noopener noreferrer">样式指南</a>，甚至包括大多数次要语言。确保CL遵循适当的样式指南。</p>
                        <p className="indent-2">如果您想改进一些样式指南中没有的样式点，可以在注释前面加上“Nit:”，让开发人员知道这是一个您认为可以改进代码但不是强制性的吹毛求疵的地方。不要仅仅基于个人风格偏好来阻止CL的提交。</p>
                        <p className="indent-2">CL的作者不应该将主要的样式更改与其他更改结合在一起。这使得很难看到CL中发生了什么变化，使得合并和回退更加复杂，并导致其他问题。例如，如果作者想要重新格式化整个文件，让他们只将重新格式化后的文件作为一个CL发送给您，然后再发送另一个CL，并在此之后将其功能更改发送给您。</p>
                        <h2>文档</h2>
                        <p className="indent-2">如果CL更改了用户构建、测试、交互或发布代码的方式，请检查它是否还更新了相关文档，包括READMEs、g3doc页面和任何生成的参考文档。如果CL删除或弃用代码，请考虑是否也应该删除文档。如果缺少文档，就去索要。</p>
                        <h2>每一行</h2>
                        <p className="indent-2">查看分配给您的每一行代码。有些东西，比如数据文件、生成的代码或大型数据结构，您有时可以扫描它们，但是不要扫描由人编写的类、函数或代码块，并假定其中的内容是正确的。显然，有些代码需要比其他代码更仔细的检查—这是您必须做出的判断调用—但是您至少应该确保您理解所有代码在做什么。</p>
                        <p className="indent-2">如果阅读代码对您来说太困难，并且这会减慢评审的速度，那么您应该让开发人员知道这一点，并在您尝试评审之前等待他们澄清它。在谷歌，我们雇佣优秀的软件工程师，你就是其中之一。如果您不能理解代码，其他开发人员也很可能无法理解。因此，当您要求开发人员澄清这些代码时，您也在帮助未来的开发人员理解这些代码。</p>
                        <p className="indent-2">如果您理解代码，但是您觉得没有资格做部分评审，那么请确保CL上有一个合格的评审人员，特别是对于复杂的问题，比如安全性、并发性、可访问性、国际化等等。</p>
                        <h2>上下文</h2>
                        <p className="indent-2">在广泛的上下文中查看CL通常是有帮助的。通常，代码评审工具只会显示正在更改的部分周围的几行代码。有时您必须查看整个文件，以确保更改实际上是有意义的。例如，您可能只看到添加了四行，但是当您查看整个文件时，您会看到这四行位于一个50行方法中，现在确实需要将其分解为更小的方法。</p>
                        <p className="indent-2">在整个系统的上下文中考虑CL也很有用。这个CL是提高了系统的代码健康度，还是使整个系统更复杂、测试更少等等?<b>不要接受降低系统代码健康度的CL</b>。大多数系统都是通过许多累积起来的小更改而变得复杂的，因此在新更改中防止即使是很小的复杂性也很重要。</p>
                        <h2>好的内容</h2>
                        <p className="indent-2">如果您在CL中看到一些不错的内容，请告诉开发人员，特别是当他们以一种很好的方式处理您的一条注释时。代码评审通常只关注错误，但是它们也应该为好的实践提供鼓励和赞赏。有时候，在指导方面，告诉开发人员他们做对了什么比告诉他们他们做错了什么更有价值。</p>
                        <h2>总结</h2>
                        <p className="indent-2" style={{ margin: 0 }}>在进行程式码检讨时，你应确保:</p>
                        <ul className="indent-2" style={{ marginBottom: "8px" }}>
                            <li>代码设计得很好。</li>
                            <li>该功能对代码的用户很好。</li>
                            <li>任何UI更改都是合理的，看起来也不错。</li>
                            <li>任何并行编程都是安全的。</li>
                            <li>代码并不比它需要的复杂。</li>
                            <li>开发人员没有实现他们将来可能需要但不知道现在需要的东西。</li>
                            <li>代码有适当的单元测试。</li>
                            <li>测试是精心设计的。</li>
                            <li>开发人员对所有东西都使用了清晰的名称。</li>
                            <li>注释清晰有用，主要解释为什么而不是是什么。</li>
                            <li>代码被适当地文档化(通常在g3doc中)。</li>
                            <li>代码符合我们的样式指南。</li>
                        </ul>
                        <p className="indent-2">确保评审您被要求评审的<b>每一行</b>代码，查看<b>上下文</b>，确保您正在<b>改进代码的健康状况</b>，并赞扬开发人员所做的<b>好的内容</b>。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}