import React from 'react';
import { useDrag } from 'react-dnd';

const Item = ({ name, type, isDropped }) => {
    const [itemProps, drag] = useDrag({
        item: { name, type, },
        collect: monitor => {
            return {
                opacity: monitor.isDragging() ? 0.4 : 1,
                item: monitor.getItem()
            }
        },
        begin: monitor => ({
            name, type,
            position: monitor.getClientOffset(),  //鼠标松开时的位置
            pointer: monitor.getInitialClientOffset(),  //鼠标点击时的位置
            location: monitor.getInitialSourceClientOffset(),  //拖动源位置 
        }),
    })
    return (
        <div className="source-item" ref={drag} style={{ opacity: itemProps.opacity }}>
            <img src={require("../../assets/images/" + name + ".png")} alt="" className="source-img" />
            {name}
        </div>
    )
}

export default Item;