//目标区target
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Item from './Item.js';
import { DraggableContainer, DraggableChild } from 'react-dragline'
import _ from "lodash";

class Target extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.components,
            component: {},
            itemArr: [],
            itemArrIndex: [],
            startY: 0,
            startX: 0,
            dragW: 0,
            dragH: 0,
        }
    }
    componentDidMount() {
        this.props.onRef(this);
        document.addEventListener("keydown", this.onKeyDown)  //绑定键盘事件
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown)  //移除键盘事件
    }
    refreshState = () => {
        this.setState({
            items: this.props.parent.state.components
        })
    }
    //快捷键
    onKeyDown = e => {
        var evt = e || window.e;
        // evt.preventDefault();
        let { components, dragChange } = this.props;
        let _this = this
        let { itemArr } = _this.state
        if (e.ctrlKey) {
            switch (e.keyCode) {
                case 65: //ctrl+a  全选
                    evt.preventDefault();

                    var item = []
                    for (var i = 0; i < components.length; i++) {
                        item.push(i)
                    }
                    _this.setState({
                        itemArr: components,
                        itemArrIndex: item
                    })
                    break;
                case 67: //ctrl+c   复制
                    // evt.preventDefault();
                    var itemArr1 = JSON.parse(JSON.stringify(itemArr))
                    for (let i = 0; i < itemArr1.length; i++) {
                        itemArr1[i].position.x += 30;
                        itemArr1[i].position.y += 30;
                    }
                    this.setState({
                        itemArr: itemArr1
                    })
                    break;
                case 86: //ctrl+v    粘贴
                    // evt.preventDefault();
                    let paste = _.concat([], components, itemArr);
                    components = paste
                    dragChange(components)
                    break;
                default:
                    break
            }
        }
    }
    onStop(index, e, s) {
        e.stopPropagation()
        let { components, changeProps } = this.props;
        components[index].position = { x: Number(s.x) + 380, y: Number(s.y) + 75 }
        changeProps(index)
    }
    //鼠标拖拽框多选
    mouseDown(event) {
        event.stopPropagation()
        let { components } = this.props;
        if (event.target.parentNode.className === "target-area box-shadow") {
            this.setState({
                startX: event.pageX,
                startY: event.pageY,
            })
            const right = event.pageX
            const bottom = event.pageY
            const W = event.target.offsetWidth
            const H = event.target.offsetHeight
            const _this = this
            var target = event.target
            document.onmousemove = function (event) {
                const { startX, startY } = _this.state
                if (event.pageX > right && event.pageY > bottom) {
                    event.preventDefault();
                    if (event.pageY < H + 75 && event.pageX < W + 380) {
                        _this.setState({
                            startX: right,
                            startY: bottom,
                            dragW: Math.abs(event.pageX - startX),
                            dragH: Math.abs(event.pageY - startY)
                        })
                    }
                } else if (event.pageX < right && event.pageY < bottom) {
                    if (event.pageY > 75 && event.pageX > 380) {
                        _this.setState({
                            startX: event.pageX,
                            startY: event.pageY,
                            dragW: Math.abs(right - event.pageX),
                            dragH: Math.abs(bottom - event.pageY)
                        })
                    }
                } else if (event.pageX > right && event.pageY < bottom) {
                    if (event.pageY > 75 && event.pageX < W + 380) {
                        _this.setState({
                            startX: right,
                            startY: event.pageY,
                            dragW: Math.abs(event.pageX - right),
                            dragH: Math.abs(bottom - event.pageY)
                        })
                    }
                } else if (event.pageX < right && event.pageY > bottom) {
                    if (event.pageY < H + 75 && event.pageX > 380) {
                        _this.setState({
                            startX: event.pageX,
                            startY: bottom,
                            dragW: Math.abs(right - event.pageX),
                            dragH: Math.abs(event.pageY - bottom)
                        })
                    }
                }
            }
            target.onmouseup = function (event) {
                let { startX, startY, dragH, dragW } = _this.state
                let arr = [], arrindex = []
                components.forEach((item, index) => {
                    if ((item.position.x >= startX && item.position.x <= dragW + startX && item.position.y >= startY && item.position.y <= dragH + startY)
                        || (item.position.x + item.width >= startX && item.position.x + item.width <= dragW + startX && item.position.y >= startY && item.position.y <= dragH + startY)
                        || (item.position.x >= startX && item.position.x <= dragW + startX && item.position.y + item.height >= startY && item.position.y + item.height <= dragH + startY)
                        || (item.position.x + item.width >= startX && item.position.x + item.width <= dragW + startX && item.position.y + item.height >= startY && item.position.y + item.height <= dragH + startY)) {
                        arr.push(JSON.parse(JSON.stringify(item)))
                        arrindex.push(index)
                    }
                });
                _this.setState({
                    component: {},
                    itemArr: arr,
                    itemArrIndex: arrindex,
                    dragW: 0,
                    dragH: 0,
                    startX: 0,
                    startY: 0
                })
                document.onmousemove = null;
                target.onmouseup = null
            }
        }
    }
    render() {
        const { connectDropTarget, components, itemindex } = this.props;
        let { startX, startY, dragW, dragH } = this.state
        const containerStyle = {
            position: 'relative',
            width: "100%",
            height: "100%"
        }
        const moveSelectStyle = {
            width: dragW + "px",
            height: dragH + "px",
            position: "absolute",
            background: "green",
            opacity: "0.3",
            border: "1px dashed #d9d9d9",
            top: startY + "px",
            left: startX + "px"
        }
        return connectDropTarget(
            <div className="target-area box-shadow" id="target" onMouseDown={(e) => this.mouseDown(e)}>
                {/* 根据当前Target中是否有组件显示内容 */}
                <div id="moveSelect" style={moveSelectStyle}></div>
                {components.length === 0 && <div style={{ marginTop: "20px", textAlign: "center", color: "#aaa", fontSize: "16px", fontWeight: "bold" }}>还没有任何组件，尝试从组件库拖拽组件到这里</div>}
                <DraggableContainer style={containerStyle}>
                    {
                        components.map(({ component, position, location, pointer, width, height, fontSize, color, background, html, borderColor, borderRadius, options, scrolltop, scrollleft, name, top, label }, index) => {
                            return (
                                <DraggableChild key={index} defaultPosition={{ x: position.x + scrollleft - 380, y: position.y + scrollleft - 37 }} onStop={this.onStop.bind(this, index)}>
                                    <div
                                        style={{
                                            cursor: 'move',
                                            position: "absolute",
                                            left: position.x + scrollleft,
                                            top: position.y + scrolltop
                                        }}
                                    >
                                        <Item
                                            index={index}
                                            itemArrIndex={this.state.itemArrIndex}
                                            component={component}
                                            html={html}
                                            width={width}
                                            height={height}
                                            fontSize={fontSize}
                                            color={color}
                                            background={background}
                                            borderColor={borderColor}
                                            borderRadius={borderRadius}
                                            options={options}
                                            name={name}
                                            itemindex={itemindex}
                                            // top={top}
                                            label={label}
                                        />
                                    </div>
                                </DraggableChild>
                            )
                        })
                    }
                </DraggableContainer>


            </div>
        )

    }
}

const spec = {
    /**
    * 拖拽开始时触发当前函数
    * @param {*} props 当前组件的 props
    * @param {*} monitor DropTargetMonitor 对象
    * @param {*} component Target 对象
    * @returns {*} item
    */
    drop(props, monitor, component) {
        const item = monitor.getItem()
        props.onDrop(item)
        props.moveItem(item.index)
        return item;
    }

}
/**
   * 收集功能函数，包含 connect 和 monitor 参数
	 * @param {*} connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	 * @param {*} monitor DragSourceMonitor 对象
     * @returns {*} 这里返回一个对象，会将对象的属性都赋到组件的 props 中去。这些属性需要自己定义
	 */
const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}

export default DropTarget('drag-items', spec, collect)(Target);