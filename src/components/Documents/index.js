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
                        {dataSource.section.length > 0
                            ?
                            <>
                                < Route exact path={dataSource.baseHref} component={() => <Catalog dataSource={dataSource} />} />
                                {dataSource.section.map((item, index) => {
                                    return (
                                        <Route key={index} exact path={dataSource.baseHref + "/" + index} component={lazy(() => import(`./${dataSource.component}/${index}`))} />
                                    )
                                })}
                            </>
                            :
                            <Route path={dataSource.baseHref} component={lazy(() => import(`../Documents/${dataSource.component}`))} />
                        }
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}

export default withRouter(index);