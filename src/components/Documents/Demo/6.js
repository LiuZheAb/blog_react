import React, { Component } from 'react';
import Directory from "../../Directory";
import { Pagination } from 'antd';
import { pdfjs, Document, Page } from 'react-pdf';
import "./6.less";

pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.js`;

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numPages: null,
            pageNumber: 1
        };
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    onChange = page => {
        this.setState({
            pageNumber: page,
        });
    };
    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div className="page-content">
                <div className="article">
                    <div className="article-title">
                        <h1>重磁计算界面</h1>
                    </div>
                    <div className="article-content">
                        <h2>简介</h2>
                        <p>2020年7月-8月，代表公司参加华为开发者大赛“鲲鹏展翅·智耀津门 鲲鹏应用创新大赛2020”，结合公司背景与工业互联网思想，负责PPT编写制作与参赛现场的演讲，获得天津赛区一等奖。</p>
                        <h2>pdf预览</h2>
                        <Document
                            file="./lecture.pdf"
                            onLoadSuccess={this.onDocumentLoadSuccess}
                            loading="正在加载中"
                            externalLinkTarget="_blank"
                            style={{ width: "100%" }}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <Pagination current={pageNumber} total={numPages} pageSize={1} onChange={this.onChange} />
                        <h2>全屏预览</h2>
                        <a href="./lecture.pdf" target="_blank">全屏预览</a>
                    </div>
                </div>
                <Directory />
            </div>
        )
    }
}