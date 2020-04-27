import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JS',
    readOnly: true,
};
let code1 = `var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() 没有初始值
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce; 这是更好的方案，即使传入空数组或更大数组也可正常执行
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );`;
let code2 = `[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
});`;
let code3 = `var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// 和为 6`;
let code4 = `var total = [ 0, 1, 2, 3 ].reduce(
    ( acc, cur ) => acc + cur,
    0
);`;
let code5 = `var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6`;
let code6 = `var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6`;
let code7 = `var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
);
// flattened is [0, 1, 2, 3, 4, 5]`;
let code8 = `var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( acc, cur ) => acc.concat(cur),
    []
);`;
let code9 = `var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }`;
let code10 = `var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
  
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
  
var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }`;
let code11 = `// friends - 对象数组
// where object field "books" - list of favorite books 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
    return [...prev, ...curr.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]`;
let code12 = `var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
var myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator
}, [])

console.log(myOrderedArray);`;
let code13 = `let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current) => {
    if(init.length === 0 || init[init.length-1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]`;
let code14 = `function runPromiseInSequence(arr, input) {
    return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
    );
}
  
// promise function 1
function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    });
}
  
  // promise function 2
function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    });
}
  
// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
   return a * 3;
}
  
  // promise function 4
function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    });
}
  
const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
    .then(console.log);   // 1200`;
