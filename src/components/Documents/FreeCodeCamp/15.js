import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JS',
    readOnly: true,
};
let code1 = `var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4（已完成）提案中的特性
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}`;
let code2 = `var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2`;
let code3 = `var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"`;
let code4 = `var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2`;
let code5 = `var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7`;
let code6 = `var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1`;
let code7 = `function f() {
    return [1, 2];
}
  
var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2`;
let code8 = `function f() {
    return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3`;
let code9 = `var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]`;
let code10 = `var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma`;
let code11 = `function parseProtocol(url) { 
var parsedURL = /^(\\w+)\\:\\/\\/([^\\/]+)\\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

    var [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"`;
let code12 = `var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true`;
let code13 = `var a, b;

({a, b} = {a: 1, b: 2});`;
let code14 = `var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true `;
let code15 = `var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5`;
let code16 = `var {a:aa = 10, b:bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5`;
let code17 = `function drawES5Chart(options) {
    options = options === undefined ? {} : options;
    var size = options.size === undefined ? 'big' : options.size;
    var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
    var radius = options.radius === undefined ? 25 : options.radius;
    console.log(size, cords, radius);
    // now finally do some chart drawing
}

drawES5Chart({
    cords: { x: 18, y: 30 },
    radius: 30
});`;
let code18 = `function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
    console.log(size, cords, radius);
    // do some chart drawing
}

drawES6Chart({
    cords: { x: 18, y: 30 },
    radius: 30
});`;
let code19 = `const metadata = {
    title: 'Scratchpad',
    translations: [
        {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename
    translations: [
        {
            title: localeTitle, // rename
        },
    ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"`;
let code20 = `var people = [
    {
        name: 'Mike Smith',
        family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
        },
        age: 25
    }
];

for (var {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"`;
let code21 = `function userId({id}) {
    return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(displayName + " is " + name);
}

var user = { 
    id: 42, 
    displayName: "jdoe",
    fullName: { 
        firstName: "John",
        lastName: "Doe"
    }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"`;
