import React, { Component } from 'react';
import Directory from "../../Directory";
import "./2.less";

export default class index extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>帧动画Demo</h1>
                    </div>
                    <div className="article-content">
                        <h2>Demo1</h2>
                        <div className="animate-content">
                            <div className="animate-box">
                                <img src={require("../../../assets/images/block2.png")} alt="block" />
                                <img src={require("../../../assets/images/block3.png")} alt="block" />
                                <img src={require("../../../assets/images/block4.png")} alt="block" />
                            </div>
                        </div>
                        <h2>Demo2</h2>
                        <div className="animate-content">
                            <div className="animate-box2">
                                <div className="animate-block" />
                                <div className="animate-block" />
                                <div className="animate-block" />
                                <div className="animate-block" />
                            </div>
                        </div>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}