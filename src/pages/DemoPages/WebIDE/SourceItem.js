import React from 'react';
import { useDrag } from 'react-dnd';

const Item = ({ type }) => {
    const [itemProps, drag] = useDrag({
        item: (() => {
            let item = {};
            switch (type) {
                case "input":
                    item.placeholder = "test";
                    break;
                case "select":
                    break;
                case "radio":
                    break;
                case "checkbox":
                    break;
                case "upload":
                    break;
                case "date":
                    break;
                case "button":
                    break;
                case "label":
                    break;
                default:
                    break;
            }
            return { type, ...item }
        })(),
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    })
    return (
        <div className="source-item" ref={drag} style={{ opacity: itemProps.opacity }}>
            <img src={require("../../../assets/images/" + type + ".png")} alt="" className="source-img" />
            {type}
        </div>
    )
}

export default Item;