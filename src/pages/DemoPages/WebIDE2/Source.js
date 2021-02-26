//左侧拖动源
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import data from './data.json';

const components = Object.keys(data);
class Source extends Component {
  render() {
    return (
      components.map(component => {
        return (
          <div key={component} className="component-box">
            <Item component={component} index={this.props.index} />
            <p>{data[component]}</p>
          </div>
        )
      })
    )
  }
}

const spec = {
  /**
	 * 拖拽开始时触发当前函数
	 * @param {*} props 当前组件的 props
	 * @param {*} monitor DragSourceMonitor 对象
   * @returns {*} item
	 */
  beginDrag(props, monitor) {
    //组件的共有属性
    let width = 15;
    let height = 15;
    let color = '#000';
    let html, name, label = '';
    let background = '#1890ff';
    let borderColor = '#d9d9d9';
    let top = -5;
    //组件的属性根据组件类别有所不同
    if (props.component === "INPUT") {
      width = 160;
      height = 30;
      html = name = label = '输入框';
      background = '#fff';
    } else if (props.component === "SELECT") {
      width = 160;
      height = 30;
      html = name = label = '选择器';
    } else if (props.component === "BUTTON") {
      width = 100;
      height = 30;
      html = name = label = '按钮';
      borderColor = '#1890ff'
    } else if (props.component === "UPLOAD") {
      width = 120;
      height = 30;
      html = name = label = '上传';
      background = "#fff";
    } else if (props.component === "LABEL") {
      width = 'auto';
      height = 20;
      html = name = label = '标注';
      background = 'none'
    } else if (props.component === "RADIO") {
      html = name = label = '单选框';
      top = -0;
    } else if (props.component === "CHECKBOX") {
      html = name = label = '多选框';
      top = -0;
    } else if (props.component === "DATE") {
      width = 'auto';
      height = 20;
      html = name = label = '日期选择器';
      background = 'none'
    }
    //组件开始拖拽时滚动轴的位置
    let scrolltop, scrollleft;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrolltop = document.documentElement.scrollTop;
      scrollleft = document.documentElement.scrollLeft;
    } else if (document.body) {
      scrolltop = document.body.scrollTop;
      scrollleft = document.body.scrollLeft;
    }
    //返回item的属性
    return {
      component: props.component,
      position: null,  //鼠标松开时的位置
      pointer: monitor.getInitialClientOffset(),  //鼠标点击时的位置
      location: monitor.getInitialSourceClientOffset(),  //拖动源位置
      width: width,
      height: height,
      color: color,
      fontSize: 14,
      borderRadius: 4,
      background: background,
      html: html,
      borderColor: borderColor,
      options: null,
      scrolltop: scrolltop,
      scrollleft: scrollleft,
      name: name,
      top: top,
      label: label
    };
  },
  /**
	 * 组件拖拽时触发当前函数
   * @param {*} props 当前组件的 props
	 * @param {*} monitor DragSourceMonitor 对象
	 */
  isDragging(props, monitor) {
    const item = monitor.getItem();
    if (monitor.getClientOffset() !== null) {
      item.position = monitor.getClientOffset() //组件拖拽时鼠标相对于窗口的位置
    }
  },
};
/**
   * 收集功能函数，包含 connect 和 monitor 参数
	 * @param {*} connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	 * @param {*} monitor DragSourceMonitor 对象
   * @returns {*} 这里返回一个对象，会将对象的属性都赋到组件的 props 中去。这些属性需要自己定义
	 */
const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    item: monitor.getItem()
  };
}

const Item = DragSource("drag-items", spec, collect)(props => {
  const { connectDragSource, component } = props;
  if (component === "INPUT") {
    // connectDragSource 包裹住的 DOM 节点才可以被拖动
    return connectDragSource(
      <img src={require('../../../assets/images/input.png')} alt="输入框" />
      // <span className="item">
      //   <Input placeholder="输入框"/>
      // </span>
    )
  } else if (component === "RADIO") {
    return connectDragSource(
      <img src={require('../../../assets/images/radio.png')} alt="单选框" />
      // <span className="radioitem">
      //   <Radio style={{ marginBottom: '10px' }} />
      // </span>
    )
  } else if (component === "SELECT") {
    return connectDragSource(
      <img src={require('../../../assets/images/select.png')} alt="选择器" />
      // <span className="item" style={{ width: '160px' }}>
      //   <Select placeholder="选择器" />
      // </span>
    )
  } else if (component === "BUTTON") {
    return connectDragSource(
      <img src={require('../../../assets/images/button.png')} alt="按钮" />
      // <span className="item">
      //   <Button type="primary">按钮</Button>
      // </span>
    )
  } else if (component === "CHECKBOX") {
    return connectDragSource(
      <img src={require('../../../assets/images/checkbox.png')} alt="多选框" />
      // <span className="radioitem">
      //   <Checkbox type="primary" style={{ marginBottom: '10px' }}></Checkbox>
      // </span>
    )
  } else if (component === "UPLOAD") {
    return connectDragSource(
      <img src={require('../../../assets/images/upload.png')} alt="上传" />
      // <span className="radioitem">
      //   <Upload>
      //     <Button>
      //       <Icon type="upload" /> Upload
      //       </Button>
      //   </Upload>
      // </span>
    )
  } else if (component === "LABEL") {
    return connectDragSource(
      <img src={require('../../../assets/images/label.png')} alt="标注" />
      // <span className="radioitem">
      //   说明
      // </span>
    )
  } else if (component === "DATE") {
    return connectDragSource(
      <img src={require('../../../assets/images/date.png')} alt="日期选择器" />
    )
  }
});

export default Source