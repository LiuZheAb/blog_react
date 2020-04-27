import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JS',
    readOnly: true,
};
let code1 = `/*定义一个人类*/  
function Person(name,age)  
{  
    this.name=name;  
    this.age=age;  
}  
/*定义一个学生类*/  
functionStudent(name,age,grade)  
{  
    Person.apply(this,arguments);  
    this.grade=grade;  
}  
//创建一个学生类  
var student=new Student("zhangsan",21,"一年级");  
//测试  
alert("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);  
//大家可以看到测试结果name:zhangsan age:21  grade:一年级  
//学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.  
`;
let code2 = `vararr1=new Array("1","2","3");  
  
vararr2=new Array("4","5","6");  
  
Array.prototype.push.apply(arr1,arr2);`;
let code3=`var myArr=new Array()

function fillRnd(arrLen){  //填入 arrLen个1-10的随机数字到数组
    for(var i=0,arr=[];i<arrLen;i++){
        arr[i]=Math.ceil(Math.random()*10)
    }
    return arr
}

function getMax(arr){
    var arrLen=arr.length;
    for(var i=0,ret=arr[0];i<arrLen;i++){
        ret=Math.max(ret,arr[i]);       
    }
    return ret;
}

function getMax2(arr){
    return Math.max.apply(null,arr)
}


myArr=fillRnd(20*10000)  //生成20万个随机数填到数组

var t1=new Date()
var max1=getMax(myArr)
var t2=new Date()
var max2=getMax2(myArr)
var t3=new Date()

if (max1!==max2) alert("error")
alert([t3-t2,t2-t1])   //在我机器上 96,464 .不同的机器,结果可能有差异`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>apply()</h1>
                    </div>
                    <div className="article-content">
                        <p>本文转载自<a href="https://www.cnblogs.com/chenhuichao/p/8493095.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/chenhuichao/p/8493095.html</a></p>
                        <h2>概述</h2>
                        <ol>
                            <li>apply 和 call 的区别在哪里</li>
                            <li>什么情况下用 apply,什么情况下用 call</li>
                            <li>apply 的其他巧妙用法（一般在什么情况下可以使用 apply）</li>
                        </ol>
                        <h2>定义</h2>
                        <p>apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.</p>
                        <ul>
                            <li>Function.apply(obj,args)方法能接收两个参数</li>
                            <li>obj：这个对象将代替 Function 类里 this 对象</li>
                            <li>args：这个是数组，它将作为参数传给 Function（args-->arguments）</li>
                        </ul>
                        <p>call:和apply的意思一样,只不过是参数列表不一样.</p>
                        <ul>
                            <li>Function.call(obj,[param1[,param2[,…[,paramN]]]])</li>
                            <li>obj：这个对象将代替 Function 类里 this 对象</li>
                            <li>params：这个是一个参数列表</li>
                        </ul>
                        <h2>apply 示例</h2>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <p>分析: Person.apply(this,arguments);</p>
                        <p>this:在创建对象在这个时候代表的是 student</p>
                        <p>arguments:是一个数组,也就是[“zhangsan”,”21”,”一年级”];</p>
                        <p>通俗一点讲就是:用 student 去执行 Person 这个类里面的内容,在 Person 这个类里面存在 this.name 等之类的语句,这样就将属性创建到了 student 对象里面</p>
                        <h2>call 示例</h2>
                        <p>在 Studen 函数里面可以将 apply 中修改成如下:</p>
                        <p>Person.call(this,name,age);</p>
                        <p>这样就 ok 了</p>
                        <h2>什么情况下用 apply,什么情况下用call</h2>
                        <p>在给对象参数的情况下,如果参数的形式是数组的时候,比如 apply 示例里面传递了参数 arguments,这个参数是数组类型,并且在调用 Person 的时候参数的列表是对应一致的(也就是 Person 和 Student 的参数列表前两位是一致的) 就可以采用 apply , 如果我的 Person 的参数列表是这样的(age,name),而 Student 的参数列表是(name,age,grade),这样就可以用 call 来实现了,也就是直接指定参数列表对应值的位置(Person.call(this,age,name,grade));</p>
                        <h2>apply的一些其他巧妙用法</h2>
                        <p>细心的人可能已经察觉到,在我调用 apply 方法的时候,第一个参数是对象(this), 第二个参数是一个数组集合, 在调用 Person 的时候,他需要的不是一个数组,但是为什么他给我一个数组我仍然可以将数组解析为一个一个的参数,这个就是 apply 的一个巧妙的用处,可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3) 这个如果让我们用程序来实现将数组的每一个项,来装换为参数的列表,可能都得费一会功夫,借助 apply 的这点特性,所以就有了以下高效率的方法:</p>
                        <h3>Math.max 可以实现得到数组中最大的一项</h3>
                        <p>因为 Math.max 参数里面不支持 Math.max([param1,param2]) 也就是数组</p>
                        <p>但是它支持 Math.max(param1,param2,param3…),所以可以根据刚才 apply 的那个特点来解决 var max=Math.max.apply(null,array),这样轻易的可以得到一个数组中最大的一项(apply 会将一个数组装换为一个参数接一个参数的传递给方法)</p>
                        <p>这块在调用的时候第一个参数给了一个 null,这个是因为没有对象去调用这个方法,我只需要用这个方法帮我运算,得到返回的结果就行,.所以直接传递了一个 null 过去</p>
                        <h3>Math.min 可以实现得到数组中最小的一项</h3>
                        <p>同样和 max 是一个思想 var min=Math.min.apply(null,array);</p>
                        <h3>Array.prototype.push 可以实现两个数组合并</h3>
                        <p>同样 push 方法没有提供 push 一个数组,但是它提供了push(param1,param,…paramN) 所以同样也可以通过 apply 来装换一下这个数组,即:</p>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <p>也可以这样理解,arr1 调用了 push 方法,参数是通过 apply 将数组装换为参数列表的集合.</p>
                        <p>通常在什么情况下,可以使用 apply 类似 Math.min 等之类的特殊用法:</p>
                        <div className="tip">
                            <div className="tip-content">
                                一般在目标函数只需要 n 个参数列表,而不接收一个数组的形式（[param1[,param2[,…[,paramN]]]]）,可以通过 apply 的方式巧妙地解决这个问题!
                            </div>
                        </div>
                        <h2>性能测试</h2>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <p>通过 20 万个数据的比较， getMax2 时间为 96ms 而 getmax 时间为 464ms。两者相差 5 倍</p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
