import React, { useState, useCallback } from 'react';
import { Row, Col, Card, Input } from "antd";
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import "./index.less";
import SourceItem from "./SourceItem";
import Target from "./Target";
import ItemTypes from './ItemTypes';

const WebIDE = () => {
    const [droppedItem, setDroppedItem] = useState([]);
    const [currentIndex, setCurrentIndex] = useState();
    const itemList = ["input", "select", "radio", "checkbox", "upload", "date", "button", "label"];
    const isDropped = item => {
        return droppedItem.indexOf(item) > -1;
    };
    const handleDrop = useCallback(item => {
        setDroppedItem(update(droppedItem, { $push: [item] }));
        if (item.index === undefined) {
            setCurrentIndex(droppedItem.length);
        }
    }, [droppedItem]);
    const moveItem = ((index, item) => {
        droppedItem.splice(index, 1, item);
        setDroppedItem(droppedItem);
        setCurrentIndex(index);
    });
    const clickToChange = index => {
        setCurrentIndex(index);
    }
    const handleChangeProp = (propName, e) => {
        droppedItem[currentIndex][propName] = e.target.value;
        setDroppedItem(droppedItem);
    }
    const propList = item => {
        let { name, placeholder } = droppedItem[currentIndex];
        console.log(placeholder);
        return <ul>
            <li>{name}</li>
            <Input defaultValue={placeholder} onChange={(e) => { handleChangeProp("placeholder", e) }}></Input>
        </ul>
    }
    return (
        <Row className="webide-container">
            <DndProvider backend={Backend}>
                <Col flex="280px" className="source-panel">
                    <Card title="控件库" bordered={false}>
                        {itemList.map(item => <SourceItem key={item} name={item} type={ItemTypes.ITEM} isDropped={isDropped(item)}></SourceItem>)}
                    </Card>
                </Col>
                <Col flex="auto" className="target-panel">
                    <Card title="拖放区" bordered={false}>
                        <Target
                            accept={ItemTypes.ITEM}
                            droppedItem={droppedItem}
                            onDrop={item => handleDrop(item)}
                            moveItem={moveItem}
                            clickToChange={clickToChange}
                        />
                    </Card>
                </Col>
            </DndProvider>
            <Col flex="200px" className="props-panel">
                <Card title="控件属性" bordered={false}>
                    {typeof (currentIndex) === "undefined" ?
                        <p>还没有任何控件</p>
                        : propList()
                        // Object.keys(droppedItem[currentIndex]).map((prop, index) =>
                        //     <p key={index}>{prop}：{JSON.stringify(droppedItem[currentIndex][prop])}</p>
                        // )
                    }
                </Card>
            </Col>
        </Row>
    )
}
export default WebIDE;