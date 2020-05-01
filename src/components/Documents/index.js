//文档
import React, { Component, lazy } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import "./index.less";
// 文档首页目录
const Catalog = lazy(() => import('../Catalog'));

class index extends Component {
    componentDidMount() {
        //路由变化时强制将header显示出来
        window.addEventListener('hashchange', () => {
            document.getElementsByClassName("header")[0].className = "ant-layout-header header header-visible";
        })
    }
    render() {
        let { dataSource } = this.props;
        return (
            <Switch>
                {dataSource.section.length > 0
                    ?
                    [
                        < Route exact path={dataSource.baseHref} key={dataSource.baseHref} component={() => <Catalog dataSource={dataSource} />} />,
                        ...dataSource.section.map((item, index) =>
                            <Route key={index} exact path={dataSource.baseHref + "/" + index} component={lazy(() => import(`./${dataSource.component}/${index}`))} />
                        )
                    ]
                    :
                    <Route path={dataSource.baseHref} component={lazy(() => import(`../Documents/${dataSource.component}`))} />
                }
            </Switch>
        )
    }
}

export default withRouter(index);