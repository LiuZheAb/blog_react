import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { Input, Select, Radio, Checkbox, Upload, DatePicker, Button } from "antd";
// import { DraggableContainer, DraggableChild } from 'react-dragline';

const Target = ({ accept, droppedItem, onDrop, moveItem, clickToChange }) => {
  const [, drop] = useDrop({
    accept,
    drop: (item, monitor) => {
      onDrop(item);
      item.position = monitor.getClientOffset();
      if (item.index !== undefined) {
        moveItem(item.index, item);
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div className="target-box" ref={drop} >
      {droppedItem.length === 0 && <div style={{ width: "100%", position: "absolute", textAlign: "center", fontSize: 16 }}>将组件拖拽至此区域</div>}
      {droppedItem.map((item, index) => <Item key={index} index={index} item={item} clickToChange={clickToChange}></Item>)}
    </div>
  )
}

const Item = ({ item, index, clickToChange }) => {
  const { name, type, position, pointer, location, placeholder } = item;
  const style = { position: "absolute", left: position.x - (pointer.x - location.x) - 280, top: position.y - (pointer.y - location.y) };//280是左侧source-panel的宽度
  const [, drag] = useDrag({
    item: { type },
    begin: monitor => ({
      index,
      name,
      type,
      position: monitor.getClientOffset(),  //鼠标松开时的位置
      pointer: monitor.getInitialClientOffset(),  //鼠标点击时的位置
      location: monitor.getInitialSourceClientOffset(),  //拖动源位置 
      placeholder
    }),
  })
  const getItem = (name) => {
    switch (name) {
      case "input":
        return <Input placeholder={placeholder}></Input>;
      case "select":
        return <Select>"select"</Select>;
      case "radio":
        return <Radio>"radio"</Radio>;
      case "checkbox":
        return <Checkbox>"checkbox"</Checkbox>;
      case "upload":
        return <Upload><Button>"upload"</Button></Upload>;
      case "date":
        return <DatePicker>"date"</DatePicker>;
      case "button":
        return <Button>"button"</Button>;
      case "label":
        return <label>"label"</label>;
      default:
        return null;
    }
  }
  return <div ref={drag} style={style} onClick={() => clickToChange(index)}>{getItem(name)}</div>
}
export default Target;