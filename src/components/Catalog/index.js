//文档目录
import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                        {Object.keys(dataSource.chapter).map((item, chapterIndex) => {
                            let section = dataSource.section.slice(dataSource.chapter[item][0], dataSource.chapter[item][1] + 1);
                            return (
                                <ul key={chapterIndex}>
                                    {section.length > 1 ?
                                        <>
                                            <li className="catalog-item-1">{item}</li>
                                            {section.map((item2, sectionIndex) => {
                                                return (
                                                    <li key={sectionIndex} className="catalog-item-2"><Link to={dataSource.baseHref + "/" + (dataSource.chapter[item][0] + sectionIndex)}>{item2}</Link></li>
                                                )
                                            })}
                                        </>
                                        :
                                        <li className="catalog-item-1 catalog-item-nochild" ><Link to={dataSource.baseHref + "/" + (dataSource.chapter[item][0])}>{section[0]}</Link></li>
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
