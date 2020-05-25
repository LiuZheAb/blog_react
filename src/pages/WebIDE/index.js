import React, { useState, useCallback } from 'react';
import { Row, Col } from "antd";
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import "./index.less";
import Item from "./Item";
import Target from "./Target";
import ItemTypes from './ItemTypes';

const WebIDE = () => {
    const [droppedItem, setDroppedBoxNames] = useState([]);
    const itemList = ["input", "select", "radio", "checkbox", "upload", "date", "button", "label"];
    function isDropped(item) {
        return droppedItem.indexOf(item) > -1;
    }
    const handleDrop = useCallback(
        (item, monitor) => {
            setDroppedBoxNames(
                update(droppedItem, item.name ? { $push: [item] } : { $push: [] }),
            );
        },
        [droppedItem],
    )
    return (
        <Row className="webide-container">
            <DndProvider backend={Backend}>
                <Col flex="280px" className="source-panel">
                    {itemList.map(item => <Item key={item} name={item} type={ItemTypes.ITEM} isDropped={isDropped(item)}></Item>)}
                </Col>
                <Col flex="auto" className="target-panel">
                    <Target
                        accept={ItemTypes.ITEM}
                        droppedItem={droppedItem}
                        onDrop={item => handleDrop(item)}
                    />
                </Col>
            </DndProvider>
            <Col flex="200px" className="props-panel"></Col>
        </Row>
    )
}
export default WebIDE;