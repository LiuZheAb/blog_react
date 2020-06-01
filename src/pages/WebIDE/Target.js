import React from 'react';
import { useDrop } from 'react-dnd';
import TargetItem from "./TargetItem";
// import { DraggableContainer, DraggableChild } from 'react-dragline';

const Target = ({ accept, droppedItem, onDrop, moveItem, clickToChange }) => {
  const [, drop] = useDrop({
    accept,
    drop: (item, monitor) => {
      item.cursor = monitor.getInitialClientOffset();  //鼠标点击时的位置
      item.location = monitor.getInitialSourceClientOffset();  //拖动源位置 
      item.position = monitor.getClientOffset(); //item落下时所在位置
      if (item.index === undefined) {
        item.index = droppedItem.length;
        onDrop(item);
      } else {
        moveItem(item.index, item);
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop()
    }),
  });
  return (
    <div className="target-box" ref={drop} >
      {droppedItem.length === 0 && <div style={{ width: "100%", position: "absolute", textAlign: "center", fontSize: 16 }}>将组件拖拽至此区域</div>}
      {droppedItem.map((item, index) => <TargetItem key={index} item={item} clickToChange={clickToChange}></TargetItem>)}
    </div>
  )
}

export default Target;