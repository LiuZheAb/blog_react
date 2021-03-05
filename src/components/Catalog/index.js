//文档目录
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./index.less";

export default class index extends Component {
    render() {
        let { dataSource } = this.props;
        return (
            <div className="catalog">
                <div className="container">
                    <div className="title">
                        <h1>{dataSource.title}</h1>
                    </div>
                    <div className="contents">
                        <ul>
                            {Object.keys(dataSource.chapter).map(chapterName => {
                                let section = dataSource.chapter[chapterName];
                                switch (true) {
                                    case section.length === 1 && chapterName === dataSource.section[section[0]]:
                                        return <li className="catalog-item-1 catalog-item-nochild" key={chapterName}><Link to={dataSource.baseHref + "/" + section[0]}>{dataSource.section[section[0]]}</Link></li>
                                    case section.length === 1 && chapterName !== dataSource.section[section[0]]:
                                    case section.length > 1:
                                        return [<li className="catalog-item-1" key={chapterName}>{chapterName}</li>,
                                        ...section.map((sectionIndex, index) =>
                                            <li key={sectionIndex} className="catalog-item-2">
                                                <Link to={dataSource.baseHref + "/" + (section[index])}>{dataSource.section[sectionIndex]}</Link>
                                            </li>)
                                        ]
                                    default:
                                        return null;
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
