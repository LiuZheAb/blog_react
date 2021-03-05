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
    document.title = "WebIDE";
    const [droppedItem, setDroppedItem] = useState([]);
    const [currentIndex, setCurrentIndex] = useState();
    const handleDrop = useCallback(item => {
        setDroppedItem(update(droppedItem, { $push: [item] }));
        setCurrentIndex(item.index);
    }, [droppedItem]);
    const moveItem = useCallback((index, item) => {
        droppedItem.splice(index, 1, item);
        setDroppedItem(droppedItem);
        setCurrentIndex(index);
    }, [droppedItem]);
    const clickToChange = index => {
        setCurrentIndex(index);
    };
    const handleChangeProp = useCallback((propName, e) => {
        droppedItem[currentIndex][propName] = e.target.value;
        setDroppedItem(droppedItem);
    }, [droppedItem, currentIndex]);
    return (
        <Row className="webide-container">
            <DndProvider backend={Backend}>
                <Col flex="280px" className="source-panel">
                    <Card title="控件库" bordered={false}>
                        {ItemTypes.map(type => <SourceItem key={type} type={type}></SourceItem>)}
                    </Card>
                </Col>
                <Col flex="auto" className="target-panel">
                    <Card title="拖放区" bordered={false}>
                        <Target
                            accept={ItemTypes}
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
                        : <ul>
                            <li>name：{droppedItem[currentIndex].type}</li>
                            <li>placeholder：{droppedItem[currentIndex].placeholder}</li>
                            <Input defaultValue={droppedItem[currentIndex].placeholder} onChange={e => handleChangeProp("placeholder", e)}></Input>
                        </ul>
                    }
                </Card>
            </Col>
        </Row>
    )
}
export default WebIDE;