import React, { Component } from 'react';
import Directory from "../../../Directory";

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
        document.title = "Code Review——简介";
        this.getArticleTree();
    }
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>简介</h1>
                    </div>
                    <div className="article-content">
                        <h2>写在前面</h2>
                        <p className="indent-2">该文档翻译自谷歌工程实践文档(Google Engineering Practices Documentation),原文地址<a href="https://github.com/google/eng-practices" target="_blank" rel="noopener noreferrer">https://github.com/google/eng-practices</a></p>
                        <h2>正文开始</h2>
                        <p className="indent-2">谷歌有许多涵盖所有语言和所有项目的通用工程实践。这些文档代表了我们长期以来开发的各种最佳实践的集体经验。开源项目或其他组织可能会从这些知识中受益，因此我们努力在可能的情况下公开这些知识。</p>
                        <p className="indent-2">目前这包括下列文档:</p>
                        <p className="indent-2">谷歌的代码评审指南，实际上是两套独立的文档:</p>
                        <ul className="indent-2">
                            <li>代码评审者指南</li>
                            <li>代码开发者指南</li>
                        </ul>
                        <h3>术语</h3>
                        <p className="indent-2">其中一些文档中使用了一些google内部术语，我们在此向外部读者澄清:</p>
                        <p className="indent-2"><b>CL</b>:代表“变更列表(Change List)”，意思是已经提交到版本控制或正在进行代码评审的一个独立更改。通常将此称为“更改”或“补丁”。</p>
                        <p className="indent-2"><b>LGTM</b>:意思是“看起来不错(Looks Good to Me)”。它是代码审查员在批准CL时所说的话。</p>
                        <h3>许可证</h3>
                        <p className="indent-2">本项目中的文档是根据CC-By 3.0许可协议授权的，该协议鼓励您共享这些文档。更多信息请参见<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by/3.0/</a>。</p>
                        <h2>代码评审者指南</h2>
                        <h3>如何进行代码评审</h3>
                        <p className="indent-2">本节中的页面包含了基于长期经验的代码评审最佳方法的建议。它们一起表示一个完整的文档，被分成许多单独的部分。你不需要全部读完，但是很多人发现阅读整本书对他们自己和他们的团队都很有帮助。</p>
                        <ul className="indent-2">
                            <li>代码评审标准</li>
                            <li>代码评审要点</li>
                            <li>在评审中如何查看CL</li>
                            <li>代码评审的速度</li>
                            <li>如何编写代码评审的评论</li>
                            <li>如何处理评审后程序员拒绝修改的情况</li>
                        </ul>
                        <p className="indent-2">还请参阅代码开发者指南，该指南为正在评审CLs的开发人员提供了详细的指导。</p>
                        <h2>代码开发者指南</h2>
                        <p className="indent-2">本节中的页面包含了开发人员进行代码评审的最佳实践。这些指导方针应该帮助您更快地完成评审，并获得更高质量的结果。您不必全部阅读它们，但是它们适用于每个谷歌开发人员，许多人发现阅读整个集合很有帮助。</p>
                        <ul className="indent-2">
                            <li>写出好的CL</li>
                            <li>小型CL</li>
                            <li>如何处理评审人员的评论</li>
                        </ul>
                        <p className="indent-2">还请参阅代码评审者指南，它为代码评审人员提供了详细的指导。</p>
                    </div>
                </div>
                <div className="directory">
                    <Directory articleTree={this.state.articleTree}></Directory>
                </div>
            </div>
        )
    }
}
