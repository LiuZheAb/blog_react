//网站数据统一配置
//本站介绍
export let myblogData = {
    name: "myblog",
    title: "关于本站",
    baseHref: "/myblog",
    component: "MyBlog",
    description: "建站经历",
    img: "myblog.png",
    content: "建站过程中的随笔。",
    section: [],
    chapter: {}
};
//GoJS 教程
export let gojsData = {
    name: "gojs",
    title: "GoJS 教程",
    baseHref: "/gojs",
    component: "GOJS",
    description: "GoJS 简介",
    img: "gojs.png",
    content: "GoJS 是一个用于构建交互式图表和图形的 JavaScript 和 TypeScript 库。GoJS 允许你建立各种各样的图表和图形，从简单的流程图和组织图到非常具体的工业图，SCADA 和 BPMN 图，医学图，如基因图和疫情建模图等。GoJS 使用可定制的模板和布局使构建复杂节点、链接和组的 JavaScript 关系图变得更容易。",
    section: [
        "写在前面",
        "GoJS 介绍",
        "第一节 简单的 GoJS demo",
        "第二节 GoJS 应用中有什么",
        "第三节 使用 GoJS 构建 Parts(Parts 和 Panels)",
        "第四节 GoJS Diatram Model",
        "第五节 使用 GoJS 构建 Parts(Templates)",
        "第六节 GoJS GraphObject 属性",
        "第一节 GoJS 布局教程概述",
        "第二节 网格布局(GridLayout)",
        "第三节 树形布局(TreeLayout)",
        "第四节 力导向布局(ForceDirectedLayout)",
        "第五节 层次布局(LayeredDigraphLayout)",
        "第六节 环状布局(CircularLayout)",
        "第一节 表格面板(Table Panel)",
        "第二节 网格面板(Grid Panel)",
        "第三节 刻度面板(Graduated Panel)",
        "第一节 调整大小,旋转,装饰",
        "第二节 概述",
        "第三节 重新链接,链接重塑,零件",
        "GoJS 端口(Ports)",
        "GoJS Item Arrays",
    ],
    chapter: {
        "写在前面": [0],
        "GoJS 介绍": [1],
        "GoJS 入门教程": [2, 3, 4, 5, 6, 7],
        "GoJS 布局(Layout)": [8, 9, 10, 11, 12, 13],
        "GoJS 面板(Panel)": [14, 15, 16],
        "GoJS 工具(Tool)": [17, 18, 19],
        "GoJS 端口(Port)": [20],
        "GoJS Item Arrays": [21],
    }
};
//Code Review
export let codeReview = {
    name: "codereview",
    title: "Code Review",
    baseHref: "/codereview",
    component: "CodeReview",
    description: "Code Review(代码评审)简介",
    img: "codeReview.png",
    content: "该部分译自谷歌工程实践文档(Google Engineering Practices Documentation)。代码评审也称代码复查，是指通过阅读代码来检查源代码与编码标准的符合性以及代码质量的活动。",
    section: ["简介",
        "代码评审标准",
        "代码评审要点",
        "在评审中如何查看 CL",
        "代码评审的速度",
        "如何编写代码评审的评论",
        "如何处理评审后程序员拒绝修改的情况",
        "写出好的 CL",
        "小型 CL",
        "如何处理评审人员的评论",
    ],
    chapter: {
        "简介": [0],
        "代码评审者指南": [1, 2, 3, 4, 5, 6],
        "代码开发者指南": [7, 8, 9],
    }
};
//FreeCodeCamp
export let freeCodeCamp = {
    name: "freecodecamp",
    title: "FreeCodeCamp",
    baseHref: "/freecodecamp",
    component: "FreeCodeCamp",
    description: "FreeCodeCamp 学习笔记",
    img: "freecodecamp.png",
    content: "Github 上 stars 最多的项目，免费编码学习社区。",
    section: [
        "简介",
        "var() 变量",
        "linear-gradient() 渐变色",
        "scale() 缩放",
        "skew() 倾斜",
        "animation 动画",
        "@keyframes 关键帧",
        "html 的可访问性",
        "css 的可访问性",
        "链接的可访问性",
        "使用 tabindex",
        "grid 布局(一)",
        "grid 布局(二)",
        "reduce()",
    ],
    chapter: {
        "简介": [0],
        "CSS 篇": [1, 2, 3, 4, 5, 6, 11, 12],
        "HTML 篇": [],
        "JS篇":[13],
        "可访问性": [7, 8, 9, 10]
    }
};
//问题汇总
export let proplemData = {
    name: "proplem",
    title: "问题汇总",
    baseHref: "/problem",
    component: "Problem",
    description: "开发中遇到的问题",
    img: "problem.jpg",
    content: "用来记录开发中遇到的各种问题。",
    section: [
        "react-router 问题",
        "无法设置对象属性",
    ],
    chapter: {
        "React 篇": [0],
        "JS 篇": [1],
    }
};

export let totalData = [myblogData, gojsData, codeReview, freeCodeCamp, proplemData];