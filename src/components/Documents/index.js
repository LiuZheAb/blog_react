//文档
import React, { Component, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loder from '../Loder';

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
            <Router>
                <Suspense fallback={<Loder />}>
                    <Switch>
                        {/* 文档首页目录 */}
                        <Route exact path={dataSource.baseHref} render={() => <Catalog dataSource={dataSource} />} />
                        {/*文档章节*/}
                        {dataSource.section.map((item, index) => {
                            return (
                                <Route key={index} exact path={dataSource.baseHref + "/" + index} component={lazy(() => import(`./${dataSource.component}/${index}`))} />
                            )
                        })}
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}

export default withRouter(index);