//加载样式
import React from 'react';
import "./index.less";

export default () =>
    <div className="loader">
        <div className="loader-content">
            <div className="outer"></div>
            <div className="inner"></div>
        </div>
    </div>