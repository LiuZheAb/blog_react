import React,{useState} from 'react';
import { useDrop } from 'react-dnd';
import { Input, Select, Radio, Checkbox, Upload, DatePicker, Button } from "antd";
import update from 'immutability-helper'

const Target = ({ accept, droppedItem, onDrop, }) => {
  const [boxes, setBoxes] = useState(droppedItem)
  const [status, drop] = useDrop({
    accept,
    drop: (item, monitor) => {
      onDrop(item);
      item.position = monitor.getClientOffset();
      moveBox(item.id, left, top)
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }
  const isActive = status.isOver;
  let backgroundColor = isActive ? '#555' : '#fff';
  return (
    <div className="target-box" ref={drop} style={{ backgroundColor }}>
      <div className="dragbar"></div>
      {isActive
        ? <div style={{ width: "100%", height: "100%", position: "absolute" }}>Release to drop</div>
        : null}
      {droppedItem.map((item, index) =>
        <Item key={index} item={item}></Item>
      )}
    </div >
  )
}

const Item = ({ item }) => {
  const { name, position, pointer } = item;
  const style = { position: "absolute", left: position.x - 280, top: position.y };//280是左侧source-panel的宽度
  switch (name) {
    case "input":
      return <Input style={style}></Input>;
    case "select":
      return <Select style={style}>"select"</Select>;
    case "radio":
      return <Radio style={style}>"radio"</Radio>;
    case "checkbox":
      return <Checkbox style={style}>"checkbox"</Checkbox>;
    case "upload":
      return <Upload style={style}><Button>"upload"</Button></Upload>;
    case "date":
      return <DatePicker style={style}>"date"</DatePicker>;
    case "button":
      return <Button style={style}>"button"</Button>;
    case "label":
      return <label style={style}>"label"</label>;
    default:
      return null;
  }
}
export default Target;