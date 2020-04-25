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
                        {Object.keys(dataSource.chapter).map((chapterName, chapterIndex) => {
                            let section = dataSource.chapter[chapterName];
                            return (
                                <ul key={chapterIndex}>
                                    {section.length > 1 ?
                                        <>
                                            <li className="catalog-item-1">{chapterName}</li>
                                            {section.map((sectionIndex, index) => {
                                                return (
                                                    <li key={sectionIndex} className="catalog-item-2"><Link to={dataSource.baseHref + "/" + (section[index])}>{dataSource.section[sectionIndex]}</Link></li>
                                                )
                                            })}
                                        </>
                                        :
                                        <li className="catalog-item-1 catalog-item-nochild" ><Link to={dataSource.baseHref + "/" + section[0]}>{dataSource.section[section[0]]}</Link></li>
                                    }
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}