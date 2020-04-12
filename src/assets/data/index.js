//网站数据统一配置
export let myblogData = {
    name: "myblog",
    title: "本站介绍",
    baseHref: "/myblog",
    description: "建站经历",
    img: "myblog.png",
    content: "建站过程中的随笔。",
    catalog: []
};

export let gojsData = {
    name: "gojs",
    title: "GoJS 教程",
    baseHref: "/gojs",
    description: "GoJS 简介",
    img: "gojs.png",
    content: "GoJS是一个用于构建交互式图表和图形的JavaScript和TypeScript库。GoJS允许你建立各种各样的图表和图形，从简单的流程图和组织图到非常具体的工业图，SCADA和BPMN图，医学图，如基因图和疫情建模图等。GoJS使用可定制的模板和布局使构建复杂节点、链接和组的JavaScript关系图变得更容易。",
    catalog: [
        {
            href: "/gojs/0",
            title: "写在前面"
        }, {
            href: "/gojs/1",
            title: "GoJS 介绍"
        }, {
            href: "/gojs/2",
            title: "第一节 简单的GoJS demo"
        }, {
            href: "/gojs/3",
            title: "第二节 GoJS应用中有什么"
        }, {
            href: "/gojs/4",
            title: "第三节 使用GoJS构建Parts(Parts 和 Panels)"
        }, {
            href: "/gojs/5",
            title: "第四节 GoJS Diatram Model"
        }, {
            href: "/gojs/6",
            title: "第五节 使用GoJS构建Parts(Templates)"
        }, {
            href: "/gojs/7",
            title: "第六节 GoJS GraphObject属性"
        }, {
            href: "/gojs/8",
            title: "第一节 GoJS布局教程概述"
        }, {
            href: "/gojs/9",
            title: "第二节 网格布局(GridLayout)"
        }, {
            href: "/gojs/10",
            title: "第三节 树形布局(TreeLayout)"
        }, {
            href: "/gojs/11",
            title: "第四节 力导向布局(ForceDirectedLayout)"
        }, {
            href: "/gojs/12",
            title: "第五节 层次布局(LayeredDigraphLayout)"
        }, {
            href: "/gojs/13",
            title: "第六节 环状布局(CircularLayout)"
        }, {
            href: "/gojs/14",
            title: "第一节 表格面板(Table Panel)"
        }, {
            href: "/gojs/15",
            title: "第二节 网格面板(Grid Panel)"
        }, {
            href: "/gojs/16",
            title: "第三节 刻度面板(Graduated Panel)"
        }, {
            href: "/gojs/17",
            title: "第一节 调整大小,旋转,装饰"
        }, {
            href: "/gojs/18",
            title: "第二节 概述"
        }, {
            href: "/gojs/19",
            title: "第三节 重新链接,链接重塑,零件"
        }, {
            href: "/gojs/20",
            title: "GoJS 端口(Ports)"
        }, {
            href: "/gojs/21",
            title: "GoJS Item Arrays"
        }
    ],
    section: {
        "写在前面": [0, 0],
        "GoJS 介绍": [1, 1],
        "GoJS 入门教程": [2, 7],
        "GoJS 布局(Layout)": [8, 13],
        "GoJS 面板(Panel)": [14, 16],
        "GoJS 工具(Tool)": [17, 19],
        "GoJS 端口(Port)": [20, 20],
        "GoJS Item Arrays": [21, 21],
    }
};

export let codeReview = {
    name: "codeReview",
    title: "Code Review",
    baseHref: "/codereview",
    description: "Code Review(代码评审)简介",
    img: "codeReview.png",
    content: "该部分译自谷歌工程实践文档(Google Engineering Practices Documentation)。代码评审也称代码复查，是指通过阅读代码来检查源代码与编码标准的符合性以及代码质量的活动。",
    catalog: [
        {
            href: "/codereview/0",
            title: "简介"
        }, {
            href: "/codereview/1",
            title: "代码评审标准"
        }, {
            href: "/codereview/2",
            title: "代码评审要点"
        }, {
            href: "/codereview/3",
            title: "在评审中如何查看CL"
        }, {
            href: "/codereview/4",
            title: "代码评审的速度"
        }, {
            href: "/codereview/5",
            title: "如何编写代码评审的评论"
        }, {
            href: "/codereview/6",
            title: "如何处理评审后程序员拒绝修改的情况"
        }, {
            href: "/codereview/7",
            title: "写出好的CL"
        }, {
            href: "/codereview/8",
            title: "小型CL"
        }, {
            href: "/codereview/9",
            title: "如何处理评审人员的评论"
        },
    ],
    section: {
        "简介": [0, 0],
        "代码评审者指南": [1, 6],
        "代码开发者指南": [7, 9],
    }
};