let code15 = `// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240`;
let code16 = `if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg) {
        return this.reduce(function(mappedArray, currentValue, index, array) {
            mappedArray[index] = callback.call(thisArg, currentValue, index, array);
            return mappedArray;
        }, []);
    };
}
  
[1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]`;
export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>reduce()</h1>
                    </div>
                    <div className="article-content">
                        <p>reduce() 方法对数组中的每个元素执行一个 reducer 函数(升序执行)，将其结果汇总为单个返回值。</p>
                        <p><b>reducer</b> 函数接收4个参数:</p>
                        <ol>
                            <li>Accumulator (acc) (累计器)</li>
                            <li>Current Value (cur) (当前值)</li>
                            <li>Current Index (idx) (当前索引)</li>
                            <li>Source Array (src) (源数组)</li>
                        </ol>
                        <p><b>reducer</b> 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。</p>
                        <h2>语法</h2>
                        <div className="tip">
                            <div className="tip-content">
                                arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
                            </div>
                        </div>
                        <h3>参数</h3>
                        <p><b>callback</b></p>
                        <p>执行数组中每个值 (如果没有提供 initialValue 则第一个值除外)的函数，包含四个参数：</p>
                        <p><b>accumulator</b></p>
                        <p>累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或 initialValue（见下方）。</p>
                        <p><b>currentValue</b></p>
                        <p>数组中正在处理的元素。</p>
                        <p><b>index</b><span className="tag">可选</span></p>
                        <p>数组中正在处理的当前元素的索引。 如果提供了 initialValue，则起始索引号为 0，否则从索引 1 起始。</p>
                        <p><b>array</b><span className="tag">可选</span></p>
                        <p>调用 reduce()的数组</p>
                        <p><b>initialValue</b></p>
                        <p>作为第一次调用 callback 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。</p>
                        <h3>返回值</h3>
                        <p>函数累计处理的结果</p>
                        <h2>描述</h2>
                        <p>reduce 为数组中的每一个元素依次执行 callback 函数，不包括数组中被删除或从未被赋值的元素。</p>
                        <p>回调函数第一次执行时，accumulator 和 currentValue 的取值有两种情况：如果调用 reduce()时提供了 initialValue，accumulator 取值为 initialValue，currentValue 取数组中的第一个值；如果没有提供 initialValue，那么 accumulator 取数组中的第一个值，currentValue 取数组中的第二个值。</p>
                        <p>如果数组为空且没有提供 initialValue，会抛出 TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供 initialValue， 或者有提供 initialValue 但是数组为空，那么此唯一值将被返回并且 callback 不会被执行。</p>
                        <p>提供初始值通常更安全，正如下面的例子，如果没有提供initialValue，则可能有三种输出：</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <h2>reduce() 如何运行</h2>
                        <p>假如运行下段 reduce()代码：</p>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <h2>reduce() 如何运行</h2>
                        <p>callback 被调用四次，每次调用的参数和返回值如下表：</p>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col"><code>callback</code></th>
                                    <th scope="col"><code>accumulator</code></th>
                                    <th scope="col"><code>currentValue</code></th>
                                    <th scope="col"><code>currentIndex</code></th>
                                    <th scope="col"><code>array</code></th>
                                    <th scope="col">return value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">first call</th>
                                    <td><code>0</code></td>
                                    <td><code>1</code></td>
                                    <td><code>1</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>1</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">second call</th>
                                    <td><code>1</code></td>
                                    <td><code>2</code></td>
                                    <td><code>2</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>3</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">third call</th>
                                    <td><code>3</code></td>
                                    <td><code>3</code></td>
                                    <td><code>3</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>6</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">fourth call</th>
                                    <td><code>6</code></td>
                                    <td><code>4</code></td>
                                    <td><code>4</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>10</code></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>由 reduce 返回的值将是最后一次回调返回值（10）。</p>
                        <p>还可以使用箭头函数的形式，下面的代码会输出跟前面一样的结果</p>
                        <CodeMirror value={`[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr );`} options={codeMirrorOptions} />
                        <p>如果你打算提供一个初始值作为 reduce()方法的第二个参数，以下是运行过程及结果：</p>
                        <CodeMirror value={`[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => { return accumulator + currentValue; }, 10 );`} options={codeMirrorOptions} />
                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col"><code>callback</code></th>
                                    <th scope="col"><code>accumulator</code></th>
                                    <th scope="col"><code>currentValue</code></th>
                                    <th scope="col"><code>currentIndex</code></th>
                                    <th scope="col"><code>array</code></th>
                                    <th scope="col">return value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">first call</th>
                                    <td><code>10</code></td>
                                    <td><code>0</code></td>
                                    <td><code>0</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>10</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">second call</th>
                                    <td><code>10</code></td>
                                    <td><code>1</code></td>
                                    <td><code>1</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>11</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">third call</th>
                                    <td><code>11</code></td>
                                    <td><code>2</code></td>
                                    <td><code>2</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>13</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">fourth call</th>
                                    <td><code>13</code></td>
                                    <td><code>3</code></td>
                                    <td><code>3</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>16</code></td>
                                </tr>
                                <tr>
                                    <th scope="row">fifth call</th>
                                    <td><code>16</code></td>
                                    <td><code>4</code></td>
                                    <td><code>4</code></td>
                                    <td><code>[0, 1, 2, 3, 4]</code></td>
                                    <td><code>20</code></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>这种情况下 reduce()返回的值是 20。</p>
                        <h2>例子</h2>
                        <h3>数组里所有值的和</h3>
                        <CodeMirror value={code3} options={codeMirrorOptions} />
                        <p>箭头函数的形式：</p>
                        <CodeMirror value={code4} options={codeMirrorOptions} />
                        <h3>累加对象数组里的值</h3>
                        <p>要累加对象数组中包含的值，必须提供初始值，以便各个item正确通过你的函数。</p>
                        <CodeMirror value={code5} options={codeMirrorOptions} />
                        <p>箭头函数的形式：</p>
                        <CodeMirror value={code6} options={codeMirrorOptions} />
                        <h3>将二维数组转化为一维</h3>
                        <CodeMirror value={code7} options={codeMirrorOptions} />
                        <p>箭头函数的形式：</p>
                        <CodeMirror value={code8} options={codeMirrorOptions} />
                        <h3>计算数组中每个元素出现的次数</h3>
                        <CodeMirror value={code9} options={codeMirrorOptions} />
                        <h3>按属性对 object 分类</h3>
                        <CodeMirror value={code10} options={codeMirrorOptions} />
                        <h3>使用扩展运算符和 initialValue 绑定包含在对象数组中的数组</h3>
                        <CodeMirror value={code11} options={codeMirrorOptions} />
                        <h3>数组去重</h3>
                        <CodeMirror value={code12} options={codeMirrorOptions} />
                        <CodeMirror value={code13} options={codeMirrorOptions} />
                        <h3>按顺序运行 Promise</h3>
                        <CodeMirror value={code14} options={codeMirrorOptions} />
                        <h3>功能型函数管道</h3>
                        <CodeMirror value={code15} options={codeMirrorOptions} />
                        <h3>使用 reduce 实现 map</h3>
                        <CodeMirror value={code16} options={codeMirrorOptions} />
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
