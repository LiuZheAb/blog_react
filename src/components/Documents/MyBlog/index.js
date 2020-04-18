//本站介绍
import React, { Component } from 'react';
import Directory from "../../Directory";
import { createFromIconfontCN } from '@ant-design/icons';

const Emoji = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1764079_wbj57wahdm.js',
});

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>关于本站</h1>
                    </div>
                    <div className="article-content">
                        <h2>为什么建本站</h2>
                        <p className="indent-2">最初只是想拿来写文档的。只是写文档的话，为什么有知乎、简书、掘金、语雀等网站不用，非要费劲自己建站呢？</p>
                        <p className="indent-2">这是由于前段时间想要系统地学习一下GoJS，整理一份文档。其实最开始是在语雀上写文档的。不得不说，功能很强大，但是只能放一些普通的文字、图片、链接之类的，写了大概有四五节，突然想把其实现的效果展示在文档中，可是文档里没办法插入可交互的HTML元素<Emoji type="emoji-jiong" />，于是乎，就开始调研哪些网站可以满足自己的需求。</p>
                        <p className="indent-2">在这期间，看了知乎、简书、掘金等一众网站，就不一一列举了，发现都满足不了自己的需求（也可能是太笨了，没学会怎么用，哈哈哈哈哈，尴尬<Emoji type="emoji-ganga" />）。然后就萌生了自己建站的想法<Emoji type="emoji-jiling" />。</p>
                        <p className="indent-2">想建站但是不想花钱买服务器，穷呀<Emoji type="emoji-jiong" />，怎么办？乖乖百度找办法，然后发现了github-pages（以下简称gp）这个好东西，可以拿来做个人博客，虽说github在国内访问的速度不太快吧，但是它免费呀<Emoji type="emoji-caimi" />，还挑啥。So，开始研究gp怎么用。</p>
                        <p className="indent-2">第一时间想到的就是最笨的方法，纯HTML、CSS肯定是行得通的。而且语雀有自带的将文档转为HTML的功能，还是很好用的，所以就想着先在语雀里写好文档，再转成HTML，然后在需要的位置插入代码。随后把想法测试了一下，放到gp上没问题，开心。</p>
                        <p className="indent-2">既然都建站了，索性就弄个博客吧，上面的办法可以是可以，可是每个页面都要写个HTML文件，这未免也太蠢了<Emoji type="emoji-xianqi" />，想想果断放弃了。</p>
                        <p className="indent-2">然后就自然而然地开始找博客模板，然后就找到了个可以快速构建个人博客的好东西，Hexo，想了解的小伙伴请移步<a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo官网</a>。</p>
                        <p className="indent-2">工具找好了，下一步是什么？使用？别急，先找教程，省时省力不掉坑。找了有几篇，最后参考的是这个<a href="https://zhuanlan.zhihu.com/p/26625249" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/26625249</a>，文章写得很详细，手把手教学，可是我上来就忽略了第一点，<b>仓库名应该为：用户名.github.io </b>，后边的泪就不提了<Emoji type="emoji-wunai" />。。。</p>
                        <p className="indent-2">Hexo除了快速建站之外，还有很多主题选择，感兴趣的可以看一下<a href="https://hexo.io/themes/" target="_blank" rel="noopener noreferrer">Hexo官方Themes</a>，将近300个，真的很多，而且拉取、配置都很便捷。</p>
                        <p className="indent-2">折腾了大概有三四个小时，其实大部分时间都用在挑主题上了。。。然后就正式开始搞，然后就没有然后了<Emoji type="emoji-dai" />。。。开始用我才发现，Hexo用Markdown解析文章，它只能解析文章啊，还是不能满足需求随心所欲的插HTML元素（也可能没学会怎么用），关键是感觉写起来还挺麻烦的，所以又放弃Hexo了。</p>
                        <p className="indent-2">随后又开始找新的办法，终于想到了用自己比较熟悉的React来建站，老路子，教程参考这里<a href="https://zhuanlan.zhihu.com/p/88481760" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/88481760</a>。</p>
                        <p className="indent-2">测试了一下，将React打包后的代码丢到github上，可行，于是就这么愉快地决定了<Emoji type="emoji-ku" />。</p>
                        <br />
                        <p className="indent-2">以上基本上就是建站的整个历程。</p>
                        <br />
                        <div className="text-right">
                            <em>写于2020-4-6凌晨</em>
                        </div>
                        <hr />
                        <h2>略有小感</h2>
                        <p className="indent-2">坚持写博客已经有二十多天了，今天写点最近写博客以来的感受。</p>
                        <p className="indent-2">首先说一点，弄博客真的很花费时间。我几乎每天至少在博客上花费五六个小时，甚至，4月10号晚上弄了个通宵，其实我都已经很久没有这么熬过夜了，但是写代码实在是太有意思了<Emoji type="emoji-daxiao" />，哈哈哈，根本停不下来呀~</p>
                        <p className="indent-2">为什么在博客上花了这么多时间呢？其实我并没有在写文章上花费太多时间，因为博客目前还处于初期阶段，并未成型，所以大部分时间都用在网站调整和优化了。写到这里，我去看了下我博客源代码在GitHub上的<a href="https://github.com/LiuZheAb/blog_react/commits/master" target="_blank" rel="noopener noreferrer">commits</a>记录，发现刚好100条了，真是巧。</p>
                        <p className="indent-2">二十多天，我的博客的代码结构是改了又改，组件化也越来越彻底。虽然没有后端，但是通过公共data数据文件实现了类似数据库的功能，面包屑、菜单、页脚、目录组件内的数据统一调用此数据。网站的维护、更新工作比刚开始的时候简化了许多(刚开始的时候，要想发一篇新文章，我得手动将面包屑、菜单、页脚、目录组件逐一修改才行，效率实在是低)。</p>
                        <p className="indent-2">博客这玩意儿，真的会让人上瘾<Emoji type="emoji-fangguang" />。写博客之前吧，每天闲时基本都在打游戏、看视频，可是开始写博客后呢，被同事称为“任务小王子”的我都放弃游戏了，为什么，因为写博客真的很过瘾啊<Emoji type="emoji-xiaoku" />。看着自己一点一点搭起来的网站逐渐完善，代码也越来越漂亮，这其中的美妙不可言说。</p>
                        <p className="indent-2">所以说，写博客有个最大的好处，就是让人有事干，尤其对于像我这种比较闲的人，真的能推着人往前走。在写博客的过程中，我真真切切地学到了很多东西，每天都过得很充实，也感受到每天都在进步。</p>
                        <p className="indent-2">革命尚未成功，同志仍需努力。加油吧，年轻人，为了心中的理想乡<Emoji type="emoji-jiling" /></p>
                        <br />
                        <p className="indent-2">以上。</p>
                        <br />
                        <div className="text-right">
                            <em>写于2020-4-18下午</em>
                        </div>
                        <h2>用到了哪些</h2>
                        <ul className="indent-2">
                            <li><a href="https://react.docschina.org/" target="_blank" rel="noopener noreferrer">React</a></li>
                            <li><a href="https://ant.design/" target="_blank" rel="noopener noreferrer">AntDesign</a></li>
                            <li><a href="http://lesscss.cn/" target="_blank" rel="noopener noreferrer">Less</a></li>
                            <li><a href="https://gojs.net/latest/index.html" target="_blank" rel="noopener noreferrer">GoJS</a></li>
                            <li><a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">IconFont</a></li>
                            <li><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a></li>
                        </ul>
                        <br />
                        <p className="indent-2">UI部分参考了语雀</p>
                        <br />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
