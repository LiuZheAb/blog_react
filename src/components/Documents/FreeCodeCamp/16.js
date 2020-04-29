import React, { Component } from 'react';
import Directory from "../../Directory";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';

let codeMirrorOptions = {
    theme: 'monokai',
    mode: 'JS',
    readOnly: true,
};

let code1 = `/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');`;
let code2 = `var re = new RegExp("\\\\w+");
var re = /\\w+/;`;

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>正则表达式</h1>
                    </div>
                    <div className="article-content">
                        <h2>概述</h2>
                        <p>RegExp 构造函数创建了一个正则表达式对象，用于将文本与一个模式匹配。</p>
                        <h2>语法</h2>
                        <h3>参数</h3>
                        <p><b>pattern</b></p>
                        <p className="indent-2">正则表达式的文本。</p>
                        <p><b>flags</b></p>
                        <p className="indent-2">如果指定，标志可以具有以下值的任意组合：</p>
                        <div style={{ paddingLeft: "2em" }}>
                            <p><b>g</b></p>
                            <p className="indent-2">全局匹配;找到所有匹配，而不是在第一个匹配后停止</p>
                            <p><b>i</b></p>
                            <p className="indent-2">忽略大小写</p>
                            <p><b>m</b></p>
                            <p className="indent-2">多行; 将开始和结束字符（^ 和 $）视为在多行上工作（也就是，分别匹配每一行的开始和结束（由 \n 或 \r 分割），而不只是只匹配整个输入字符串的最开始和最末尾处。</p>
                            <p><b>u</b></p>
                            <p className="indent-2">Unicode; 将模式视为 Unicode 序列点的序列</p>
                            <p><b>y</b></p>
                            <p className="indent-2">粘性匹配; 仅匹配目标字符串中此正则表达式的 lastIndex 属性指示的索引(并且不尝试从任何后续的索引匹配)。</p>
                            <p><b>s</b></p>
                            <p className="indent-2">dotAll 模式，匹配任何字符（包括终止符 '\n'）。</p>
                        </div>
                        <h2>描述</h2>
                        <p>有两种方法来创建一个 RegExp 对象：一是字面量、二是构造函数。要指示字符串，字面量的参数不使用引号，而构造函数的参数使用引号。因此，以下表达式创建相同的正则表达式：</p>
                        <CodeMirror value={code1} options={codeMirrorOptions} />
                        <p>当表达式被赋值时，字面量形式提供正则表达式的编译（compilation）状态，当正则表达式保持为常量时使用字面量。例如当你在循环中使用字面量构造一个正则表达式时，正则表达式不会在每一次迭代中都被重新编译（recompiled）。</p>
                        <p>而正则表达式对象的构造函数，如 new RegExp('ab+c') 提供了正则表达式运行时编译（runtime compilation）。如果你知道正则表达式模式将会改变，或者你事先不知道什么模式，而是从另一个来源获取，如用户输入，这些情况都可以使用构造函数。</p>
                        <p>从 ECMAScript 6开始，当第一个参数为正则表达式而第二个标志参数存在时，new RegExp(/ab+c/, 'i')不再抛出 TypeError （“当从其他正则表达式进行构造时不支持标志”）的异常，取而代之，将使用这些参数创建一个新的正则表达式。</p>
                        <p>当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）。比如，以下是等价的：</p>
                        <CodeMirror value={code2} options={codeMirrorOptions} />
                        <h2>正则表达式中特殊字符的含义</h2>
                        <h3>字符类别（Character Classes）</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>字符</th>
                                    <th>含义</th>
                                </tr>
                            </thead>
                            <tbody className="no-break">
                                <tr>
                                    <td><code>.</code></td>
                                    <td>
                                        <p>(点号，小数点) 匹配任意单个字符，但是行结束符除外：<code>\n</code>&nbsp;<code>\r</code>&nbsp;<code>\u2028</code>&nbsp;或&nbsp;<code>\u2029</code>。</p>
                                        <p>在字符集中，点( . )失去其特殊含义，并匹配一个字面点( . )。</p>
                                        <p>需要注意的是，<code>m</code>&nbsp;多行（multiline）标志不会改变点号的表现。因此为了匹配多行中的字符集，可使用<code>[^]</code>&nbsp;（当然你不是打算用在旧版本 IE 中），它将会匹配任意字符，包括换行符。</p>
                                        <p>例如，<code>/.y/</code>&nbsp;匹配 "yes make my day" 中的&nbsp;"my" 和 "ay"，但是不匹配 "yes"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\d</code></td>
                                    <td>
                                        <p>匹配任意阿拉伯数字。等价于<code>[0-9]</code>。</p>
                                        <p>例如，<code>/\d/</code>&nbsp;或&nbsp;<code>/[0-9]/</code>&nbsp;匹配 "B2 is the suite number." 中的&nbsp;'2'。&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\D</code></td>
                                    <td>
                                        <p>匹配任意一个不是阿拉伯数字的字符。等价于<code>[^0-9]</code>。</p>
                                        <p>例如，<code>/\D/</code>&nbsp;或&nbsp;<code>/[^0-9]/</code>&nbsp;匹配 "B2 is the suite number." 中的&nbsp;'B'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\w</code></td>
                                    <td>
                                        <p>匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于&nbsp;<code>[A-Za-z0-9_]</code>。</p>
                                        <p>例如，<code>/\w/</code>&nbsp;匹配 "apple" 中的 'a'，"$5.28" 中的 '5' 和 "3D" 中的 '3'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\W</code></td>
                                    <td>
                                        <p>匹配任意不是基本拉丁字母表中单词（字母数字下划线）字符的字符。等价于&nbsp;<code>[^A-Za-z0-9_]</code>。</p>
                                        <p>例如，<code>/\W/</code>&nbsp;或&nbsp;<code>/[^A-Za-z0-9_]/</code>&nbsp;匹配 "50%" 中的 '%'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\s</code></td>
                                    <td>
                                        <p>匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。</p>
                                        <p>等价于&nbsp;<code>[ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​ \u3000]。</code></p>
                                        <p>例如&nbsp;<code>/\s\w*/</code>&nbsp;匹配 "foo bar" 中的 ' bar'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\S</code></td>
                                    <td>
                                        <p>匹配一个非空白符。等价于&nbsp;<code><code>[^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​&nbsp;\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]</code></code>。</p>
                                        <p>例如，<code>/\S\w*/</code>&nbsp;匹配 "foo bar" 中的 'foo'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\t</code></td>
                                    <td>匹配一个水平制表符（tab）</td>
                                </tr>
                                <tr>
                                    <td><code>\r</code></td>
                                    <td>匹配一个回车符（carriage return）</td>
                                </tr>
                                <tr>
                                    <td><code>\n</code></td>
                                    <td>匹配一个换行符（linefeed）</td>
                                </tr>
                                <tr>
                                    <td><code>\v</code></td>
                                    <td>匹配一个垂直制表符（vertical tab）</td>
                                </tr>
                                <tr>
                                    <td><code>\f</code></td>
                                    <td>匹配一个换页符（form-feed）</td>
                                </tr>
                                <tr>
                                    <td><code>[\b]</code></td>
                                    <td>匹配一个退格符（backspace）（不要与&nbsp;<code>\b</code>&nbsp;混淆）</td>
                                </tr>
                                <tr>
                                    <td><code>\0</code></td>
                                    <td>匹配一个 NUL 字符。不要在此后面跟小数点。</td>
                                </tr>
                                <tr>
                                    <td><code>\c<em>X</em></code></td>
                                    <td>
                                        <p><code><em>X</em></code>&nbsp;是 A - Z 的一个字母。匹配字符串中的一个控制字符。</p>
                                        <p>例如，<code>/\cM/</code>&nbsp;匹配字符串中的 control-M。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\x<em>hh</em></code></td>
                                    <td>匹配编码为&nbsp;<code><em>hh</em></code>&nbsp;（两个十六进制数字）的字符。</td>
                                </tr>
                                <tr>
                                    <td><code>\u<em>hhhh</em></code></td>
                                    <td>匹配 Unicode 值为&nbsp;<code><em>hhhh</em></code>&nbsp;（四个十六进制数字）的字符。</td>
                                </tr>
                                <tr>
                                    <td><code>\</code></td>
                                    <td>
                                        <p>对于那些通常被认为字面意义的字符来说，表示下一个字符具有特殊用处，并且不会被按照字面意义解释。</p>
                                        <p>例如&nbsp;<code>/b/</code>&nbsp;匹配字符 'b'。在 b 前面加上一个反斜杠，即使用&nbsp;<code>/\b/</code>，则该字符变得特殊，以为这匹配一个单词边界。</p>
                                        <p><em>或</em></p>
                                        <p>对于那些通常特殊对待的字符，表示下一个字符不具有特殊用途，会被按照字面意义解释。</p>
                                        <p>例如，* 是一个特殊字符，表示匹配某个字符 0 或多次，如&nbsp;<code>/a*/</code>&nbsp;意味着 0 或多个 "a"。 为了匹配字面意义上的&nbsp;<code>*</code>&nbsp;，在它前面加上一个反斜杠，例如，<code>/a\*/</code>匹配 'a*'。</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>字符集合（Character Sets）</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>字符</th>
                                    <th>含义</th>
                                </tr>
                            </thead>
                            <tbody className="no-break">
                                <tr>
                                    <td><code>[xyz]</code></td>
                                    <td>
                                        <p>一个字符集合，也叫字符组。匹配集合中的任意一个字符。你可以使用连字符'-'指定一个范围。</p>
                                        <p>例如，[abcd] 等价于 [a-d]，匹配"brisket"中的'b'和"chop"中的'c'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>[^xyz]</code></td>
                                    <td>
                                        <p>一个反义或补充字符集，也叫反义字符组。也就是说，它匹配任意不在括号内的字符。你也可以通过使用连字符 '-' 指定一个范围内的字符。</p>
                                        <p>例如，<code>[^abc]</code>&nbsp;等价于&nbsp;<code>[^a-c]。</code>&nbsp;第一个匹配的是 "bacon" 中的'o' 和 "chop" 中的 'h'。</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>边界（Boundaries）</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>字符</th>
                                    <th>含义</th>
                                </tr>
                            </thead>
                            <tbody className="no-break">
                                <tr>
                                    <td><code>^</code></td>
                                    <td>
                                        <p>匹配输入开始。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符后的开始处。</p>
                                        <p>例如，<code>/^A/</code>&nbsp;不匹配 "an A" 中的 "A"，但匹配 "An A" 中的 "A"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>$</code></td>
                                    <td>
                                        <p>匹配输入结尾。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符的前的结尾处。</p>
                                        <p>例如，<code>/t$/</code>&nbsp;不匹配 "eater" 中的 "t"，但匹配 "eat" 中的 "t"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\b</code></td>
                                    <td>
                                        <p>匹配一个零宽单词边界（zero-width word boundary），如一个字母与一个空格之间。 （不要和&nbsp;<code>[\b]</code>&nbsp;混淆）</p>
                                        <p>例如，<code>/\bno/</code>&nbsp;匹配 "at noon" 中的 "no"，<code>/ly\b/</code>&nbsp;匹配 "possibly yesterday." 中的 "ly"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\B</code></td>
                                    <td>
                                        <p>匹配一个零宽非单词边界（zero-width non-word boundary），如两个字母之间或两个空格之间。</p>
                                        <p>例如，<code>/\Bon/</code>&nbsp;匹配 "at noon" 中的 "on"，<code>/ye\B/</code>&nbsp;匹配 "possibly yesterday." 中的 "ye"。</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>分组（Grouping）与反向引用（back references）</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>字符</th>
                                    <th>含义</th>
                                </tr>
                            </thead>
                            <tbody className="no-break">
                                <tr>
                                    <td><code>(<em>x</em>)</code></td>
                                    <td>
                                        <p>匹配&nbsp;<code><em>x</em></code>&nbsp;并且捕获匹配项。 这被称为捕获括号（capturing parentheses）。</p>
                                        <p>例如，<code>/(foo)/</code>&nbsp;匹配且捕获 "foo bar." 中的 "foo"。被匹配的子字符串可以在结果数组的元素&nbsp;<code>[1], ..., [n]</code>&nbsp;中找到，或在被定义的&nbsp;<code>RegExp</code>&nbsp;对象的属性&nbsp;<code>$1, ..., $9</code>&nbsp;中找到。</p>
                                        <p>捕获组（Capturing groups）有性能惩罚。如果不需再次访问被匹配的子字符串，最好使用非捕获括号（non-capturing parentheses），见下面。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>\<em>n</em></code></td>
                                    <td>
                                        <p><code><em>n</em></code>&nbsp;是一个正整数。一个反向引用（back reference），指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。</p>
                                        <p>例如，<code>{`/apple(,)\\sorange\\1/`}</code>&nbsp;匹配 "apple, orange, cherry, peach." 中的 "apple,orange,"。一个更全面的例子在该表格下面。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>(?:<em>x</em>)</code></td>
                                    <td>匹配&nbsp;<code><em>x</em></code>&nbsp;不会捕获匹配项。这被称为非捕获括号（non-capturing parentheses）。匹配项不能够从结果数组的元素&nbsp;<code>[1], ..., [n]</code>&nbsp;或已被定义的&nbsp;<code>RegExp</code>&nbsp;对象的属性&nbsp;<code>$1, ..., $9</code>&nbsp;再次访问到。</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>数量词（Quantifiers）</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>字符</th>
                                    <th>含义</th>
                                </tr>
                            </thead>
                            <tbody className="no-break">
                                <tr>
                                    <td style={{ minWidth: 84 }}><code><em>x</em>*</code></td>
                                    <td>
                                        <p>匹配前面的模式&nbsp;<em>x</em>&nbsp;0 或多次。</p>
                                        <p>例如，<code>/bo*/</code>&nbsp;匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>+</code></td>
                                    <td>
                                        <p>匹配前面的模式&nbsp;<em>x</em>&nbsp;1 或多次。等价于&nbsp;<code>{"{"}1,{"}"}</code>。</p>
                                        <p>例如，<code>/a+/</code>&nbsp;匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>*?</code><br /><code><em>x</em>+?</code></td>
                                    <td>
                                        <p>像上面的 * 和 + 一样匹配前面的模式&nbsp;<em>x</em>，然而匹配是最小可能匹配。</p>
                                        <p>例如，<code>/".*?"/</code>&nbsp;匹配 '"foo" "bar"' 中的 '"foo"'，而 * 后面没有 ? 时匹配 '"foo" "bar"'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>?</code></td>
                                    <td>
                                        <p>匹配前面的模式&nbsp;<em>x</em>&nbsp;0 或 1 次。</p>
                                        <p>例如，<code>/e?le?/</code>&nbsp;匹配 "angel" 中的 "el"，"angle" 中的 "le"。</p>
                                        <p>如果在数量词&nbsp;<code>*</code>、<code>+</code>、<code>?</code>&nbsp;或&nbsp;<code>{"{}"}</code>, 任意一个后面紧跟该符号（?），会使数量词变为非贪婪（ non-greedy） ，即匹配次数最小化。反之，默认情况下，是贪婪的（greedy），即匹配次数最大化。</p>
                                        <p>在使用于向前断言（lookahead assertions）时，见该表格中&nbsp;<code>(?=)、</code><code>(?!)</code>&nbsp;和&nbsp;<code>(?:)</code>&nbsp;的说明。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>|<em>y</em></code></td>
                                    <td>
                                        <p>匹配&nbsp;<code><em>x</em></code>&nbsp;或&nbsp;<code><em>y</em></code></p>
                                        <p>例如，<code>/green|red/</code>&nbsp;匹配 "green apple" 中的 ‘green'，"red apple." 中的 'red'。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>{"{"}<em>n</em>{"}"}</code></td>
                                    <td>
                                        <p><code><em>n</em></code>&nbsp;是一个正整数。前面的模式 <em>x</em>&nbsp;连续出现 n 次时匹配。</p>
                                        <p>例如，<code>/a{"{"}2{"}"}/</code>&nbsp;不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>\{"{"}<em>n</em>,{"}"}</code></td>
                                    <td>
                                        <p><code><em>n</em></code>&nbsp;是一个正整数。前面的模式&nbsp;<em>x</em>&nbsp;连续出现至少 n 次时匹配。</p>
                                        <p>例如，<code>/a{"{"}2,{"}"}/</code>&nbsp;不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>{"{"}<em>n</em>, <em>m</em>{"}"}</code></td>
                                    <td>
                                        <p><code><em>n</em></code>&nbsp;和&nbsp;<code><em>m</em></code>&nbsp;为正整数。前面的模式 x 连续出现至少 n 次，至多 m 次时匹配。</p>
                                        <p>例如，<code>/a{"{"}1, 3{"}"}/</code>&nbsp;不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>断言（Assertions），下面所有断言均只匹配 x, y 不参与匹配</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>字符</th>
                                    <th>含义</th>
                                </tr>
                            </thead>
                            <tbody className="no-break">
                                <tr>
                                    <td style={{ minWidth: 84 }}><code><em>x</em>(?=<em>y</em>)</code></td>
                                    <td>
                                        <p>仅匹配被y跟随的x。</p>
                                        <p>举个例子，<code>/Jack(?=Sprat)/</code>，如果"Jack"后面跟着sprat，则匹配之。</p>
                                        <p><code>/Jack(?=Sprat|Frost)/</code>&nbsp;，如果"Jack"后面跟着"Sprat"或者"Frost"，则匹配之。但是，"Sprat" 和"Frost" 都不会在匹配结果中出现。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code><em>x</em>(?!<em>y</em>)</code></td>
                                    <td>
                                        <p>仅匹配不被y跟随的x。</p>
                                        <p>举个例子，<code>/\d+(?!\.)/</code> 只会匹配不被点（.）跟随的数字。<br />
                                            <code>/\d+(?!\.)/.exec('3.141')&nbsp;</code>匹配"141"，而不是"3.141"</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>(?&lt;=<em>y</em>)x</code></td>
                                    <td><code>x</code>只有在<code>y</code>后面才匹配。<br />
                                        <code>/(?&lt;=\$)\d+/.exec('Benjamin Franklin is on the $100 bill') &nbsp;// ["100"]</code></td>
                                </tr>
                                <tr>
                                    <td><code>(?&lt;!<em>y</em>)x</code></td>
                                    <td><code>x</code>只有不在<code>y</code>后面才匹配。<br />
                                        <code>/(?&lt;!\$)\d+/.exec('it’s is worth about €90') // ["90"]</code></td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{wordBreak:"break-word"}}><b>^</b>等价于:[\t\n\v\f\r\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]</p>
                        <h3>属性</h3>
                        <p><b>RegExp.prototype</b></p>
                        <p className="indent-2">允许为所有正则对象添加属性。</p>
                        <p><b>RegExp.length</b></p>
                        <p className="indent-2">RegExp.length 值为 2。</p>
                        <h2>RegExp 实例</h2>
                        <h3>属性</h3>
                        <p>注意，RegExp 对象的几个属性既有完整的长属性名，也有对应的类 Perl 的短属性名。两个属性都有着同样的值。JavaScript 的正则语法就是基于 Perl 的。</p>
                        <p><b>RegExp.prototype.constructor</b></p>
                        <p className="indent-2">创建该正则对象的构造函数。</p>
                        <p><b>RegExp.prototype.global</b></p>
                        <p className="indent-2">是否开启全局匹配，也就是匹配目标字符串中所有可能的匹配项，而不是只进行第一次匹配。</p>
                        <p><b>RegExp.prototype.ignoreCase</b></p>
                        <p className="indent-2">在匹配字符串时是否要忽略字符的大小写。</p>
                        <p><b>RegExp.prototype.lastIndex</b></p>
                        <p className="indent-2">下次匹配开始的字符串索引位置。</p>
                        <p><b>RegExp.prototype.multiline</b></p>
                        <p className="indent-2">是否开启多行模式匹配（影响 ^ 和 $ 的行为）。</p>
                        <p><b>RegExp.prototype.source</b></p>
                        <p className="indent-2">正则对象的源模式文本。</p>
                        <p><b>RegExp.prototype.sticky</b></p>
                        <p className="indent-2">是否开启粘滞匹配。</p>
                        <h3>方法</h3>
                        <p><b>RegExp.prototype.exec()</b></p>
                        <p className="indent-2">在目标字符串中执行一次正则匹配操作。</p>
                        <p><b>RegExp.prototype.test()</b></p>
                        <p className="indent-2">测试当前正则是否能匹配目标字符串。</p>
                        <p><b>RegExp.prototype.toSource()</b></p>
                        <p className="indent-2">返回一个字符串，其值为该正则对象的字面量形式。覆盖了 Object.prototype.toSource 方法.</p>
                        <p><b>RegExp.prototype.toString()</b></p>
                        <p className="indent-2">返回一个字符串，其值为该正则对象的字面量形式。覆盖了 Object.prototype.toString()方法。</p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}
