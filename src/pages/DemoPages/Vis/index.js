import React, { Component } from 'react';
import { Tree, Input, Radio, Button, message, Spin } from "antd";
import * as echarts from 'echarts';
import axios from "axios";
import { interp_multiPoint, getMax, getMin, getMaxIndex, getMinIndex, formatDecimal } from "./utils";
import "./index.less";

let treeData = [];
for (let i = 1; i < 52; i++) {
    treeData.push({
        title: 'pshift_group_' + i,
        key: 'pshift_group_' + i,
    })
}

export default class index extends Component {
    state = {
        loaded: false,
        treeData,
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
        vout: undefined,
        fval: undefined,
        white_data: [],
        pink_data: [],
        black_data: [],
        black_xData: [],
        black_yData: [],
        resultX: [],
        resultY: [],
        prevPosition: undefined,
        helpMaskVisible: false,
        opacity: 0
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
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("keypress", this.handleKeyPress);
    }
    handleResize = () => {
        this.chart1_heatmap.resize();
        this.chart1_line.resize();
        this.chart2_heatmap.resize();
        this.chart2_line.resize();
        this.chart3_heatmap.resize();
        this.chart3_line.resize();
        this.chart4.resize();
    }
    handleKeyPress = e => {
        if (e.key === "Enter" && e.target.localName === "input" && e.target.type === "text") {
            this.handleCalculate();
        }
    }
    getData = fileName => {
        this.chart1_loading_mask.style.display = "flex";
        this.chart2_loading_mask.style.display = "flex";
        this.chart3_loading_mask.style.display = "flex";
        axios.get(`./disper_json/${fileName}.json`, {
            headers: {
                "Cache-Control": "no-cache",
            },
        }).then(res => {
            this.chart1_loading_mask.style.display = "none";
            this.chart2_loading_mask.style.display = "none";
            this.chart3_loading_mask.style.display = "none";
            let { disper_map_stack_A2B, disper_map_stack_B2A, disper_map_stack_SYM, pshift } = res.data;
            this.setState({
                loaded: true,
                disper_map_stack_A2B,
                disper_map_stack_B2A,
                disper_map_stack_SYM,
                pshift,
            });
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
            this.lineRender(this.chart4);
            this.getDisp();
        });
    }
    getDisp = () => {
        let { dataType, disper_map_stack_A2B, disper_map_stack_B2A, disper_map_stack_SYM, pshift, fmin, fmax, Tout_min, dTout, Tout_max } = this.state;
        let { f0, v, nv } = pshift;
        let fminArr = [], fmaxArr = [];
        for (let i = 0, len = f0.length; i < len; i++) {
            fminArr.push(Math.abs(fmin - f0[i]));
            fmaxArr.push(Math.abs(fmax - f0[i]));
        }
        let fminIndex = getMinIndex(fminArr), fmaxIndex = getMinIndex(fmaxArr);
        let vout = [], resultX = [];
        for (let i = Tout_min; i <= Tout_max; i = Number((i + dTout).toFixed(2))) {
            vout.push(1 / i);
            resultX.push(i);
        }
        let proc_F = [], proc_V = [];
        for (let i = 0, len = f0.length; i < len; i++) {
            if (i >= fminIndex && i <= fmaxIndex) {
                proc_F.push(f0[i]);
            }
        }
        let white_DataSource = [], white_data = [];
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
        let range_v = getMax(v) - getMin(v);
        for (let i = 0, len = white_DataSource.length; i < len; i++) {
            if (i >= fminIndex && i <= fmaxIndex) {
                proc_V.push((getMaxIndex(white_DataSource[i]) + 1) / nv * range_v + getMin(v));
                white_data.push([f0[i], (getMaxIndex(white_DataSource[i]) + 1) / nv * range_v + getMin(v)]);
            } else {
                white_data.push([f0[i], NaN]);
            }
        }
        let fval = new Array(vout.length);
        let disp = {
            f: vout,
            v: interp_multiPoint(proc_F, proc_V, proc_F.length, vout, fval, vout.length)
        }
        for (let i = 0, len = disp.f.length; i < len; i++) {
            if (disp.f[i] < fmin) {
                disp.v[i] = NaN;
            } else if (disp.f[i] > fmax) {
                disp.v[i] = NaN;
            }
        }

        let pink_data = [], resultY = [];
        for (let i = 0, len = disp.f.length; i < len; i++) {
            if (disp.f[i] && disp.v[i]) {
                pink_data.push([disp.f[i], disp.v[i]]);
                resultY.push(disp.v[i]);
            } else {
                pink_data.push(NaN);
                resultY.push(NaN);
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
        this.setState({
            disp,
            vout,
            fval,
            resultX,
            resultY,
            fminIndex,
            fmaxIndex,
            white_data,
            pink_data,
            black_data,
            black_xData,
            black_yData
        });
        this.updateHMLineData(this.chart1_line, white_data, pink_data);
        this.updateHMLineData(this.chart2_line, white_data, pink_data);
        this.updateHMLineData(this.chart3_line, white_data, pink_data);
        this.updateLineData(this.chart4, black_xData, black_yData, black_data);
    }
    chartRender = (heatmap, line, dataSource, heatmap_expandOption) => {
        let { pshift } = this.state;
        let { f0, v, nf0, nv } = pshift;
        /**绘制热力图背景 */
        let heatmap_data = [], heatmap_xData = [], heatmap_yData = [];
        for (let i = 0; i < nf0; i++) {
            heatmap_xData.push(formatDecimal(f0[i], 2));
            for (let j = 0; j < nv; j++) {
                heatmap_data.push([i, j, dataSource[j][i]]);
            }
        }
        for (let j = 0; j < nv; j++) {
            heatmap_yData.push(formatDecimal(v[j], 2));
        }
        heatmap.setOption({
            grid: {
                right: 20,
                left: 60,
                top: 20,
                bottom: 40
            },
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
        }, true);
        this.setState({ heatmap_xData, heatmap_yData });
        if (heatmap_expandOption) {
            heatmap.setOption(heatmap_expandOption);
        }
        line.setOption({
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
                    itemStyle: {
                        color: "#fff"
                    },
                    data: [],
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
                    itemStyle: {
                        color: "#ff00ff"
                    },
                    hoverAnimation: false,
                }
            ]
        }, true);
        line.getZr().on('mousemove', params => {
            let { event, offsetX, offsetY } = params;
            if (event.button === 0 && event.buttons === 1) {
                let currentPosition = line.convertFromPixel({ seriesIndex: 0, xAxisIndex: 0 }, [offsetX, offsetY]);
                let { white_data, prevPosition, fminIndex, fmaxIndex, vout, disp, pshift } = this.state;
                let distenceArr = white_data.map(position => isNaN(position[1]) ? NaN : Math.abs(currentPosition[0] - position[0]));
                let position = [];
                let currentIndex = getMinIndex(distenceArr);
                if (event.shiftKey || event.ctrlKey) {
                    if (event.shiftKey) {
                        fmaxIndex = currentIndex;
                        for (let i = 0, len = white_data.length; i < len; i++) {
                            if (i > currentIndex) {
                                white_data[i] = NaN;
                            }
                        }
                    } else if (event.ctrlKey) {
                        fminIndex = currentIndex;
                        for (let i = 0, len = white_data.length; i < len; i++) {
                            if (i < currentIndex) {
                                white_data[i] = NaN;
                            }
                        }
                    }
                } else {
                    if (Array.isArray(white_data[currentIndex])) {
                        white_data[currentIndex][1] = currentPosition[1];
                        position = [currentIndex, currentPosition[1]];
                        line.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 0,
                            dataIndex: currentIndex
                        });
                        if (prevPosition) {
                            for (let i = 1; i < Math.abs(prevPosition[0] - currentIndex); i++) {
                                let index = prevPosition[0] > currentIndex ? prevPosition[0] - i : prevPosition[0] + i;
                                let y = prevPosition[1] + (currentPosition[1] - prevPosition[1]) / Math.abs(currentIndex - prevPosition[0]) * i;
                                white_data[index][1] = y;
                            }
                        }
                    }
                }
                let proc_F = [], proc_V = [];
                for (let i = 0, len = white_data.length; i < len; i++) {
                    if (Array.isArray(white_data[i])) {
                        proc_F.push(pshift.f0[i])
                        proc_V.push(white_data[i][1]);
                    }
                }
                disp.v = interp_multiPoint(proc_F, proc_V, proc_F.length, vout, new Array(vout.length), vout.length)
                let pink_data = [], resultY = [];
                for (let i = 0, len = disp.f.length; i < len; i++) {
                    if (disp.f[i] >= pshift.f0[fminIndex] && disp.f[i] <= pshift.f0[fmaxIndex]) {
                        pink_data.push([disp.f[i], disp.v[i]]);
                        resultY.push(disp.v[i]);
                    } else {
                        disp.v[i] = NaN;
                        pink_data.push(NaN);
                        resultY.push(NaN);
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
                this.updateHMLineData(this.chart1_line, white_data, pink_data);
                this.updateHMLineData(this.chart2_line, white_data, pink_data);
                this.updateHMLineData(this.chart3_line, white_data, pink_data);
                this.updateLineData(this.chart4, black_xData, black_yData, black_data);
                this.setState({ white_data, disp, pink_data, black_data, black_xData, black_yData, resultY, prevPosition: position, fminIndex, fmaxIndex });
            }
        })
        line.getZr().on("mouseup", () => {
            this.setState({ prevPosition: undefined });
        })
        line.getZr().on("mouseout", () => {
            this.setState({ prevPosition: undefined });
        })
        line.getZr().on('click', params => {
            let { event, offsetX } = params;
            let currentPositionX = line.convertFromPixel({ seriesIndex: 0, xAxisIndex: 0 }, [offsetX])[0];
            let { white_data, fminIndex, fmaxIndex } = this.state;
            let distenceArr = white_data.map(position => Math.abs(currentPositionX - position[0]));
            let currentIndex = getMinIndex(distenceArr);
            if (event.button === 0) {
                if (event.shiftKey || event.ctrlKey) {
                    if (event.shiftKey) {
                        fmaxIndex = currentIndex;
                        for (let i = 0, len = white_data.length; i < len; i++) {
                            if (i > currentIndex) {
                                white_data[i] = NaN;
                            }
                        }
                    } else if (event.ctrlKey) {
                        fminIndex = currentIndex;
                        for (let i = 0, len = white_data.length; i < len; i++) {
                            if (i < currentIndex) {
                                white_data[i] = NaN;
                            }
                        }
                    }
                    let { vout, disp, pshift } = this.state;
                    let proc_F = [], proc_V = [];
                    for (let i = 0, len = white_data.length; i < len; i++) {
                        if (Array.isArray(white_data[i])) {
                            proc_F.push(pshift.f0[i])
                            proc_V.push(white_data[i][1]);
                        }
                    }
                    disp.v = interp_multiPoint(proc_F, proc_V, proc_F.length, vout, new Array(vout.length), vout.length)
                    let pink_data = [], resultY = [];
                    for (let i = 0, len = disp.f.length; i < len; i++) {
                        if (disp.f[i] >= pshift.f0[fminIndex] && disp.f[i] <= pshift.f0[fmaxIndex]) {
                            pink_data.push([disp.f[i], disp.v[i]]);
                            resultY.push(disp.v[i]);
                        } else {
                            disp.v[i] = NaN;
                            pink_data.push(NaN);
                            resultY.push(NaN);
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
                    this.updateHMLineData(this.chart1_line, white_data, pink_data);
                    this.updateHMLineData(this.chart2_line, white_data, pink_data);
                    this.updateHMLineData(this.chart3_line, white_data, pink_data);
                    this.updateLineData(this.chart4, black_xData, black_yData, black_data);
                    this.setState({ pink_data, black_data, white_data, resultY, disp, fminIndex, fmaxIndex });
                }
            }
        })
    }
    updateHMLineData = (line, white_data, pink_data) => {
        line.setOption({
            series: [
                {
                    id: "a",
                    type: 'line',
                    data: white_data,
                },
                {
                    id: "b",
                    type: 'line',
                    data: pink_data,
                }
            ]
        });
    }
    lineRender = line => {
        line.setOption({
            tooltip: { formatter: params => 'f: ' + params.data[0].toFixed(4) + '<br>v: ' + params.data[1].toFixed(4) },
            grid: {
                right: 8,
                left: 50,
                top: 20,
                bottom: 40,
            },
            xAxis: {
                type: 'value',
                name: "Phase velocity (km/s)",
                nameLocation: "middle",
                nameGap: 25,
                show: true,
            },
            yAxis: {
                type: 'value',
                name: "wavelength/2 (km)",
                nameLocation: "middle",
                nameGap: 25,
                inverse: true,
                show: true,
            },
            series: {
                type: 'line',
                symbol: 'circle',
                smooth: true,
                symbolSize: 2,
                itemStyle: {
                    color: "#000"
                }
            }

        }, true);
    }
    updateLineData = (line, black_xData, black_yData, black_data) => {
        for (let i = 0; i < black_xData.length; i++) {
            if (isNaN(black_xData[i])) {
                black_xData.splice(i, 1);
                i -= 1;
            }
        }
        for (let i = 0; i < black_yData.length; i++) {
            if (isNaN(black_yData[i])) {
                black_yData.splice(i, 1);
                i -= 1;
            }
        }
        line.setOption({
            xAxis: {
                max: black_xData.length > 0 ? formatDecimal(Math.max(...black_xData), 1) + 0.1 : 1,
                min: black_xData.length > 0 ? formatDecimal(Math.min(...black_xData), 1) : 0
            },
            yAxis: {
                max: black_yData.length > 0 ? formatDecimal(Math.max(...black_yData), 1) + 0.1 : 1,
                min: black_yData.length > 0 ? formatDecimal(Math.min(...black_yData), 1) : 0
            },
            series: {
                type: 'line',
                data: black_data,
            }
        })
    }
    handleSelect = selectedKeys => {
        this.handleClear();
        this.getData(selectedKeys);
        this.setState({ fileName: selectedKeys });
    }
    handleChangeInput = (key, e) => {
        this.setState({ [key]: Number(e.target.value) });
    }
    handleChangeData = e => {
        this.setState({
            dataType: e.target.value,
        }, () => {
            if (this.state.loaded) {
                this.getDisp();
            }
        });
    }
    handleCalculate = () => {
        if (this.state.loaded) {
            this.getDisp();
        } else {
            message.info("请选择数据文件");
        }
    }
    handleClear = () => {
        let clearHeatmap = chart => {
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
        let clearLine = chart => {
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
        let clearLine2 = chart => {
            chart.clear();
            chart.setOption({
                grid: {
                    right: 8,
                    left: 50,
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
            clearLine2(this.chart4);
        });
    }
    handleSave = () => {
        let { resultX, resultY, loaded, fileName } = this.state
        if (loaded) {
            resultY = resultY.map(item => item.toFixed(4))
            var elementA = document.createElement('a');
            elementA.download = fileName + ".disper";//文件名
            //隐藏dom点不显示
            elementA.style.display = 'none';
            var blob = new Blob([`${resultX} \r\n${resultY} `]);//二进制
            elementA.href = URL.createObjectURL(blob);
            elementA.click();
        } else {
            message.info("请选择数据文件");
        }
    }
    openHelpMask = () => {
        let { opacity } = this.state;
        this.setState({ helpMaskVisible: true });
        let timer = setInterval(() => {
            opacity += 0.04;
            this.setState({ opacity });
            if (opacity > 1) clearInterval(timer);
        }, 10)
    }
    closeHelpMask = () => {
        this.setState({ helpMaskVisible: false, opacity: 0 });
    }
    componentWillUnmount() {
        this.chart1_heatmap.dispose();
        this.chart1_line.dispose();
        this.chart2_heatmap.dispose();
        this.chart2_line.dispose();
        this.chart3_heatmap.dispose();
        this.chart3_line.dispose();
        this.chart4.dispose();
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("keypress", this.handleKeyPress);
    }
    render() {
        const { treeData, fmin, fmax, Tout_min, dTout, Tout_max, dataType, helpMaskVisible, opacity } = this.state;
        return (
            <div id="vis-main">
                <div style={{ height: "100%", display: "flex", alignItems: "flex-start" }}>
                    <div style={{ width: 300, height: "100%" }} >
                        <div className="box" style={{ padding: 0 }}>
                            <div className="box-title">Select a Data</div>
                            <div className="box-content" style={{ display: "flex", justifyContent: "center", padding: 0 }}>
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
                            <div style={{ textAlign: "center" }}>
                                <Button type="primary" style={{ width: 120 }} onClick={this.handleCalculate}>Calculate</Button>
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
                            <div className="box-content" style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button type="primary" style={{ width: 120 }} onClick={this.handleClear}>Clear</Button>
                                <Button type="primary" style={{ width: 120 }} onClick={this.handleSave}>Save</Button>
                            </div>
                        </div>
                        <div style={{ marginTop: 20, textAlign: "center" }}>
                            <Button style={{ width: 120 }} onClick={this.openHelpMask}>查看帮助</Button>
                        </div>
                        <div className="help-mask" style={{ display: !helpMaskVisible && "none", opacity }} onClick={this.closeHelpMask}>
                            <div className="column">
                                <div className="dot-box">在此选择数据源</div>
                                <div className="dot-box">在此修改计算参数<br />修改完成后点击Calculate即可计算</div>
                                <div className="dot-box">选择线图数据源</div>
                                <div className="dot-box">Clear:清空画布<br />Save:下载数据</div>
                            </div>
                            <div className="column">
                                <div className="dot-box">
                                    A-&gt;B数据可视化区域<br />
                                    按住鼠标左键在图表上拖动，可修改白线<br />
                                    在图表上Ctrl+左键单击可截断鼠标对应横坐标左侧的白线，Shift+左键单击截断右侧<br />
                                    修改白线后实时插值生成紫线数据并绘制</div>
                                <div className="dot-box">B-&gt;A数据可视化区域<br />操作方式同上</div>
                                <div className="dot-box">SYM数据可视化区域<br />操作方式同上</div>
                            </div>
                            <div className="column">
                                <div className="dot-box">频散曲线<br />由紫线计算生成</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "relative", height: "100%", width: "calc((100% - 300px) / 3 * 2)" }}>
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
                    <div id="chart4" style={{ width: "calc((100% - 300px) / 3)", height: "100%" }} />
                </div>
            </div>
        )
    }
} 