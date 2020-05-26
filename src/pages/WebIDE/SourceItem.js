import React from 'react';
import { useDrag } from 'react-dnd';
// import { Input, Select, Radio, Checkbox, Upload, DatePicker, Button } from "antd";

const Item = ({ name, type, isDropped }) => {
    const [itemProps, drag] = useDrag({
        item: { type },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
        begin: monitor => ({
            name,
            type,
            position: monitor.getClientOffset(),  //鼠标松开时的位置
            pointer: monitor.getInitialClientOffset(),  //鼠标点击时的位置
            location: monitor.getInitialSourceClientOffset(),  //拖动源位置 
            placeholder: "123",
        }),
    })
    // const getItem = (name) => {
    //     switch (name) {
    //         case "input":
    //             return <Input ></Input>;
    //         case "select":
    //             return <Select>"select"</Select>;
    //         case "radio":
    //             return <Radio>"radio"</Radio>;
    //         case "checkbox":
    //             return <Checkbox>"checkbox"</Checkbox>;
    //         case "upload":
    //             return <Upload><Button>"upload"</Button></Upload>;
    //         case "date":
    //             return <DatePicker>"date"</DatePicker>;
    //         case "button":
    //             return <Button>"button"</Button>;
    //         case "label":
    //             return <label>"label"</label>;
    //         default:
    //             return null;
    //     }
    // }
    return (
        <div className="source-item" ref={drag} style={{ opacity: itemProps.opacity }}>
            {/* {getItem(name)} */}
            <img src={require("../../assets/images/" + name + ".png")} alt="" className="source-img" />
            {name}
        </div>
    )
}

export default Item;