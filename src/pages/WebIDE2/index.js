//组件拖拽页面
import React, { Component } from "react";
import Source from "./Source.js";
import Target from "./Target.js";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Layout, Button, Input, Row, Col, InputNumber, Tooltip, Card } from "antd";
// eslint-disable-next-line
import _ from "lodash";
import InputColor from "react-input-color";
import "./index.less";

const { Content } = Layout;
const colLayout1 = {
  sm: 10
};
const colLayout2 = {
  sm: 14
};
class DragPage extends Component {
  constructor() {
    super();
    this.state = {
      components: [],
      currentitem: null,
      itemindex: null,
      htmlString: ""
    };
    this.onDrop = this.onDrop.bind(this);
    this.moveItem = this.moveItem.bind(this);
    this.changeProps = this.changeProps.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * 有组件落到target区时调用
   * @param {*} component 拖动的组件
   */
  onDrop(component) {
    const { components } = this.state;
    const newComponentsList = _.concat([], components, component);
    this.setState({
      components: newComponentsList,
      currentitem: component,
      itemindex: components.length
    });

  }
  /**
   * 移动组件、新组件落到target时时调用
   * @param {*} itemindex 当前组件的序号
   */
  moveItem(itemindex) {
    const components = _.concat([], this.state.components);
    const _this = this;
    _.remove(components, function (n, index) {
      //判断是新组件还是再次移动
      if (index === itemindex) {
        _this.setState({
          itemindex: _this.state.itemindex - 1
        });
        return true;
      }
      return false;
    });
    this.setState({
      components: components
    });
  }
  /**
   * 点击target中组件时调用
   * @param {*} index 当前组件的序号
   */
  changeProps(index) {
    this.setState({
      currentitem: this.state.components[index],
      itemindex: index,
    });
  }
  onRef = (ref) => {

    this.child = ref

  }
  /**
   * 有组件落到target区时调用
   * @param {*} key 修改的属性名
   * @param {*} value 修改的值，当修改颜色时，值为value.hex。修改文本和选项时为当前事件event
   */
  handleChange(key, value) {
    let currentitem = this.state.currentitem;
    if (key === "color" || key === "background" || key === "borderColor") {
      currentitem[key] = value.hex;
    } else if (key === "html" || key === "options" || key === "label") {
      currentitem[key] = value.target.value;
    } else {
      currentitem[key] = value;
    }
    this.setState({
      currentitem: currentitem
    });
    this.child.refreshState()
  }
  //获取targer传过来的对象
  dragChange = (obj) => {
    this.setState({
      components: obj
    })
  }

  //删除组件时调用
  handleDelete() {
    const { components, itemindex } = this.state;
    components.splice(itemindex, 1);
    this.setState({
      components: components,
      currentitem: components[components.length - 1],
      itemindex: components.length - 1
    });
  }
  //保存实例为json文件
  setProject() {
    //json格式化
    const { components } = this.state;
    let makeJson = JSON.stringify(components);
    //保存到本地
    //虚拟dom实现下载   
    var elementA = document.createElement('a');
    elementA.download = +new Date() + ".json";//文件名
    //隐藏dom点不显示
    elementA.style.display = 'none';
    var blob = new Blob([makeJson]);//二进制
    elementA.href = URL.createObjectURL(blob);
    document.body.appendChild(elementA);
    elementA.click();
    document.body.removeChild(elementA);
  }
  //读取实例json文件
  importJson(e) {
    //读取json
    if (e.target.value) {
      let file = document.getElementById('file').files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      var _this = this
      reader.onload = function () {
        var importJson1 = JSON.parse(reader.result);
        for (let i = 0; i < importJson1.length; i++) {
          importJson1[i].position.x = Number(importJson1[i].position.x)
          importJson1[i].position.y = Number(importJson1[i].position.y)
        }
        _this.setState({
          components: importJson1,
        });
      };
    }
  }
  //触发读取事件方法
  target() {
    document.getElementById('file').click()
  }

  render() {
    const { components, currentitem, itemindex } = this.state;
    let proplist = null; //组件属性列表
    //判断当前是否选中了组件
    if (currentitem) {
      //根据组件类别渲染组件属性列表
      if (
        currentitem.component === "INPUT" ||
        currentitem.component === "SELECT" ||
        currentitem.component === "BUTTON" ||
        currentitem.component === "UPLOAD" ||
        currentitem.component === "RADIO" ||
        currentitem.component === "CHECKBOX"
      ) {
        proplist = (
          <>
            {currentitem.component === "SELECT" || currentitem.component === "RADIO" || currentitem.component === "CHECKBOX" ? null : (
              <>
                <Row gutter={12}>
                  <Col {...colLayout1} className="props-label">宽度:</Col>
                  <Col {...colLayout2}><InputNumber value={currentitem.width} onChange={this.handleChange.bind(this, "width")} /></Col>
                </Row>
                <Row gutter={12}>
                  <Col {...colLayout1} className="props-label">高度:</Col>
                  <Col {...colLayout2}><InputNumber value={currentitem.height} onChange={this.handleChange.bind(this, "height")} /></Col>
                </Row>
              </>
            )}
            <Row gutter={12}>
              <Col {...colLayout1} className="props-label">Label:</Col>
              <Col {...colLayout2}><Input value={currentitem.label} onChange={this.handleChange.bind(this, "label")} /></Col>
            </Row>
            {currentitem.component === "SELECT" || currentitem.component === "RADIO" || currentitem.component === "CHECKBOX" ? null : (
              <Row gutter={12}>
                <Col {...colLayout1} className="props-label">内容:</Col>
                <Col {...colLayout2}><Input value={currentitem.html} onChange={this.handleChange.bind(this, "html")} /></Col>
              </Row>
            )}
            <Row gutter={12}>
              <Col {...colLayout1} className="props-label">文本大小:</Col>
              <Col {...colLayout2}><InputNumber value={currentitem.fontSize} onChange={this.handleChange.bind(this, "fontSize")} /></Col>
            </Row>
            <Row gutter={12}>
              <Col {...colLayout1} className="props-label">文本颜色:</Col>
              <Col {...colLayout2}><InputColor initialHexColor={currentitem.color} placement="left" onChange={this.handleChange.bind(this, "color")} /></Col>
            </Row>
            {currentitem.component === "INPUT" || currentitem.component === "BUTTON" || currentitem.component === "UPLOAD" ? (
              <>
                <Row gutter={12}>
                  <Col {...colLayout1} className="props-label">背景颜色:</Col>
                  <Col {...colLayout2}><InputColor initialHexColor={currentitem.background} placement="left" onChange={this.handleChange.bind(this, "background")} /></Col>
                </Row>
                <Row gutter={12}>
                  <Col {...colLayout1} className="props-label">边框颜色:</Col>
                  <Col {...colLayout2}><InputColor initialHexColor={currentitem.borderColor} placement="left" onChange={this.handleChange.bind(this, "borderColor")} /></Col>
                </Row>
              </>
            ) : null}
            {currentitem.component === "SELECT" || currentitem.component === "RADIO" || currentitem.component === "CHECKBOX" ? (
              <Row gutter={12}>
                <Col {...colLayout1} className="props-label">选项:</Col>
                <Col {...colLayout2}>
                  <Tooltip placement="top" title="输入选项名，以英文逗号隔开">
                    <Input.TextArea autoSize={{ minRows: 4 }} value={currentitem.options} onChange={this.handleChange.bind(this, "options")} />
                  </Tooltip>
                </Col>
              </Row>
            ) : null}
          </>
        );
      } else if (currentitem.component === "LABEL" || currentitem.component === "DATE") {
        proplist = (
          <>
            <Row gutter={12}>
              <Col {...colLayout1} className="props-label">文本:</Col>
              <Col {...colLayout2}><Input value={currentitem.label} onChange={this.handleChange.bind(this, "label")} /></Col>
            </Row>
            <Row gutter={12}>
              <Col {...colLayout1} className="props-label">文本大小:</Col>
              <Col {...colLayout2}><InputNumber value={currentitem.fontSize} onChange={this.handleChange.bind(this, "fontSize")} /></Col>
            </Row>
            <Row gutter={12}>
              <Col {...colLayout1} className="props-label">文本颜色:</Col>
              <Col {...colLayout2}><InputColor initialHexColor={currentitem.color} placement="left" onChange={this.handleChange.bind(this, "color")} /></Col>
            </Row>
          </>
        );
      }
    }
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="dragpage">
          <Content className="drag-content">
            <div style={{ height: "100%", width: "360px" }}>
              <Card title="组件库" className="item-panel box-shadow" bordered={false} size="small">
                <Source index={itemindex} />
              </Card>
            </div>
            <div className="content-panel">
              <div className="target-panel">
                <p className="target-title">新建流程
                  <Button size={"small"} style={{ "display": "inline-block", "float": "right", marginRight: "10px" }} onClick={this.setProject.bind(this)}>保存数据</Button>
                  <input id="file" type="file" accept=".json" style={{ "display": "none" }} onChange={this.importJson.bind(this)} />
                  <Button size={"small"} style={{ "display": "inline-block", "float": "right", marginRight: "10px" }} onClick={this.target}>读取数据</Button>
                </p>
                <Target ref="target" onDrop={this.onDrop} parent={this} onRef={this.onRef} components={components} moveItem={this.moveItem} dragChange={this.dragChange} changeProps={this.changeProps} itemindex={itemindex} />
              </div>
            </div>
            <Card title="属性" className="props-panel box-shadow" bordered={false} size="small">
              {currentitem ? (
                <>
                  <Row gutter={12}>
                    <Col {...colLayout1} className="props-label">类型:</Col>
                    <Col {...colLayout2} style={{ lineHeight: "30px" }}>{currentitem.name}</Col>
                  </Row>
                  <Row gutter={12}>
                    <Col {...colLayout1} className="props-label">横坐标:</Col>
                    <Col {...colLayout2} style={{ lineHeight: "30px" }}>
                      {Number(currentitem.position.x) - 380}
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col {...colLayout1} className="props-label">纵坐标:</Col>
                    <Col {...colLayout2} style={{ lineHeight: "30px" }}>
                      {Number(currentitem.position.y) - 75}
                    </Col>
                  </Row>
                  {proplist}
                  <Row>
                    <Col span={24} style={{ textAlign: "center", marginTop: "20px" }}>
                      <Button type="danger" style={{ width: "100px" }} onClick={this.handleDelete}>删除</Button>
                    </Col>
                  </Row>
                </>
              ) : (
                  <div style={{ textAlign: "center", color: "#aaa", fontSize: "16px", fontWeight: "bold" }}>未选择任何组件</div>
                )}
            </Card>
          </Content>
        </div>
      </DndProvider>
    );
  }
}

export default DragPage;
