import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JS',
    readOnly: true,
};
let code1 = `let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, "some text" ]
let o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o 指向的是不同的对象，所以没问题

mySet.has(1); // true
mySet.has(3); // false
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5);  // true,  从set中移除5
mySet.has(5);     // false, 5已经被移除

mySet.size; // 4, 刚刚移除一个值
console.log(mySet); // Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}`;
let code2 = `// 迭代整个set
// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet.keys()) console.log(item);
 
// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet.values()) console.log(item);

// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
//(键与值相等)
for (let [key, value] of mySet.entries()) console.log(key);

// 使用 Array.from 转换Set为Array 
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// 如果在HTML文档中工作，也可以：
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// Set 和 Array互换
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// 可以通过如下代码模拟求交集 
let intersection = new Set([...set1].filter(x => set2.has(x)));

// 可以通过如下代码模拟求差集
let difference = new Set([...set1].filter(x => !set2.has(x)));

// 用forEach迭代
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4`;
let code3 = `function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}

function difference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

//Examples
let setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
difference(setA, setC); // => Set [1, 2]`;
let code4 = `let myArray = ["value1", "value2", "value3"];

// 用Set构造器将Array转换为Set
let mySet = new Set(myArray);

mySet.has("value1"); // returns true

// 用...(展开操作符)操作符将Set转换为Array
console.log([...mySet]); // 与myArray完全一致`;
let code5 = `// Use to remove duplicate elements from the array 
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]) 
// [2, 3, 4, 5, 6, 7, 32]`;
let code6 = `let text = 'India';

let mySet = new Set(text);  // Set {'I', 'n', 'd', 'i', 'a'}
mySet.size;  // 5`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>Set 对象</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p>Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</p>
                        <h2>语法</h2>
                        <CodeMirror value={`new Set([iterable]);`} options={codeMirrorOptions} />
                        <h3>参数</h3>
                        <p><b>iterable</b></p>
                        <p>如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的 Set 中。如果不指定此参数或其值为 null，则新的 Set 为空。</p>
                        <h3>返回值</h3>
                        <p>一个新的 Set 对象。</p>
                        <h2>简述</h2>
                        <p>Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。</p>
                        <h3>值的相等</h3>
                        <p>因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。在 ECMAScript 规范的早期版本中，这不是基于和===操作符中使用的算法相同的算法。具体来说，对于 Set s， +0 （+0 严格相等于-0）和 -0 是不同的值。然而，在 ECMAScript 2015 规范中这点已被更改。有关详细信息，请参阅浏览器兼容性 表中的“Key equality for -0 and 0”。</p>
                        <p>另外，NaN 和 undefined 都可以被存储在 Set 中， NaN 之间被视为相同的值（NaN 被认为是相同的，尽管 NaN !== NaN）。</p>
                        <h2>属性</h2>
                        <p><b>Set.size</b></p>
                        <p>size 属性的默认值为 0。</p>
                        <p><b>get Set[@@species]</b></p>
                        <p>构造函数用来创建派生对象.</p>
                        <p><b>Set.prototype</b></p>
                        <p>表示 Set 构造器的原型，允许向所有 Set 对象添加新的属性。</p>
                        <h2>Set实例</h2>
                        <p>所有 Set 实例继承自 Set.prototype。</p>
                        <h3>属性</h3>
                        <p><b>Set.prototype.constructor</b></p>
                        <p>返回实例的构造函数。默认情况下是 Set。</p>
                        <p><b>Set.prototype.size</b></p>
                        <p>返回 Set 对象的值的个数。</p>
                        <h3>方法</h3>
                        <p><b>Set.prototype.add(value)</b></p>
                        <p>在 Set 对象尾部添加一个元素。返回该 Set 对象。</p>
                        <p><b>Set.prototype.clear()</b></p>
                        <p>移除 Set 对象内的所有元素。</p>
                        <p><b>Set.prototype.delete(value)</b></p>
                        <p>移除 Set 的中与这个值相等的元素，返回 Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回 true，否则返回 false）。Set.prototype.has(value)在此后会返回 false。</p>
                        <p><b>Set.prototype.entries()</b></p>
                        <p>返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和 Map 对象保持相似， 每个值的键和值相等。</p>
                        <p><b>Set.prototype.forEach(callbackFn[, thisArg])</b></p>
                        <p>按照插入顺序，为 Set 对象中的每一个值调用一次 callBackFn。如果提供了 thisArg 参数，回调中的 this 会是这个参数。</p>
                        <p><b>Set.prototype.has(value)</b></p>
                        <p>返回一个布尔值，表示该值在 Set 中存在与否。</p>
                        <p><b>Set.prototype.keys()</b></p>
                        <p>与 values()方法相同，返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。</p>
                        <p><b>Set.prototype.values()</b></p>
                        <p>返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。</p>
                        <p><b>Set.prototype[@@iterator]()</b></p>
                        <p>返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。</p>
                        <h2>示例</h2>
                        <h3>使用 Set 对象</h3>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <h3>迭代 Set</h3>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <h3>实现基本集合操作</h3>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <h3>Array 相关</h3>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <h3>数组去重</h3>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <h3>String 相关</h3>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
