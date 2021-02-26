import React, { Component } from 'react';
import { Tree, Input, Radio, Button, message, Spin } from "antd";
import * as echarts from 'echarts';
import * as utils from "./utils"
import "./index.css";

const { interp_multiPoint, getMax, getMin, getMaxIndex, getMinIndex, formatDecimal } = utils;
let dataSource = [];
for (let i = 1; i < 52; i++) {
    dataSource.push({
        title: 'pshift_group_' + i,
        key: i,
    })
}

export default class index extends Component {
    state = {
        loaded: false,
        treeData: dataSource,
        fileName: "",
        fmin: 0.1,
        fmax: 5,
        Tout_min: 0.2,
        dTout: 0.05,
        Tout_max: 2.0,
        dataType: "A2B",
        disper_map_stack_A2B: undefined,
        disper_map_stack_B2A: undefined,
        disper_map_stack_SYM: undefined,
        pshift: undefined,
        fminIndex: undefined,
        fmaxIndex: undefined,
        disp: undefined,
        proc_F: undefined,
        proc_V: undefined,
        vout: undefined,
        fval: undefined,
        white_data: [],
        pink_data: [],
        black_data: [],
        black_xData: [],
        black_yData: [],
        resultV: [],
        resultF: []
    }
    componentDidMount() {
        this.chart1_heatmap = echarts.init(document.getElementById('chart1_heatmap'));
        this.chart1_line = echarts.init(document.getElementById('chart1_line'));
        this.chart1_loading_mask = document.getElementById('chart1_loading_mask');
        this.chart2_heatmap = echarts.init(document.getElementById('chart2_heatmap'));
        this.chart2_line = echarts.init(document.getElementById('chart2_line'));
        this.chart2_loading_mask = document.getElementById('chart2_loading_mask');
        this.chart3_heatmap = echarts.init(document.getElementById('chart3_heatmap'));
        this.chart3_line = echarts.init(document.getElementById('chart3_line'));
        this.chart3_loading_mask = document.getElementById('chart3_loading_mask');
        this.chart4 = echarts.init(document.getElementById('chart4'));
        this.handleClear();
        window.addEventListener("resize", () => {
            this.chart1_heatmap.resize();
            this.chart1_line.resize();
            this.chart2_heatmap.resize();
            this.chart2_line.resize();
            this.chart3_heatmap.resize();
            this.chart3_line.resize();
            this.chart4.resize();
        });
    }
    getData = fileName => {
        this.chart1_loading_mask.style.display = "flex";
        this.chart2_loading_mask.style.display = "flex";
        this.chart3_loading_mask.style.display = "flex";
        import(`./disper_json/${fileName}.json`).then(res => {
            this.chart1_loading_mask.style.display = "none";
            this.chart2_loading_mask.style.display = "none";
            this.chart3_loading_mask.style.display = "none";
            let { disper_map_stack_A2B, disper_map_stack_B2A, disper_map_stack_SYM, pshift } = res;
            this.setState({
                loaded: true,
                disper_map_stack_A2B,
                disper_map_stack_B2A,
                disper_map_stack_SYM,
                pshift,
            });
            this.getDisp(0);
            this.chartRender(this.chart1_heatmap, this.chart1_line, disper_map_stack_A2B);
            this.chartRender(this.chart2_heatmap, this.chart2_line, disper_map_stack_B2A);
            this.chartRender(this.chart3_heatmap, this.chart3_line, disper_map_stack_SYM,
                {
                    xAxis: {
                        name: "Frequency (Hz)",
                        nameLocation: "middle",
                        nameGap: 25
                    },
                });
            this.lineRender();
        });
    }
    getDisp = status => {
        let { dataType, disper_map_stack_A2B, disper_map_stack_B2A, disper_map_stack_SYM, pshift, fmin, fmax, Tout_min, dTout, Tout_max } = this.state;
        let fminArr = [], fmaxArr = [];
        for (let i = 0, len = pshift.f0.length; i < len; i++) {
            fminArr.push(Math.abs(fmin - pshift.f0[i]));
            fmaxArr.push(Math.abs(fmax - pshift.f0[i]));
        }
        let vout = [], resultV = [];
        for (let i = Tout_min; i <= Tout_max; i = Number((i + dTout).toFixed(2))) {
            vout.push(1 / i);
            resultV.push(i)
        }
        let proc_F = [], proc_V = []
        for (let i = 0, len = pshift.f0.length; i < len; i++) {
            proc_F.push(pshift.f0[i]);
            if (i < getMinIndex(fminArr)) {
                proc_F[i] = NaN;
            } else if (i > getMinIndex(fmaxArr)) {
                proc_F[i] = NaN;
            }
        }

        let white_DataSource = [];
        switch (dataType) {
            case "A2B":
                white_DataSource = disper_map_stack_A2B[0].map((col, i) => disper_map_stack_A2B.map(row => row[i]));
                break;
            case "B2A":
                white_DataSource = disper_map_stack_B2A[0].map((col, i) => disper_map_stack_B2A.map(row => row[i]));
                break;
            case "SYM":
                white_DataSource = disper_map_stack_SYM[0].map((col, i) => disper_map_stack_SYM.map(row => row[i]));
                break;
            default:
                break;
        }
        proc_V = white_DataSource.map(arr => getMaxIndex(arr) / arr.length);
        let range_v = getMax(pshift.v) - getMin(pshift.v);
        proc_V = proc_V.map(item => item * range_v + getMin(pshift.v))
        let fval = new Array(vout.length);
        let disp = {
            f: vout,
            v: interp_multiPoint(proc_F, proc_V, proc_F.length, vout, fval, vout.length)
        }

        this.setState({
            disp,
            fminIndex: getMinIndex(fminArr),
            fmaxIndex: getMinIndex(fmaxArr),
            proc_F,
            proc_V,
            vout,
            fval,
            resultV
        }, () => {
            if (status) {
                let { xUnit, yUnit, heatmap_xData, heatmap_yData } = this.state;
                let pink_data = [], resultF = [];
                for (let i = 0, len = disp.f.length; i < len; i++) {
                    if (disp.f[i] && disp.v[i]) {
                        pink_data.push([disp.f[i], disp.v[i]]);
                        resultF.push(disp.v[i])
                    }
                }
                let black_data = [], black_xData = [], black_yData = [];
                for (let i = 0, len = pink_data.length; i < len; i++) {
                    if (Array.isArray(pink_data[i])) {
                        black_data.push([disp.v[i], disp.v[i] / disp.f[i] / 2]);
                        black_xData.push(disp.v[i]);
                        black_yData.push(disp.v[i] / disp.f[i] / 2);
                    }
                }
                let white_data = white_DataSource.map((arr, i) => [i * xUnit + getMin(heatmap_xData), getMaxIndex(arr) * yUnit + getMin(heatmap_yData)]);
                this.setState({ pink_data, white_data, resultF, black_data, black_xData, black_yData });
                this.chart1_line.setOption({
                    series: [{
                        id: "a",
                        type: "line",
                        data: white_data
                    }, {
                        id: "b",
                        type: "line",
                        data: pink_data
                    }]
                });
                this.chart2_line.setOption({
                    series: [{
                        id: "a",
                        type: "line",
                        data: white_data
                    }, {
                        id: "b",
                        type: "line",
                        data: pink_data
                    }]
                });
                this.chart3_line.setOption({
                    series: [{
                        id: "a",
                        type: "line",
                        data: white_data
                    }, {
                        id: "b",
                        type: "line",
                        data: pink_data
                    }]
                });
                this.chart4.setOption({
                    xAxis: {
                        max: formatDecimal(Math.max(...black_xData), 1) + 0.1,
                        min: formatDecimal(Math.min(...black_xData), 1)
                    },
                    yAxis: {
                        max: formatDecimal(Math.max(...black_yData), 1) + 0.1,
                        min: formatDecimal(Math.min(...black_yData), 1)
                    },
                    series: [{
                        id: "a",
                        type: "line",
                        data: black_data
                    }]
                });
            }
        });
    }
    chartRender = (heatmap, line, dataSource, heatmap_expandOption) => {
        let { dataType, disper_map_stack_A2B, disper_map_stack_B2A, disper_map_stack_SYM, pshift, fminIndex, fmaxIndex, disp } = this.state;
        let { f0, nf0, v, nv } = pshift;
        /**绘制热力图背景 */
        let heatmap_data = [], heatmap_xData = [], heatmap_yData = [];
        for (let i = 0; i < nf0; i++) {
            for (let j = 0; j < nv; j++) {
                heatmap_data.push([i, j, dataSource[j][i]]);
            }
            heatmap_xData.push(formatDecimal(f0[i], 2));
        }
        for (let j = 0; j < nv; j++) {
            heatmap_yData.push(formatDecimal(v[j], 2));
        }
        let grid = {
            right: 20,
            left: 60,
            top: 20,
            bottom: 40
        }
        let headtmap_option = {
            grid,
            xAxis: {
                type: 'category',
                data: heatmap_xData
            },
            yAxis: {
                type: 'category',
                data: heatmap_yData,
                name: "Phase velocity (km/s)",
                nameLocation: "middle",
                nameGap: 36
            },
            visualMap: {
                type: 'continuous',
                show: false,
                left: 'right',
                top: 'center',
                calculable: true,
                realtime: false,
                splitNumber: 10,
                inRange: {
                    color: ['#00008d', '#102ff0', '#059afa', '#5dff9a', '#fded02', '#ff9109', '#df0300', '#7c0100', '#830100', '#810000']
                },
                min: 0.95,
                max: 1
            },
            series: [{
                type: 'heatmap',
                data: heatmap_data,
                progressive: 5000,
                animation: false
            }],
        };
        heatmap.setOption(headtmap_option, true);
        if (heatmap_expandOption) {
            heatmap.setOption(heatmap_expandOption);
        }

        /**绘制线 */
        let white_DataSource = [];
        //转换数组行列，方便找列的最大值
        switch (dataType) {
            case "A2B":
                white_DataSource = disper_map_stack_A2B[0].map((col, i) => disper_map_stack_A2B.map(row => row[i]));
                break;
            case "B2A":
                white_DataSource = disper_map_stack_B2A[0].map((col, i) => disper_map_stack_B2A.map(row => row[i]));
                break;
            case "SYM":
                white_DataSource = disper_map_stack_SYM[0].map((col, i) => disper_map_stack_SYM.map(row => row[i]));
                break;
            default:
                break;
        }
        let xUnit = (getMax(heatmap_xData) - getMin(heatmap_xData)) / (nf0 - 1);
        let yUnit = (getMax(heatmap_yData) - getMin(heatmap_yData)) / (nv - 1);
        let white_data = white_DataSource.map((arr, i) => [i * xUnit + getMin(heatmap_xData), getMaxIndex(arr) * yUnit + getMin(heatmap_yData)]);
        for (let i = 0, len = white_data.length; i < len; i++) {
            if (i < fminIndex) {
                white_data[i] = NaN;
            } else if (i > fmaxIndex) {
                white_data[i] = NaN;
            }
        }
        let pink_data = [], resultF = [];
        for (let i = 0, len = disp.f.length; i < len; i++) {
            if (disp.f[i] && disp.v[i]) {
                pink_data.push([disp.f[i], disp.v[i]]);
                resultF.push(disp.v[i]);
            }
        }
        this.setState({ white_data, pink_data, xUnit, yUnit, heatmap_xData, heatmap_yData, resultF });
        let line_option = {
            tooltip: {
                formatter: function (params) {
                    return 'f: ' + params.data[0].toFixed(4) + '<br>v: ' + params.data[1].toFixed(4);
                }
            },
            grid,
            xAxis: {
                type: 'value',
                show: false,
                max: getMax(heatmap_xData),
                min: getMin(heatmap_xData)
            },
            yAxis: {
                type: 'value',
                show: false,
                max: getMax(heatmap_yData),
                min: getMin(heatmap_yData)
            },
            series: [
                {
                    id: "a",
                    type: 'line',
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 5,
                    data: white_data,
                    itemStyle: {
                        color: "#fff"
                    },
                    hoverAnimation: false,
                    cursor: "default",
                    legendHoverLink: false
                },
                {
                    id: "b",
                    type: 'line',
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 8,
                    data: pink_data,
                    itemStyle: {
                        color: "#ff00ff"
                    },
                    hoverAnimation: false,
                }
            ]
        };
        line.setOption(line_option, true);
        line.getZr().on(
            'mousemove', params => {
                let { event, offsetX, offsetY } = params;
                if (event.button === 0 && event.buttons === 1) {
                    let { offsetWidth, offsetHeight } = params.event.target;
                    let currentPosition = {
                        x: (offsetX - grid.left) / (offsetWidth - grid.left - grid.right) * (getMax(heatmap_xData) - getMin(heatmap_xData)) + getMin(heatmap_xData),
                        y: (offsetHeight - grid.bottom - offsetY) / (offsetHeight - grid.top - grid.bottom) * (getMax(heatmap_yData) - getMin(heatmap_yData)) + getMin(heatmap_yData),
                    }
                    let { white_data, white_data_copy } = this.state;
                    let distenceArr = white_data.map((position, i) => Math.abs(currentPosition.x - position[0]));
                    if (!white_data_copy) {
                        white_data_copy = JSON.parse(JSON.stringify(white_data));
                    }
                    if (event.shiftKey || event.ctrlKey) {
                        let dataIndex = getMinIndex(distenceArr);
                        if (event.shiftKey) {
                            for (let i = 0, len = white_data.length; i < len; i++) {
                                if (i > dataIndex) {
                                    white_data[i] = NaN;
                                }
                                if (i > dataIndex + 3) {
                                    white_data_copy[i] = NaN;
                                }
                            }
                        } else if (event.ctrlKey) {
                            for (let i = 0, len = white_data.length; i < len; i++) {
                                if (i < dataIndex) {
                                    white_data[i] = NaN;
                                }
                                if (i < dataIndex - 2) {
                                    white_data_copy[i] = NaN;
                                }
                            }
                        }
                    } else {
                        if (Array.isArray(white_data[getMinIndex(distenceArr)])) {
                            white_data[getMinIndex(distenceArr)][1] = currentPosition.y;
                            white_data_copy[getMinIndex(distenceArr)][1] = currentPosition.y;
                        }
                    }
                    let { proc_F, vout, disp, } = this.state;
                    let proc_V = white_data_copy.map(arr => Array.isArray(arr) ? arr[1] : NaN);
                    disp.v = interp_multiPoint(proc_F, proc_V, proc_F.length, vout, new Array(vout.length), vout.length)
                    let pink_data = [], resultF = [];
                    for (let i = 0, len = disp.f.length; i < len; i++) {
                        if (disp.f[i] && disp.v[i]) {
                            pink_data.push([disp.f[i], disp.v[i]]);
                            resultF.push(disp.v[i])
                        } else {
                            pink_data.push(NaN);
                            resultF.push(NaN)
                        }
                    }
                    this.chart1_line.setOption({
                        series: [{
                            id: "a",
                            type: "line",
                            data: white_data,
                        }, {
                            id: "b",
                            type: "line",
                            data: pink_data
                        }]
                    });
                    this.chart2_line.setOption({
                        series: [{
                            id: "a",
                            type: "line",
                            data: white_data,
                        }, {
                            id: "b",
                            type: "line",
                            data: pink_data
                        }]
                    });
                    this.chart3_line.setOption({
                        series: [{
                            id: "a",
                            type: "line",
                            data: white_data,
                        }, {
                            id: "b",
                            type: "line",
                            data: pink_data
                        }]
                    });

                    let black_data = [], black_xData = [], black_yData = [];
                    for (let i = 0, len = pink_data.length; i < len; i++) {
                        if (Array.isArray(pink_data[i])) {
                            black_data.push([disp.v[i], disp.v[i] / disp.f[i] / 2]);
                            black_xData.push(disp.v[i]);
                            black_yData.push(disp.v[i] / disp.f[i] / 2);
                        }
                    }
                    this.chart4.setOption({
                        xAxis: {
                            max: black_xData.length > 0 ? formatDecimal(Math.max(...black_xData), 1) + 0.1 : 1,
                            min: black_xData.length > 0 ? formatDecimal(Math.min(...black_xData), 1) : 0
                        },
                        yAxis: {
                            max: black_yData.length > 0 ? formatDecimal(Math.max(...black_yData), 1) + 0.1 : 1,
                            min: black_yData.length > 0 ? formatDecimal(Math.min(...black_yData), 1) : 0
                        },
                        series: {
                            data: black_data
                        }
                    })
                    this.setState({ white_data, disp, pink_data, black_data, black_xData, black_yData, resultF });
                }
            }
        )
        line.getZr().on(
            'click', params => {
                let { event, offsetX } = params;
                let currentPositionX = (offsetX - grid.left) / (event.target.offsetWidth - grid.left - grid.right) * (getMax(heatmap_xData) - getMin(heatmap_xData)) + getMin(heatmap_xData);
                let { white_data, white_data_copy } = this.state;
                if (!white_data_copy) {
                    white_data_copy = JSON.parse(JSON.stringify(white_data));
                }
                let distenceArr = white_data.map((position, i) => Math.abs(currentPositionX - position[0]));
                let dataIndex = getMinIndex(distenceArr);
                if (event.button === 0) {
                    if (event.shiftKey || event.ctrlKey) {
                        if (event.shiftKey) {
                            for (let i = 0, len = white_data.length; i < len; i++) {
                                if (i > dataIndex) {
                                    white_data[i] = NaN;
                                }
                                if (i > dataIndex + 3) {
                                    white_data_copy[i] = NaN;
                                }
                            }
                        } else if (event.ctrlKey) {
                            for (let i = 0, len = white_data.length; i < len; i++) {
                                if (i < dataIndex) {
                                    white_data[i] = NaN;
                                }
                                if (i < dataIndex - 2) {
                                    white_data_copy[i] = NaN;
                                }
                            }
                        }
                        let { proc_F, vout, disp } = this.state;
                        let proc_V = white_data_copy.map(arr => Array.isArray(arr) ? arr[1] : NaN);
                        disp.v = interp_multiPoint(proc_F, proc_V, proc_F.length, vout, new Array(vout.length), vout.length)
                        let pink_data = [], resultF = [];
                        for (let i = 0, len = disp.f.length; i < len; i++) {
                            if (disp.f[i] && disp.v[i]) {
                                pink_data.push([disp.f[i], disp.v[i]]);
                                resultF.push(disp.v[i])
                            } else {
                                pink_data.push(NaN);
                                resultF.push(NaN)
                            }
                        }
                        let black_data = [], black_xData = [], black_yData = [];
                        for (let i = 0, len = pink_data.length; i < len; i++) {
                            if (Array.isArray(pink_data[i])) {
                                black_data.push([disp.v[i], disp.v[i] / disp.f[i] / 2]);
                                black_xData.push(disp.v[i]);
                                black_yData.push(disp.v[i] / disp.f[i] / 2);
                            }
                        }
                        this.chart1_line.setOption({
                            series: [
                                {
                                    id: "a",
                                    data: white_data
                                },
                                {
                                    id: 'b',
                                    data: pink_data
                                }]
                        })
                        this.chart2_line.setOption({
                            series: [
                                {
                                    id: "a",
                                    data: white_data
                                },
                                {
                                    id: 'b',
                                    data: pink_data
                                }]
                        })
                        this.chart3_line.setOption({
                            series: [
                                {
                                    id: "a",
                                    data: white_data
                                },
                                {
                                    id: 'b',
                                    data: pink_data
                                }]
                        })
                        this.chart4.setOption({
                            xAxis: {
                                max: black_xData.length > 0 ? formatDecimal(Math.max(...black_xData), 1) + 0.1 : 1,
                                min: black_xData.length > 0 ? formatDecimal(Math.min(...black_xData), 1) : 0
                            },
                            yAxis: {
                                max: black_yData.length > 0 ? formatDecimal(Math.max(...black_yData), 1) + 0.1 : 1,
                                min: black_yData.length > 0 ? formatDecimal(Math.min(...black_yData), 1) : 0
                            },
                            series: [{
                                id: 'a',
                                data: black_data
                            }]
                        });

                        this.setState({ pink_data, black_data, white_data, resultF, disp, white_data_copy });
                    }
                }
            }
        )
    }
    lineRender = () => {
        let { pink_data, disp } = this.state;
        let black_data = [], black_xData = [], black_yData = [];
        for (let i = 0, len = pink_data.length; i < len; i++) {
            if (Array.isArray(pink_data[i])) {
                black_data.push([disp.v[i], disp.v[i] / disp.f[i] / 2]);
                black_xData.push(disp.v[i]);
                black_yData.push(disp.v[i] / disp.f[i] / 2);
            }
        }
        this.setState({ black_data, black_xData, black_yData });
        let black_option = {
            tooltip: {
                formatter: function (params) {
                    return 'f: ' + params.data[0].toFixed(4) + '<br>v: ' + params.data[1].toFixed(4);
                }
            },
            grid: {
                right: 20,
                left: 60,
                top: 20,
                bottom: 40
            },
            xAxis: {
                type: 'value',
                name: "Phase velocity (km/s)",
                nameLocation: "middle",
                nameGap: 25,
                data: black_xData,
                show: true,
                max: formatDecimal(Math.max(...black_xData), 1) + 0.1,
                min: formatDecimal(Math.min(...black_xData), 1)
            },
            yAxis: {
                type: 'value',
                name: "wavelength/2 (km)",
                nameLocation: "middle",
                nameGap: 25,
                data: black_yData,
                inverse: true,
                show: true,
                max: formatDecimal(Math.max(...black_yData), 1) + 0.1,
                min: formatDecimal(Math.min(...black_yData), 1)
            },
            series: [
                {
                    id: "a",
                    type: 'line',
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 2,
                    data: black_data,
                    itemStyle: {
                        color: "#000"
                    }
                }
            ]
        };
        this.chart4.setOption(black_option);
    }
    handleSelect = (selectedKeys, info) => {
        this.handleClear();
        this.getData(info.node.title);
    }
    handleChangeInput = (key, e) => {
        this.setState({ [key]: Number(e.target.value) });
    }
    handleChangeData = e => {
        let { loaded } = this.state;
        this.setState({
            dataType: e.target.value,
            white_data_copy: undefined
        }, () => {
            if (loaded) {
                this.getDisp(1);
            }
        });
    }
    handleCalculate = () => {
        if (this.state.loaded) {
            this.getDisp(1);
        } else {
            message.info("请先读取文件")
        }
    }
    handleClear = () => {
        let clearHeatmap = (chart) => {
            chart.clear();
            chart.setOption({
                grid: {
                    right: 20,
                    left: 60,
                    top: 20,
                    bottom: 40,
                },
                xAxis: {
                    type: 'value',
                    name: "",
                    splitNumber: 10,
                    min: 0,
                    max: 1
                },
                yAxis: {
                    type: 'value',
                    name: "",
                    splitNumber: 10,
                    min: 0,
                    max: 1,
                    inverse: false
                },
                series: {
                    id: "a",
                    type: 'line',
                    data: []
                }
            }, true)
        }
        let clearLine = (chart) => {
            chart.clear();
            chart.setOption({
                grid: {
                    right: 20,
                    left: 60,
                    top: 20,
                    bottom: 40
                },
                xAxis: {
                    name: "",
                    show: false
                },
                yAxis: {
                    name: "",
                    show: false
                },
                series: {
                    id: "a",
                    type: 'line',
                    data: []
                }
            }, true)
        }
        this.setState({
            loaded: false,
            white_data: [],
            pink_data: [],
            black_data: [],
            black_xData: [],
            black_yData: [],
        }, () => {
            clearHeatmap(this.chart1_heatmap);
            clearLine(this.chart1_line);
            clearHeatmap(this.chart2_heatmap);
            clearLine(this.chart2_line);
            clearHeatmap(this.chart3_heatmap);
            clearLine(this.chart3_line);
            clearHeatmap(this.chart4);
        });
    }
    handleSave = () => {
        let { resultV, resultF, treeData } = this.state
        resultF = resultF.map(item => item.toFixed(4))
        var elementA = document.createElement('a');
        elementA.download = treeData[0].title + ".disper";//文件名
        //隐藏dom点不显示
        elementA.style.display = 'none';
        var blob = new Blob([`${resultV} \r\n${resultF} `]);//二进制
        elementA.href = URL.createObjectURL(blob);
        document.body.appendChild(elementA);
        elementA.click();
        document.body.removeChild(elementA);
    }
    componentWillUnmount() {
        this.chart1_heatmap.dispose();
        this.chart1_line.dispose();
        this.chart2_heatmap.dispose();
        this.chart2_line.dispose();
        this.chart3_heatmap.dispose();
        this.chart3_line.dispose();
        this.chart4.dispose();
    }
    render() {
        const { treeData, fmin, fmax, Tout_min, dTout, Tout_max, dataType } = this.state;
        return (
            <div id="main" style={{ width: "100vw", height: "100vh", padding: 16, fontSize: 14 }}>
                <div style={{ height: "100%", display: "flex", alignItems: "flex-start" }}>
                    <div className="param-panel" style={{ width: 310, height: "100%" }} >
                        <div className="box" style={{ padding: 0 }}>
                            <div className="box-title">Select a Data</div>
                            <div className="box-content" style={{ display: "flex", justifyContent: "center" }}>
                                <Tree treeData={treeData} onSelect={this.handleSelect} blockNode={true} checkable={false} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-title">Analysis Parameters</div>
                            <div className="box-content">
                                <div className="column">
                                    <div className="row">
                                        <label>fmin</label><Input defaultValue={fmin} onChange={this.handleChangeInput.bind(this, "fmin")} />
                                    </div>
                                    <div className="row">
                                        <label>fmax</label><Input defaultValue={fmax} onChange={this.handleChangeInput.bind(this, "fmax")} />
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="row">
                                        <label>Tout_min</label><Input defaultValue={Tout_min} onChange={this.handleChangeInput.bind(this, "Tout_min")} />
                                    </div>
                                    <div className="row">
                                        <label>dTout</label><Input defaultValue={dTout} onChange={this.handleChangeInput.bind(this, "dTout")} />
                                    </div>
                                    <div className="row">
                                        <label>Tout_max</label><Input defaultValue={Tout_max} onChange={this.handleChangeInput.bind(this, "Tout_max")} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: "center", padding: "8px 8px 0" }}>
                                <Button type="primary" onClick={this.handleCalculate}>Calculate</Button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-title">Select a Method</div>
                            <div className="box-content" style={{ display: "flex", justifyContent: "center" }}>
                                <Radio.Group onChange={this.handleChangeData} defaultValue={dataType}>
                                    <Radio value={"A2B"}>A-&gt;B</Radio>
                                    <Radio value={"B2A"}>B-&gt;A</Radio>
                                    <Radio value={"SYM"}>SYM</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-title">Dispersion</div>
                            <div className="box-content" style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button type="primary" style={{ width: "33%", height: 42 }} onClick={this.handleClear}>Clear</Button>
                                <Button type="primary" style={{ width: "33%", height: 42 }} onClick={this.handleSave}>Save</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "relative", height: "100%", width: "calc((100% - 310px) / 3 * 2)" }}>
                        <div className="chart-container">
                            <div id="chart1_heatmap" className="chart" />
                            <div id="chart1_line" className="chart" />
                            <div id="chart1_loading_mask" className="loading_mask"><Spin tip="Loading..." /></div>
                        </div>
                        <div className="chart-container">
                            <div id="chart2_heatmap" className="chart" />
                            <div id="chart2_line" className="chart" />
                            <div id="chart2_loading_mask" className="loading_mask"><Spin tip="Loading..." /></div>
                        </div>
                        <div className="chart-container">
                            <div id="chart3_heatmap" className="chart" />
                            <div id="chart3_line" className="chart" />
                            <div id="chart3_loading_mask" className="loading_mask"><Spin tip="Loading..." /></div>
                        </div>
                    </div>
                    <div id="chart4" style={{ width: "calc((100% - 310px) / 3)", height: "100%" }} />
                </div>
            </div>
        )
    }
} 