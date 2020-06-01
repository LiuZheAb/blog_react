import React from 'react';
import { useDrag } from 'react-dnd';
import { Input, Select, Radio, Checkbox, Upload, DatePicker, Button } from "antd";

const TargetItem = ({ item, clickToChange }) => {
    console.log("changed!")
    const { index, position, cursor, location } = item;
    const offsetLeft = document.getElementsByClassName("target-panel")[0].offsetLeft;   //target-panel到屏幕左侧的距离
    const style = {
        position: "absolute",
        left: position.x - (cursor.x - location.x) - offsetLeft,
        top: position.y - (cursor.y - location.y)
    };
    const [, drag] = useDrag({
        item: { ...item },
        begin: () => ({ ...item })
    });
    const getItem = currentItem => {
        const { type, placeholder } = currentItem;
        switch (type) {
            case "input":
                return <Input placeholder={placeholder}></Input>;
            case "select":
                return <Select>select</Select>;
            case "radio":
                return <Radio>radio</Radio>;
            case "checkbox":
                return <Checkbox>checkbox</Checkbox>;
            case "upload":
                return <Upload><Button>upload</Button></Upload>;
            case "date":
                return <DatePicker>date</DatePicker>;
            case "button":
                return <Button>button</Button>;
            case "label":
                return <label>label</label>;
            default:
                break;
        }
    }
    return <div ref={drag} style={style} onClick={() => clickToChange(index)}>{getItem(item)}</div>
}

export default TargetItem;