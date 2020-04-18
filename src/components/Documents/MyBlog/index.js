//本站介绍
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article" style={{ width: "100%" }}>
                    <div className="article-title">
                        <h1>本站介绍</h1>
                    </div>
                    <div className="article-content">
                        <h2>为什么建本站</h2>
                        <p className="indent-2">最初只是想拿来写文档的。只是写文档的话，为什么有知乎、简书、掘金、语雀等网站不用，非要费劲自己建站呢？</p>
                        <p className="indent-2">这是由于前段时间想要系统地学习一下GoJS，整理一份文档。其实最开始是在语雀上写文档的。不得不说，功能很强大，但是只能放一些普通的文字、图片、链接之类的，写了大概有四五节，突然想把其实现的效果展示在文档中，可是文档里没办法插入可交互的HTML元素，于是乎，就开始调研哪些网站可以满足自己的需求。</p>
                        <p className="indent-2">在这期间，看了知乎、简书、掘金等一众网站，就不一一列举了，发现都满足不了自己的需求（也可能是太笨了，没学会怎么用，哈哈哈哈哈，尴尬）。然后就萌生了自己建站的想法。</p>
                        <p className="indent-2">想建站但是不想花钱买服务器，穷呀，怎么办？乖乖百度找办法，然后发现了github-pages（以下简称gp）这个好东西，可以拿来做个人博客，虽说github在国内访问的速度不太快吧（这个说法可能谦虚了），但是它免费呀，还挑啥。So，开始研究gp怎么用。</p>
                        <p className="indent-2">第一时间想到的就是最笨的方法，纯HTML、CSS肯定是行得通的。而且语雀有自带的将文档转为HTML的功能，还是很好用的，所以就想着先在语雀里写好文档，再转成HTML，然后在需要的位置插入代码。随后把想法测试了一下，放到gp上没问题，开心。</p>
                        <p className="indent-2">既然都建站了，索性就弄个博客吧，上面的办法可以是可以，可是每个页面都要写个HTML文件，这未免也太蠢了，想想果断放弃了。</p>
                        <p className="indent-2">然后就自然而然地开始找博客模板，然后就找到了个可以快速构建个人博客的好东西，Hexo，想了解的小伙伴请移步<a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo官网</a>。</p>
                        <p className="indent-2">工具找好了，下一步是什么？使用？别急，先找教程，省时省力不掉坑。找了有几篇，最后参考的是这个<a href="https://zhuanlan.zhihu.com/p/26625249" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/26625249</a>，文章写得很详细，手把手教学，可是我上来就忽略了第一点，<b>仓库名应该为：用户名.github.io </b>，后边的泪就不提了。。。</p>
                        <p className="indent-2">Hexo除了快速建站之外，还有很多主题选择，感兴趣的可以看一下<a href="https://hexo.io/themes/" target="_blank" rel="noopener noreferrer">Hexo官方Themes</a>，将近300个，真的很多，而且拉取、配置都很便捷。</p>
                        <p className="indent-2">折腾了大概有三四个小时，其实大部分时间都用在挑主题上了。。。然后就正式开始搞，然后就没有然后了。。。开始用我才发现，Hexo用Markdown解析文章，它只能解析文章啊，还是不能满足需求随心所欲的插HTML元素（也可能没学会怎么用），关键是感觉写起来还挺麻烦的，所以又放弃Hexo了。</p>
                        <p className="indent-2">随后又开始找新的办法，终于想到了用自己比较熟悉的React来建站，老路子，教程参考这里<a href="https://zhuanlan.zhihu.com/p/88481760" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/88481760</a>。</p>
                        <p className="indent-2">测试了一下，将React打包后的代码丢到github上，可行，于是就这么愉快地决定了。</p>
                        <br />
                        <p className="indent-2">以上基本上就是建站的整个历程。</p>
                        <br />
                        <div className="text-right">
                            <em>写于2020-4-6凌晨</em>
                        </div>
                        <h2>用到了哪些</h2>
                        <ul className="indent-2">
                            <li><a href="https://react.docschina.org/" target="_blank" rel="noopener noreferrer">React</a></li>
                            <li><a href="https://ant.design/" target="_blank" rel="noopener noreferrer">AntDesign</a></li>
                            <li><a href="http://lesscss.cn/" target="_blank" rel="noopener noreferrer">Less</a></li>
                            <li><a href="https://gojs.net/latest/index.html" target="_blank" rel="noopener noreferrer">GoJS</a></li>
                            <li><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a></li>
                        </ul>
                        <br />
                        <p className="indent-2">UI部分参考了语雀</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
