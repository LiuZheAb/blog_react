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
        document.title = "Code Review——小型CL";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>小型CL</h1>
                    </div>
                    <div className="article-content">
                        <h2>为什么要编写小型CL?</h2>
                        <p className="indent-2">小，简单的CL是:</p>
                        <ul className="indent-2">
                            <li><b>评审地更快</b>。对于评审人员来说，几次花5分钟来评审小型CL要比留出30分钟来评审大型CL容易得多。</li>
                            <li><b>更彻底地评审</b>。随着大的变化，评审人员和作者往往会因为大量的详细评论来回转换而感到沮丧——有时会到遗漏或删除重要观点的程度。</li>
                            <li><b>不太可能引入bug</b>。由于您所做的更改更少，因此您和您的评审人员更容易有效地推断CL的影响，并查看是否引入了错误。</li>
                            <li><b>如果被拒绝，浪费的工作就会更少</b>。如果你写了一个很大的CL，然后你的评审人员说总体方向是错误的，那么你已经浪费了很多工作。</li>
                            <li><b>容易合并</b>。处理大型CL需要很长时间，所以在合并时将会有很多冲突，而且必须经常合并。</li>
                            <li><b>易于设计</b>。优化一个小更改的设计和代码运行状况要比细化一个大更改的所有细节容易得多。</li>
                            <li><b>减少对评论的封锁</b>。发送整体更改的自包含部分允许您在等待当前CL检查期间继续编码。</li>
                            <li><b>回滚更简单</b>。大型CL更有可能接触到在初始CL提交和回滚CL之间更新的文件，从而使回滚复杂化(中间的CL可能也需要回滚)。</li>
                        </ul>
                        <p className="indent-2">请注意，<b>评审人员有权以更改太大为唯一理由直接拒绝更改</b>。通常他们会感谢你的贡献，但要求你以某种方式把它变成一系列较小的变化。在您已经编写了一个变更之后，可能需要进行大量的工作来分割它，或者需要花费大量的时间来争论为什么评审人员应该接受您的大变更。编写小的CL更容易。</p>
                        <h2>什么样的是小型CL?</h2>
                        <p className="indent-2">通常，CL的正确大小是一个<b>自包含的更改</b>。这意味着:</p>
                        <ul className="indent-2">
                            <li>CL做了一个最小的更改，<b>只处理一件事</b>。这通常只是一个功能的一部分，而不是一个完整的功能。一般来说，编写太小的CL与编写太大的CL相比，最好不要犯错误。和你的评审人员一起找出一个可接受的大小。</li>
                            <li>评审人员需要了解的关于CL(除了未来的开发)的所有内容都在CL、CL的描述、现有的代码库或他们已经评审过的CL中。</li>
                            <li>在CL签入之后，系统将继续为用户和开发人员提供良好的工作。</li>
                            <li>CL并不是小到难以理解的程度。如果您添加了一个新的API，您应该在同一个CL中包含该API的用法，以便评审人员能够更好地理解如何使用该API。这也防止检入未使用的api。</li>
                        </ul>
                        <p className="indent-2">对于多大是“太大”没有硬性规定。对于CL, 100行通常是一个合理的大小，而1000行通常太大，但是这取决于您的评审人员的判断。一个变更所散布的文件数量也会影响它的“大小”。在一个文件中更改200行可能没有问题，但是在50个文件中进行更改通常会太大。</p>
                        <p className="indent-2">请记住，尽管从开始编写代码的那一刻起，您就与代码密切相关，但是评审人员通常没有上下文。对于您来说，一个可接受大小的CL可能会让您的评审人员感到难以接受。如果有疑问，可以编写比您认为需要编写的更小的CL。评审人员很少抱怨得到的CL太小。</p>
                        <h2>什么时候可以用大型CL?</h2>
                        <p className="indent-2">在一些情况下，大的变化并不那么糟糕:</p>
                        <ul className="indent-2">
                            <li>您通常可以将整个文件的删除计算为更改的一行，因为评审人员不需要花费很长时间来评审。</li>
                            <li>有时候，大型CL是由您完全信任的自动重构工具生成的，评审人员的工作就是进行全面检查，并说他们确实需要更改。这些CL可以更大，尽管上面的一些警告(如合并和测试)仍然适用。</li>
                        </ul>
                        <h3>按文件分割</h3>
                        <p className="indent-2">分割CL的另一种方法是将需要不同评审人员的文件分组，这些文件在其他方面都是自包含的更改。</p>
                        <p className="indent-2">例如:发送一个CL用于修改协议缓冲区，另一个CL用于修改使用该原型的代码。您必须在代码CL之前提交原型CL，但是它们可以同时被评审。如果您这样做，您可能希望将您编写的另一个CL通知这两组评审人员，以便他们了解您的更改的上下文。</p>
                        <p className="indent-2">另一个例子:您发送一个CL用于代码更改，另一个CL用于使用该代码的配置或实验;如果有必要，这也更容易回滚，因为配置/实验文件有时会比代码更改更快地推入生产环境。</p>
                        <h2>分离重构</h2>
                        <p className="indent-2">通常最好在一个单独的CL中进行重构，而不是进行特性更改或bug修复。例如，移动和重命名一个类应该与修复该类中的一个bug放在不同的CL中。当每个CL独立时，评审人员更容易理解它们所引入的更改。</p>
                        <p className="indent-2">不过，可以在特性更改或bug修复CL中包含小的清理，比如修复局部变量名。由开发人员和评审人员来决定何时重构太大，以至于如果包含在当前的CL中，评审将变得更加困难。</p>
                        <h2>将相关的测试代码保存在同一个CL中</h2>
                        <p className="indent-2">避免将测试代码分割成单独的CL。验证代码修改的测试应该放在同一个CL中，即使它增加了代码行数。</p>
                        <p className="indent-2">然而，独立的测试修改可以首先进入单独的CL，类似于重构指南。这包括:</p>
                        <ul className="indent-2">
                            <li>用新的测试验证已存在的、已提交的代码。</li>
                            <li>重构测试代码(例如引入helper函数)。</li>
                            <li>引入更大的测试框架代码(例如集成测试)。</li>
                        </ul>
                        <h2>不要破坏构造</h2>
                        <p className="indent-2">如果您有几个相互依赖的CL，那么您需要找到一种方法来确保在提交每个CL之后整个系统都能继续工作。否则，您可能会在CL提交之间中断所有开发人员的构造几分钟(如果以后的CL提交出现意外的错误，甚至更长时间)。</p>
                        <h2>如果不能让它足够小</h2>
                        <p className="indent-2">有时您会遇到这样的情况，您的CL似乎必须很大。这很少是真的。实践编写小型CL的作者几乎总是能够找到一种方法，将功能分解为一系列小的更改。</p>
                        <p className="indent-2">在编写大型CL之前，请考虑在其前面加上一个只进行重构的CL是否可以为更干净的实现铺平道路。与您的队友交谈，看看是否有人对如何在小型CL中实现该功能有想法。</p>
                        <p className="indent-2">如果所有这些选项都失败了(这应该是非常罕见的)，那么请提前获得评审人员的同意，以便评审一个大型CL，这样他们就会得到关于将要发生什么的警告。在这种情况下，预期要经历很长时间的评审过程，警惕不要引入错误，并在编写测试时格外勤奋。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