let code22 = `let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"`;
let code23 = `let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }`;
let code24 = `const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"`;
let code25 = `// 声明对象 和 自身 self 属性
var obj = {self: '123'};
// 在原型链中定义一个属性 prot
obj.__proto__.prot = '456';
// test
const {self, prot} = obj;
// self "123"
// prot "456"（访问到了原型链）`;
export default class index extends Component {
    render() {
        console.log(typeof(""+1))
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>解构赋值</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p>解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。</p>
                        <h2>语法</h2>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <h2>描述</h2>
                        <p>对象和数组逐个对应表达式，或称对象字面量和数组字面量，提供了一种简单的定义一个特定的数据组的方法。</p>
                        <CodeMirror value={`var x = [1, 2, 3, 4, 5];`} options={codeMirrorOptions} />
                        <p>解构赋值使用了相同的语法，不同的是在表达式左边定义了要从原变量中取出什么变量。</p>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <p>JavaScript 中，解构赋值的作用类似于 Perl 和 Python 语言中的相似特性。</p>
                        <h2>解构数组</h2>
                        <h3>变量声明并赋值时的解构</h3>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <h3>变量先声明后赋值时的解构</h3>
                        <p>通过解构分离变量的声明，可以为一个变量赋值。</p>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <h3>默认值</h3>
                        <p>为了防止从数组中取出一个值为 undefined 的对象，可以在表达式左边的数组中为任意对象预设默认值。</p>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <h3>交换变量</h3>
                        <p>在一个解构表达式中可以交换两个变量的值。</p>
                        <p>没有解构赋值的情况下，交换两个变量需要一个临时变量。</p>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                        <h3>解析一个从函数返回的数组</h3>
                        <p>从一个函数返回一个数组是十分常见的情况。解构使得处理返回值为数组时更加方便。</p>
                        <p>在下面例子中，要让 [1, 2] 成为函数的 f() 的输出值，可以使用解构在一行内完成解析。</p>
                        <CodeMirror value={code7} options={codeMirrorOptions} />
                        <h3>忽略某些返回值</h3>
                        <p>你也可以忽略你不感兴趣的返回值：</p>
                        <CodeMirror value={code8} options={codeMirrorOptions} />
                        <p>你也可以忽略全部返回值：</p>
                        <CodeMirror value={`[,,] = f();`} options={codeMirrorOptions} />
                        <h3>将剩余数组赋值给一个变量</h3>
                        <p>当解构一个数组时，可以使用剩余模式，将数组剩余部分赋值给一个变量。</p>
                        <CodeMirror value={code9} options={codeMirrorOptions} />
                        <p>注意：如果剩余元素右侧有逗号，会抛出 SyntaxError，因为剩余元素必须是数组的最后一个元素。</p>
                        <CodeMirror value={code10} options={codeMirrorOptions} />
                        <h3>用正则表达式匹配提取值</h3>
                        <p>用正则表达式的 exec() 方法匹配字符串会返回一个数组，该数组第一个值是完全匹配正则表达式的字符串，然后的值是匹配正则表达式括号内内容部分。解构赋值允许你轻易地提取出需要的部分，忽略完全匹配的字符串——如果不需要的话。</p>
                        <CodeMirror value={code11} options={codeMirrorOptions} />
                        <h2>解构对象</h2>
                        <h3>基本赋值</h3>
                        <CodeMirror value={code12} options={codeMirrorOptions} />
                        <h3>无声明赋值</h3>
                        <p>一个变量可以独立于其声明进行解构赋值。</p>
                        <CodeMirror value={code13} options={codeMirrorOptions} />
                        <div className="tip">
                            <div className="tip-content">
                                <p>注意：赋值语句周围的圆括号 ( ... ) 在使用对象字面量无声明解构赋值时是必须的。</p>
                                <p>{`{a, b} = {a: 1, b: 2} 不是有效的独立语法，因为左边的 {a, b} 被认为是一个块而不是对象字面量。`}</p>
                                <p>{`然而，({a, b} = {a: 1, b: 2}) 是有效的，正如 var {a, b} = {a: 1, b: 2}`}</p>
                                <p>你的 ( ... ) 表达式之前需要有一个分号，否则它可能会被当成上一行中的函数执行。</p>
                            </div>
                        </div>
                        <h3>给新的变量名赋值</h3>
                        <p>可以从一个对象中提取变量并赋值给和对象属性名不同的新的变量名。</p>
                        <CodeMirror value={code14} options={codeMirrorOptions} />
                        <h3>默认值</h3>
                        <p>变量可以先赋予默认值。当要提取的对象没有对应的属性，变量就被赋予默认值。</p>
                        <CodeMirror value={code15} options={codeMirrorOptions} />
                        <h3>给新的变量命名并提供默认值</h3>
                        <p>一个属性可以同时 1）从一个对象解构，并分配给一个不同名称的变量 2）分配一个默认值，以防未解构的值是 undefined。</p>
                        <CodeMirror value={code16} options={codeMirrorOptions} />
                        <h3>函数参数默认值</h3>
                        <p><b>ES5 版本</b></p>
                        <CodeMirror value={code17} options={codeMirrorOptions} />
                        <p><b>ES6 版本</b></p>
                        <CodeMirror value={code18} options={codeMirrorOptions} />
                        <div className="tip">
                            <div className="tip-content">
                                <p>{`在上面的 drawES6Chart 的函数中，解构的左边被分配给右边的空对象字面值：{size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}。你也可以在没有右侧分配的情况下编写函数。但是，如果你忽略了右边的赋值，那么函数会在被调用的时候查找至少一个被提供的参数，而在当前的形式下，你可以直接调用 drawES6Chart() 而不提供任何参数。如果你希望能够在不提供任何参数的情况下调用该函数，则当前的设计非常有用，而另一种方法在您确保将对象传递给函数时非常有用。`}</p>
                            </div>
                        </div>
                        <h3>解构嵌套对象和数组</h3>
                        <CodeMirror value={code19} options={codeMirrorOptions} />
                        <h3>For of 迭代和解构</h3>
                        <CodeMirror value={code20} options={codeMirrorOptions} />
                        <h3>从作为函数实参的对象中提取数据</h3>
                        <CodeMirror value={code21} options={codeMirrorOptions} />
                        <p>这段代码从 user 对象中提取并输出 id、displayName 和 firstName。</p>
                        <h3>对象属性计算名和解构</h3>
                        <p>计算属性名，如 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names" target="_blank" rel="noopener noreferrer">object literals</a>，可以被解构。</p>
                        <CodeMirror value={code22} options={codeMirrorOptions} />
                        <h3>对象解构中的 Rest</h3>
                        <p>Rest/Spread Properties for ECMAScript 提案（阶段 4）将 rest 语法添加到解构中。Rest 属性收集那些尚未被解构模式拾取的剩余可枚举属性键。</p>
                        <CodeMirror value={code23} options={codeMirrorOptions} />
                        <h3>无效的 JavaScript 标识符作为属性名称</h3>
                        <p>通过提供有效的替代标识符，解构可以与不是有效的 JavaScript 标识符的属性名称一起使用。</p>
                        <CodeMirror value={code24} options={codeMirrorOptions} />
                        <h3>解构对象时会查找原型链</h3>
                        <p>如果属性不在对象自身，将从原型链中查找</p>
                        <CodeMirror value={code25} options={codeMirrorOptions} />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
