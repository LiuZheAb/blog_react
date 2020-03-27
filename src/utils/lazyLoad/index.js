import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';
import './index.less';

const loadingComponent = () => {
    return (
        <div className="example"><Spin size="large" /></div>
    );
};

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    });
};