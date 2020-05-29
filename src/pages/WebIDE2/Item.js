//Target中组件
import React, { Component } from "react";
import { Input, Select, Radio, Button, Checkbox, Upload, Icon, DatePicker } from "antd";
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

class Item extends Component {
  render() {
    const {
      html,
      component,
      options,
      // index,
      // itemArrIndex,
      width,
      height,
      color,
      background,
      borderColor,
      fontSize,
      borderRadius,
      // onClick,
      // top,
      label,
    } = this.props;
    const style = {
      width: width,
      height: height,
      background: background,
      borderColor: borderColor,
      borderRadius: borderRadius,
      zIndex: 10
    };
    // let Radius = component === "RADIO" ? "50%" : "8px";
    // let Radioleft = component === "RADIO" ? "-4.5px" : "-5px";
    //判断字符串的字节长度，中文为2（因为中文所占像素大小为英文的1.75倍，所以这里为1.75），英文、数字、符号为1
    // let lenFor = function (str) {
    //   var byteLen = 0,
    //     len = str.length;
    //   if (str) {
    //     for (var i = 0; i < len; i++) {
    //       //中文
    //       if (str.charCodeAt(i) > 255) {
    //         byteLen += 1.75;
    //       } else {
    //         byteLen++;
    //       }
    //     }
    //     return byteLen;
    //   } else {
    //     return 0;
    //   }
    // };

    // let widtha = component === "LABEL" ? (lenFor(html) * (fontSize + 2)) / 2 : width;
    // let heighta = component === "LABEL" ? fontSize + 6 : height;
    //组件选中时添加边框
    // const border = itemArrIndex.indexOf(index) !== -1 && (
    //   <div
    //     style={{
    //       width: widtha + 10,
    //       height: heighta + 10,
    //       border: "2px solid #5be4fd",
    //       position: "absolute",
    //       left: Radioleft,
    //       top: top,
    //       borderRadius: Radius
    //     }}
    //   />
    // );
    let optionlist = [];
    //若options不为空，将字符串options按“，”拆分为数组optionlist
    if (options !== null) {
      if (options.toString().indexOf(",") === -1) {
        optionlist.push(options)
      } else if (options.toString().indexOf(",") > -1) {
        optionlist = options.split(",");
      }
      for (var i = 0; i < optionlist.length; i++) {
        if (optionlist[i] === '' || optionlist[i] === null || typeof (optionlist[i]) === undefined) {
          optionlist.splice(i, 1);
          i = i - 1;
        }
      }
    }
    //根据传过来的componet参数渲染
    if (component === "INPUT") {
      return (
        <>
          {/* {border} */}
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          <Input value={html} style={style} />
        </>
      );
    } else if (component === "RADIO") {
      return (
        <>
          {/* {border} */}
          {/* <Radio /> */}
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          {optionlist.length > 0 ? <Radio.Group>
            {optionlist.map((option, index) => {
              return (
                <Radio value={option} key={index}>{option}</Radio>
              );
            })}
          </Radio.Group> : "请在右侧属性栏设置选项"
          }
        </>
      );
    } else if (component === "SELECT") {
      return (
        <>
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          <Select placeholder={html} style={style} >
            {optionlist.map((option, index) => {
              return (
                <Option value={option} key={index}>
                  {option}
                </Option>
              );
            })}
          </Select>
          {/* {border} */}
        </>
      );
    } else if (component === "BUTTON") {
      return (
        <>
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          <Button type="primary" style={style} >
            {html}
          </Button>
          {/* {border} */}
        </>
      );
    } else if (component === "CHECKBOX") {
      return (
        <>
          {/* <Checkbox /> */}
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          {optionlist.length > 0 ? <Checkbox.Group options={optionlist} /> : "请在右侧属性栏设置选项"}
          {/* {border} */}
        </>
      );
    } else if (component === "UPLOAD") {
      return (
        <>
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          <Upload disabled>
            <Button style={style} >
              <Icon type="upload" />
              {html}
            </Button>
            {/* {border} */}
          </Upload>
        </>
      );
    } else if (component === "LABEL") {
      return (
        <>
          {/* {border} */}
          <span style={{ ...style, fontSize: fontSize, color: color }}>
            {label}
          </span>
        </>
      );
    } else if (component === "DATE") {
      return (
        <>
          <label style={{ fontSize: fontSize ? fontSize : "14px", color: color ? color : "#000", marginRight: "5px" }}>{label}：</label>
          <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </>
      );
    }
  }
}
export default Item