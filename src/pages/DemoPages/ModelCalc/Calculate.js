/*
 *文件名 : Calculate.js
 *作者 : 刘哲
 *创建时间 : 2020/11/11
 *文件描述 : 模型计算组件
 */
import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Map, Marker } from 'react-amap';
import { Button, message, InputNumber, Tooltip, Drawer, Result, Modal, Table, Popconfirm, notification, DatePicker, TimePicker, Radio, Input, Select } from "antd";
import { SearchOutlined, DeleteOutlined, QuestionCircleOutlined, SwapOutlined, SaveOutlined, InfoCircleOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/zh_CN';
import copy from 'copy-to-clipboard';

//模型计算接口地址
const url = "http://139.217.82.132:5000/";
/**
 * 
 * 地图配置参数
 * 
 * @param {Boolean} Scale 地图比例尺
 * @param {Object} ControlBar 地图旋转、缩放按钮
 * @param {Object} MapType 地图切换覆盖层按钮
*/
const mapPlugins = [
    'Scale',
    {
        name: 'ControlBar',
        options: {
            position: { top: "10px", left: "-60px" },
        },
    },
    {
        name: 'MapType',
        options: {
            defaultType: 1,
            showRoad: true
        },
    }
];
//磁场模型选项
const modelOptions = [
    { label: "CHAOS7.2", value: "chaos" },
    { label: "DIFI4", value: "difi" },
    { label: "EMM2017", value: "emm" },
    { label: "IGRF13", value: "igrf" },
    { label: "LCS1", value: "lcs" },
    { label: "MF7", value: "mf" },
    { label: "SIFM", value: "sifm" },
    { label: "WMM2020", value: "wmm" },
    { label: "TIDE", value: "tide" },
];
const calcApi = {
    "wmm": { model: "WMM2020", name: "1.主磁场" },
    "emm": { model: "EMM2017", name: "2.岩石圈磁场" },
    "difi": { model: "DIFI4", name: "3.电离层磁场" },
}
/**
 * 
 * 表格列配置
 * 
 * @param {String} title 列名
 * @param {String} dataIndex 数据key
 * @param {Boolean} ellipsis 是否可缩略显示
 * @param {Number} width 列宽
*/
const columns = [
    {
        title: '磁场',
        dataIndex: 'mf',
    },
    {
        title: 'F(nT)',
        dataIndex: 'f_intensity',
    },
    {
        title: 'D(degree)',
        dataIndex: 'declination',
    },
    {
        title: 'I(degree)',
        dataIndex: 'inclination,',
    },
    {
        title: '模型',
        dataIndex: 'model',
    }
];
const columns2 = [
    {
        title: '磁场',
        dataIndex: 'mf',
    },
    {
        title: 'X(nT)',
        dataIndex: 'x_intensity',
    },
    {
        title: 'Y(nT)',
        dataIndex: 'y_intensity',
    },
    {
        title: 'Z(nT)',
        dataIndex: 'z_intensity',
    },
    {
        title: '模型',
        dataIndex: 'model',
    }
];
const paramColumns = [
    {
        title: '参数名称',
        dataIndex: 'paramName',
        ellipsis: true,
    },
    {
        title: '参数值',
        dataIndex: 'paramValue',
        ellipsis: true,
    },
]
/**
 * 
 * 验证是否为空值
 * 
 * @param {*} param 被验证的值
 * @param {String} paramName 被验证值的名称
*/
const checkNullvalue = (param, paramName) => {
    let checks = true;
    if (param === undefined || param === "" || param === null) {
        message.error(` ${paramName} 的值不能为空，请填写后重新提交`, 2);
        checks = false;
    } else {
        checks = true;
    }
    return checks;
};
/**
 * 
 * 将对象转换为表格需要的数据格式
 * 
 * @param {Object} data 数据源对象
 * @param {Array} targetDataSource 转换完成的数据
*/
const objectToDataSource = (data, targetDataSource) => {
    for (let key in data) {
        targetDataSource.push({
            key,
            paramName: key,
            paramValue: data[key]
        });
    }
    return targetDataSource;
};
/**
 * 
 * 缓存计算结果的消息提示
 * 
 * @param {String} message 消息的标题
 * @param {String} description 消息的具体描述
 * @param {Number} duration 显示时长
 * @param {String} placement 显示出现的位置
*/
const openNotification = () => {
    notification.info({
        message: '计算结果已缓存',
        description: '点击 “查看计算记录按钮” 可查看计算记录。',
        duration: 2,
        placement: "topLeft"
    });
};
/**
 * 
 * 日历中不可选日期
 * 
 * @param {Object} current 要判断是否符合要求的时间
*/
const disabledDate = current => current < moment(new Date(2000, 0, 1)) || current > moment();
/**
 * 
 * 获取模型名称
 * 
 * @param {String} model 模型名称
*/
const getModelName = model => {
    switch (model) {
        case "chaos":
            return "CHAOS7.2";
        case "difi":
            return "DIFI4";
        case "emm":
            return "EMM2017";
        case "igrf":
            return "IGRF13";
        case "lcs":
            return "LCS1";
        case "mf":
            return "MF7";
        case "sifm":
            return "SIFM";
        case "wmm":
            return "WMM2020";
        case "tide":
            return "TIDE";
        default:
            return "未定义";
    }
}
export default class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: 116.397602,
            latitude: 39.908573,
            inputLng: 116.397602,
            inputLat: 39.908573,
            lngDegree: 116,
            lngMinute: 23,
            lngSecond: 52,
            latDegree: 39,
            latMinute: 54,
            latSecond: 31,
            viewMode: false,
            altitude: 0,
            elevUint: "km",
            model: "",
            modelDesc: "",
            modelName: "",
            minYear: new Date().getFullYear(),
            minMonth: new Date().getMonth() + 1,
            minDay: new Date().getDate(),
            hour: 12,
            minute: 30,
            utc: 8,
            output: "fdi",
            drwaerVisible: false,
            calcResult: [],
            calcStatus: true,
            resMsg: "",
            modalVisible: false,
            calcStorage: sessionStorage.getItem("calcStorage") ? JSON.parse(sessionStorage.getItem("calcStorage")) : [],
            storageVisible: false,
            detailVisible: false,
            currentStgData: {},
            calcDataSource: [],
            calcStgParamData: [],
            calcStgResData: [],
            calcTime: "",
            showIcon: false,
            address: "",
            searchContent: '',
            calcCompleted: 0,
            calcCompletedTime: "",
            loading: false
        };
        /**
          * 
          * 地图事件
          * 
          * @param {Function} created 地图创建
          * @param {Function} click 点击事件
        */
        this.mapEvents = {
            created: e => {
                let auto, geocoder;
                window.AMap.plugin('AMap.Autocomplete', () => {
                    auto = new window.AMap.Autocomplete({ input: 'tipinput' });
                })
                window.AMap.plugin(["AMap.Geocoder"], () => {
                    geocoder = new window.AMap.Geocoder({
                        radius: 1000,
                        extensions: "all"
                    });
                    this.getAddress();
                });
                window.AMap.plugin('AMap.PlaceSearch', () => {
                    window.AMap.event.addListener(auto, "select", e => {
                        const { name, location } = e.poi;
                        this.setState({ searchContent: name });
                        geocoder.getAddress(location, (status, result) => {
                            if (status === 'complete' && result.regeocode) {
                                this.setState({
                                    longitude: location.R,
                                    latitude: location.Q,
                                    inputLng: location.R,
                                    inputLat: location.Q,
                                    lngDegree: parseInt(location.R),
                                    lngMinute: parseInt(location.R % 1 * 60),
                                    lngSecond: location.R % 1 * 60 % 1 * 60,
                                    latDegree: parseInt(location.Q),
                                    latMinute: parseInt(location.Q % 1 * 60),
                                    latSecond: location.Q % 1 * 60 % 1 * 60,
                                    address: result.regeocode.formattedAddress
                                });
                            } else {
                                message.error("查询失败", 2);
                            }
                        })
                    })
                })
            },
            click: e => {
                this.setState({
                    longitude: e.lnglat.R,
                    latitude: e.lnglat.Q,
                    inputLng: e.lnglat.R,
                    inputLat: e.lnglat.Q,
                    lngDegree: parseInt(e.lnglat.R),
                    lngMinute: parseInt(e.lnglat.R % 1 * 60),
                    lngSecond: e.lnglat.R % 1 * 60 % 1 * 60,
                    latDegree: parseInt(e.lnglat.Q),
                    latMinute: parseInt(e.lnglat.Q % 1 * 60),
                    latSecond: e.lnglat.Q % 1 * 60 % 1 * 60,
                })
                window.AMap.plugin(["AMap.Geocoder"], () => {
                    let geocoder = new window.AMap.Geocoder({
                        radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
                        extensions: "all"//返回地址描述以及附近兴趣点和道路信息，默认"base"
                    });
                    geocoder.getAddress(e.lnglat, (status, result) =>
                        this.setState({ address: status === 'complete' && result.regeocode ? result.regeocode.formattedAddress : "无数据" })
                    );
                });

            }
        }
        /**
          * 
          * 计算结果表格列配置
          * 
          * @param {String} title 列名
          * @param {String} dataIndex 数据key
          * @param {Boolean} ellipsis 是否可缩略显示
          * @param {String} width 列宽
          * @param {String} align 对齐方式
          * @param {HTMLElement} render 渲染方式
        */
        this.calcStorageColumns = [
            {
                title: '序号',
                dataIndex: 'key',
                ellipsis: true,
                width: 50,
                align: "center"
            },
            {
                title: '主要参数',
                dataIndex: 'params',
                ellipsis: true,
                align: "center",
                render: param =>
                    <div style={{ display: "inline-block", textAlign: "left" }}>
                        <span style={{ margin: 0 }}>经度: {param.longitude} °</span>
                        <br />
                        <span style={{ margin: 0 }}>纬度: {param.latitude} °</span>
                    </div>
            },
            {
                title: '计算时间',
                dataIndex: 'time',
                ellipsis: true,
                align: "center"
            },
            {
                title: '操作',
                dataIndex: 'action',
                width: 80,
                align: "center",
                render: index =>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Popconfirm
                            title="确定删除这条记录吗?"
                            onConfirm={this.handleDeleteStorage.bind(this, index)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <DeleteOutlined className="icon-delete" style={{ fontSize: 18 }} title="删除" />
                        </Popconfirm>
                        <SearchOutlined className="icon-view" onClick={this.openStgDetailDrawer.bind(this, index)} style={{ fontSize: 18 }} title="查看详情" />
                    </div>
            },
        ];
    }
    /**
    * 
    * 地图搜索框功能
    * 
    * @param {String} value 输入的内容
    */
    placeSearch = value => {
        this.setState({ searchContent: value })
    }
    // 组件挂载时调用
    componentDidMount() {
        document.title = "地磁模型计算器";
        let { model, calcStorage } = this.state;
        this.setModelDescName(model);
        this.setCalcDataSource(calcStorage);
        window.addEventListener('resize', this.handleResize);
        this.setState({ showIcon: window.innerWidth <= 768 });
    }
    /**
    * 
    * 改变窗口大小调用
    * 
    * @param {Object} e 改变窗口大小时返回的对象
    */
    handleResize = e => this.setState({ showIcon: e.target.innerWidth <= 768 });
    /**
      * 
      * 修改经度或纬度功能
      * 
      * @param {String} key 判断修改的是经度还是纬度
      * @param {Number} value 经度或纬度的值
    */
    handleChangeLngLat = (key, value) => this.setState({ [key]: value }, () => this.locateCenter());
    // 根据经纬度的值在地图上定位功能
    locateCenter = () => {
        let { inputLng, inputLat } = this.state;
        if (typeof (inputLng) === "number" && typeof (inputLat) === "number" && String(inputLng).length > 0 && String(inputLat).length > 0) {
            this.setState({
                longitude: inputLng,
                latitude: inputLat
            }, () => this.getAddress());
        }
    }
    // 根据经纬度的度分秒值在地图上定位功能
    locateCenterByDMS = () => {
        let { lngDegree, lngMinute, lngSecond, latDegree, latMinute, latSecond } = this.state;
        if (typeof (lngDegree) === "number" && typeof (lngMinute) === "number" && typeof (lngSecond) === "number" && typeof (latDegree) === "number" && typeof (latMinute) === "number" && typeof (latSecond) === "number"
            && String(lngDegree).length > 0 && String(lngMinute).length > 0 && String(lngSecond).length > 0 && String(latDegree).length > 0 && String(latMinute).length > 0 && String(latSecond).length > 0) {
            this.setState({
                longitude: lngDegree + lngMinute / 60 + lngSecond / 60 / 60,
                latitude: latDegree + latMinute / 60 + latSecond / 60 / 60
            }, () => this.getAddress());
        }
    }
    //获取经纬度的地址名称
    getAddress = () => {
        let { longitude, latitude } = this.state;
        let geocoder = new window.AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });
        geocoder.getAddress(longitude + "," + latitude, (status, result) =>
            this.setState({ address: status === 'complete' && result.regeocode ? result.regeocode.formattedAddress : "无数据" })
        );
    }
    //切换经度显示格式
    handleChangeViewMode = () => {
        let { viewMode } = this.state;
        if (viewMode) {
            let { longitude, latitude } = this.state;
            this.setState({
                viewMode: !viewMode,
                lngDegree: parseInt(longitude),
                lngMinute: parseInt(longitude % 1 * 60),
                lngSecond: longitude % 1 * 60 % 1 * 60,
                latDegree: parseInt(latitude),
                latMinute: parseInt(latitude % 1 * 60),
                latSecond: latitude % 1 * 60 % 1 * 60,
            });
        } else {
            let { lngDegree, lngMinute, lngSecond, latDegree, latMinute, latSecond } = this.state;
            this.setState({
                viewMode: !viewMode,
                inputLng: lngDegree + lngMinute / 60 + lngSecond / 60 / 60,
                inputLat: latDegree + latMinute / 60 + latSecond / 60 / 60
            })
        }
    }
    /**
     * 
     * 修改经度或纬度的度分秒值功能
     * 
     * @param {String} key 判断修改的是经度还是纬度的度或分或秒
     * @param {Number} value 修改的值
    */
    handleChangeDMS = (key, value) => this.setState({ [key]: value }, () => this.locateCenterByDMS());
    /**
      * 
      * 修改高程或时区功能
      * 
      * @param {String} key 判断修改的是高程还是时区
      * @param {Number} value 高程或时区的值
    */
    handleChangeParam = (key, value) => this.setState({ [key]: value });
    /**
      * 
      * 修改高程单位功能
      * 
      * @param {Object} e 修改高程单位选项时传入的对象
    */
    handleChangeElevUnit = e => this.setState({ elevUint: e.target.value });
    /**
      * 
      * 修改磁场模型功能
      * 
      * @param {String} value 当前所选择的磁场模型
    */
    handleChangeModel = value => {
        this.setState({ model: value });
        this.setModelDescName(value);
    }
    /**
      * 
      * 设置磁场模型介绍的标题和内容功能，在组件挂载和修改磁场模型调用
      * 
      * @param {String} value 当前所选择的磁场模型
    */
    setModelDescName = value => {
        let modelDesc = "", modelName = "";
        switch (value) {
            case "chaos":
                modelName = "CHAOS7.2";
                modelDesc = "CHAOS系列模型( CHAMP/Ørsted/SAC-C model)是描述全球地磁场（包括内源场和外源场）及其长期变化的高精度数学模型。该模型在构建过程中, 采用了一些新的改进技术，如: 重新确定资料筛选标准、矢量资料的坐标转化、外源磁场的拟合等，使模型的可靠性得以提高。它是由丹麦国家空间中心（DTU Space）建立和维护的。2006 年，DTU Space提出了第一代CHAOS模型。第一代CHAOS模型是利用1999年3月至2005年9月的CHAMP、Ørsted和SAC-C三颗卫星的高精度磁测数据计算得到的。DTU Space 在2008-2016年先后提出了xCHAOS、CHAOS－2、CHAOS－3、CHAOS－4、CHAOS－5和CHAOS-6模型。最新的CHAOS-7模型在2019年发布，有效使用期为1999-2020年。CHAOS-7 使用的数据包括卫星磁测数据（来自CHAMP, Ørsted、SAC-C、Cryosat2和Swarm卫星）和182个地面台站数据。CHAOS-7模型球谐级数展开至90阶，其中，地核磁场为1－20阶，岩石圈磁场为21－90阶。";
                break;
            case "difi":
                modelName = "DIFI4";
                modelDesc = "专用电离层磁场反演模型（Dedicated Ionospheric Field Inversion Model，简称	DIFI）是描述地球中低纬度地区（+/- 55度之间）在地磁静日期间的太阳宁静区（Solar-quiet，Sq）和赤道电急流(Equatorial electrojet，EEJ) 磁场（此类磁场属于地磁场中占比例极小的感应磁场）及其变化的数学模型。DIFI模型是由欧洲航天局 (ESA)提供资助，并由科罗拉多大学波尔得分校的环境科学合作研究所（CIRES）和巴黎地球物理学院（IPGP）共同研制的。该模型的计算方法于2013年首次提出。在2015-2016年期间，CIRES发布了DIFI-2015a、 DIFI-2015b和DIFI-2版本。最新的DIFI-3模型在2017年发布。该模型在构建过程中，使用了Swarm系列卫星和地面观测台站在2013年12月至2017年6月期间的磁测数据。DIFI-3模型球谐级数展开至60阶。";
                break;
            case "emm":
                modelName = "EMM2017";
                modelDesc = "增强地磁场模型（Enhanced Magnetic Model，简称EMM）是描述地球主磁场和岩石圈磁场的数学模型。EMM模型是利用球谐分析法描述岩石圈磁场的模型中精度和空间分辨率最高的模型之一，其包含的地球岩石圏磁场信息更加全面精细。该模型被广泛应用于民用定位导航系统中，具有很高的实用价值。EMM模型是由美国国家地球物理数据中心（NGDC）和英国地质调查局（BGS）联合研制和维护的。该模型的前身是NGDC-720模型。最新的EMM2017模型在2017年7月发布，有效使用期为2000-2022年。EMM2017使用的数据包括卫星、 航空、海洋和地面磁测数据，球谐级数展开至790阶（地核磁场为1-15阶，岩石圈磁场为16-790阶），空间分辨率达到51 km。";
                break;
            case "igrf":
                modelName = "IGRF13";
                modelDesc = "国际地磁参考场模型（International Geomagnetic Reference Field，简称IGRF）是国际上通用的标准地磁模型，是一种根据高斯理论建立的用于描述地球主磁场及其长期变化在全球分布的数学模型。它是由国际地磁和高空大气物理协会（IAGA）的V-MOD工作小组建立和维护的。模型每隔5年更新一次。1968年，IAGA发布了第1代IGRF模型（IGRF-1）。2014年，IAGA发布了第12代IGRF模型（IGRF-12），至此，IGRF包括了1900-2015年（间隔5年）共24个主磁场模型，其适用的时间范围为1900.01.01-2019.12.31。IGRF-12融合了卫星（Swarm：2013-2014、Ørsted：1999-2013、CHAMP：2000-2010、SAC-C:2001-2013）数据、地面台站观测数据和地面流动磁测数据，球谐系数13阶，对应的空间分辨率为3000 km。该模型地磁场的全球估计精度约为50-300 nT。";
                break;
            case "lcs":
                modelName = "LCS1";
                modelDesc = "基于CHAMP和Swarm卫星数据的岩石圈磁场模型（Lithospheric model derived from CHAMP and Swarm satellite data，简称LCS）是描述全球岩石圈磁场的高精度数学模型。LCS模型是由丹麦国家空间中心（DTU Space）的Nils Olsen教授领导的科研小组于2017年首次提出的，目前只有一个版本LCS-1。该模型使用了CHAMP卫星在2006年9月至2010年9月期间以及Swarm 的Alpha 和 Charlie两颗卫星在2014年4月至2016年12月期间的磁测数据。该模型是由磁梯度数据计算得到的。LCS-1用16-185阶球谐函数表示岩石圈磁场，空间分辨率达到220 km。需要注意的是，当球谐阶数大于133时，模型会出现严重的能量泄露现象。";
                break;
            case "mf":
                modelName = "MF7";
                modelDesc = "MF模型（Magnetic Field，简称MF）是基于 CHAMP卫星数据构建的描述岩石圈磁场的数学模型。它在推测岩石圈的组成和结构上有独特的优势，其中的长波长成分是编制大陆异常图、全球尺度海洋异常图和航磁异常图的重要依据，而且具有较高的精度。MF模型是由德国国家地球科学研究中心(GFZ)建立和维护的。第1代的MF1模型于2002年发布，用15-80阶球谐函数描述岩石圈磁场的可见部分。最新的MF7模型在2010年8月发布。该模型主要使用了2007年5月至2010年4月的CHAMP卫星数据，球谐级数展开至133阶，对应的空间分辨率为300 km。";
                break;
            case "sifm":
                modelName = "SIFM";
                modelDesc = "Swarm初始磁场模型（Swarm Initial Field Model，简称SIFM）是描述地球磁场（包括主磁场和岩石圈磁场）及其长期变化的数学模型。该模型是由丹麦国家空间中心（DTU Space）的Nils Olsen教授领导的科研小组于2014年提出的。SIFM模型在构建过程中，仅使用了由欧洲航天局 (ESA)发射的Swarm系列卫星（Alpha、 Bravo和Charlie）在2013年11月至2015年1月期间的的磁测数据。该模型首次利用由低轨道卫星数据计算得到的磁梯度信息来提高模型精度，并取得了良好效果（模型估计值与卫星实测值的平均残差值仅为0.12 nT）。SIFM模型球谐级数展开至70阶，对应的空间分辨率为550 km。对静态岩石圈磁场值（15-70阶）的描述，SIFM和MF7模型基本接近。";
                break;
            case "wmm":
                modelName = "WMM2020";
                modelDesc = "世界地磁场模型 (World Magnetic Mode l，简称WMM)是一种主要用于描述地球主磁场，同时也兼顾到岩石圈磁场和海洋感应磁场长波成分的数学模型。WMM是IGRF的候选模型之一。该模型主要为美国、英国国防部、北大西洋公约组织( NATO)和国际海道测量组织(WHO)提供导航及定向服务，同时在民用导航定位系统和航向姿态测量系统中也有着广泛应用。WMM是由美国国家地理空间情报局（NGA）和英国国防地理中心（DGC）提供资助，并由美国国家地球物理数据中心（NGDC）联合英国地质调查局（BGS）共同研制的世界地磁模型。模型每隔5年更新一次。最新的WMM2015模型在2014年12月发布，有效使用期为2015.01.01-2019.12.31。WMM2015模型所使用的数据主要包括卫星磁测（Swarm：2013-2014、Ørsted：1999-2013、CHAMP：2000-2010）和地面台站时均值两种类型。该模型的球谐系数是12阶，对应的空间分辨率为3200 km。该模型地磁强度的全球估计精度约为90-170 nT。";
                break;
            case "tide":
                modelName = "TIDE";
                modelDesc = "理论重力固体潮（Earth Tide，简称TIDE）模型。固体潮是一种重要的地球物理现象,会影响到各种测量数据的精确度,因此在大地测量、精密工程测量等很多应用中都需进行固体潮改正。根据固体潮理论,采用非弹性地球潮汐理论模型,在指定的时间段和时间间隔（分别为1分钟，30分钟，1小时，6小时）计算全球各个整数纬度上的重力固体潮的理论值。并且在二维和三维尺度上对全球重力固体潮进行仿真。可以很直观地观察各种波在全球的分布规律,以及某个区域的重力固体潮所有波,某类潮波,或者某个潮波分量随时间的变化规律,同时为固体潮的研究提供了一个很好的平台。";
                break;
            default:
                break;
        }
        this.setState({ modelDesc, modelName });
    }
    //控制磁场模型介绍抽屉是否显示
    handleModeldesDrawerVisible = () => {
        let { drwaerVisible } = this.state;
        this.setState({ drwaerVisible: !drwaerVisible });
    }
    /**
      * 
      * 修改日期功能
      * 
      * @param {Object} moment 所选择日期对应的时间对象
    */
    handleChangeDate = moment => {
        this.setState({
            minYear: moment._d.getFullYear(),
            minMonth: moment._d.getMonth() + 1,
            minDay: moment._d.getDate()
        });
    }
    /**
      * 
      * 修改时间功能
      * 
      * @param {Object} moment 所选择时间对应的时间对象
    */
    handleChangeTime = moment => {
        this.setState({
            hour: moment._d.getHours(),
            minute: moment._d.getMinutes()
        })
    }
    /**
      * 
      * 修改参数格式功能
      * 
      * @param {Object} e 修改参数格式选项时传入的对象
    */
    handleChangeOutput = e => this.setState({ output: e.target.value });
    //提交参数并计算功能，计算成功后，显示计算结果对话框
    handleCalculate = api => {
        let { inputLng, inputLat, altitude, elevUint, minYear, minMonth, minDay, hour, minute, utc, output, calcResult, } = this.state;
        axios.get(url + api, {
            params: {
                declon: inputLng,
                declat: inputLat,
                lon: inputLng,
                lat: inputLat,
                alti: altitude,
                elevUint,
                minYear,
                minMonth,
                minDay,
                hour,
                minute,
                utc,
                output,
                key: "cea2009"
            }
        }).then(response => {
            let { data } = response;
            let { calcCompleted, calcStatus } = this.state;
            data.mf = calcApi[api].name;
            data.index = calcCompleted;
            this.setState({
                calcCompleted: calcCompleted + 1
            });
            if (data.key) {
                this.setState({
                    calcStatus: calcStatus && false,
                    resMsg: data.key,
                });
            } else {
                for (let key in data) {
                    if (typeof (data[key]) === "number") {
                        data[key] = Number(data[key].toFixed(2));
                    }
                }
                calcResult.push(data);
                this.setState({
                    calcResult,
                    calcStatus: calcStatus && true,
                    resMsg: data.key,
                });
            }
            if (calcCompleted === 2) {
                let sortedArray = [];
                for (let i = 0, len = calcResult.length; i < len; i++) {
                    switch (calcResult[i].mf) {
                        case "1.主磁场":
                            sortedArray[0] = calcResult[i]
                            break;
                        case "2.岩石圈磁场":
                            sortedArray[1] = calcResult[i]
                            break;
                        case "3.电离层磁场":
                            sortedArray[2] = calcResult[i]
                            break;
                        default:
                            break;
                    }
                }
                if (this.state.calcStatus) {
                    if (output === "fdi") {
                        sortedArray.push({
                            mf: "总磁场",
                            f_intensity: (calcResult[1].f_intensity + calcResult[2].f_intensity).toFixed(2),
                            declination: (calcResult[1].declination + calcResult[2].declination).toFixed(2),
                            "inclination,": (calcResult[1]["inclination,"] + calcResult[2]["inclination,"]).toFixed(2),
                            model: "",
                            index: calcCompleted + 2
                        });
                    }
                    this.setState({
                        calcResult: sortedArray,
                        modalVisible: true,
                        loading: false
                    }, () => {
                        this.handleSaveResult();
                    });
                } else {
                    this.setState({
                        modalVisible: true,
                        loading: false
                    });
                }
            }
        }).catch(() => {
            this.setState({ calcStatus: false });
            message.error("接口调用失败", 2);
        });
    }
    handleSubmit = () => {
        let { inputLng, inputLat, altitude, utc } = this.state;
        if (checkNullvalue(inputLng, "经度") && checkNullvalue(inputLat, "纬度") && checkNullvalue(altitude, "高程") && checkNullvalue(utc, "时区")) {
            this.setState({
                calcCompleted: 0,
                calcResult: [],
                loading: true
            }, () => {
                for (let api in calcApi) {
                    this.handleCalculate(api);
                }
            })
        }
    }
    //显示计算结果对话框
    openResModal = () => this.setState({ modalVisible: true });
    //关闭计算结果对话框
    closeResModal = () => {
        this.setState({ modalVisible: false });
        if (this.state.calcStatus) { openNotification(); }
    }
    //缓存计算结果到sessionStorage中
    handleSaveResult = () => {
        const { address, longitude, latitude, altitude, elevUint, minYear, minMonth, minDay, hour, minute, utc, calcResult, calcStorage } = this.state;
        const calcParams = { address, longitude, latitude, altitude, elevUint, minYear, minMonth, minDay, hour, minute, utc };
        const date = new Date();
        let calcTime = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours() > 9 ? date.getHours() : "0" + date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()}`;
        calcStorage.push({ calcParams, calcResult, calcTime });
        sessionStorage.setItem("calcStorage", JSON.stringify(calcStorage));
        this.setState({ calcStorage, calcCompletedTime: calcTime });
        this.setCalcDataSource(calcStorage);
    }
    /**
      * 
      * 生成计算记录表格所需的数据格式
      * 
      * @param {Array} calcStorage 要转换的数据
    */
    setCalcDataSource = calcStorage => {
        const calcDataSource = [];
        for (let i = 0, len = calcStorage.length; i < len; i++) {
            calcDataSource.push({
                key: i,
                params: { longitude: calcStorage[i].calcParams.longitude.toFixed(6), latitude: calcStorage[i].calcParams.latitude.toFixed(6), address: calcStorage[i].calcParams.address },
                model: getModelName(calcStorage[i].calcParams.model),
                time: calcStorage[i].calcTime,
                action: i
            });
        }
        this.setState({ calcDataSource });
    }
    //控制计算记录抽屉是否显示
    handleStgDrawerVisible = () => {
        let { storageVisible } = this.state;
        this.setState({ storageVisible: !storageVisible });
    }
    /**
      * 
      * 删除计算记录
      * 
      * @param {Number} index 要删除计算记录的序号
    */
    handleDeleteStorage = index => {
        let { calcStorage } = this.state;
        calcStorage.splice(index, 1);
        this.setState({ calcStorage });
        sessionStorage.setItem("calcStorage", JSON.stringify(calcStorage));
        this.setCalcDataSource(calcStorage);
    }
    /**
      * 
      * 查看计算记录详情
      * 
      * @param {Number} index 要查看计算记录的序号
    */
    openStgDetailDrawer = index => {
        let { calcStorage } = this.state, calcStgParamData = [];
        objectToDataSource(calcStorage[index].calcParams, calcStgParamData);
        delete calcStorage[index].calcResult.model;
        this.setState({
            currentStgData: calcStorage[index],
            detailVisible: true,
            calcStgParamData,
            calcStgResData: calcStorage[index].calcResult,
            calcTime: calcStorage[index].calcTime
        });
    }
    //关闭计算记录详情抽屉
    closeStgDetailDrawer = () => this.setState({ detailVisible: false });
    // 清空计算记录
    clearStorage = () => {
        this.setState({ calcStorage: [] });
        sessionStorage.removeItem("calcStorage");
        this.setCalcDataSource([]);
    }
    //复制计算结果功能
    handleResCopy = () => {
        let { calcResult, output } = this.state;
        let str = output === "fdi" ? "磁场,F(nT),D(degree),I(degree),模型\r\n" : "磁场,X(nT),Y(nT),Z(nT),模型\r\n";
        calcResult.map(item => {
            str += output === "fdi" ?
                item.mf + "," + item.f_intensity + "," + item.declination + "," + item["inclination,"] + "," + item.model + "\r\n"
                :
                item.mf + "," + item.x_intensity + "," + item.y_intensity + "," + item.z_intensity + "," + item.model + "\r\n";
            return null;
        })
        copy(str);
        message.success("已复制到剪贴板", 2);
    }
    //复制计算记录功能
    handleStgCopy = () => {
        let { currentStgData } = this.state;
        let str = "";
        str += "******计算时间******\r\n" + currentStgData.calcTime + "\r\n\r\n******计算参数******\r\n参数名称  参数值\r\n";
        for (let key in currentStgData.calcParams) {
            str += key + " # " + currentStgData.calcParams[key] + "\r\n";
        }
        str += "\r\n******计算结果******\r\n";
        str += currentStgData.calcResult[0].hasOwnProperty('f_intensity') ? "磁场,F(nT),D(degree),I(degree),模型\r\n" : "磁场,X(nT),Y(nT),Z(nT),模型\r\n";
        currentStgData.calcResult.map(item => {
            str += currentStgData.calcResult[0].hasOwnProperty('f_intensity') ?
                item.mf + "," + item.f_intensity + "," + item.declination + "," + item["inclination,"] + "," + item.model + "\r\n"
                :
                item.mf + "," + item.x_intensity + "," + item.y_intensity + "," + item.z_intensity + "," + item.model + "\r\n";
            return null;
        })
        copy(str);
        message.success("已复制到剪贴板", 2);
    }
    render() {
        const { longitude, latitude, inputLng, inputLat, lngDegree, lngMinute, lngSecond, latDegree, latMinute, latSecond, viewMode,
            altitude, elevUint, utc, output, modalVisible, calcStatus, resMsg, storageVisible,
            detailVisible, calcDataSource, calcStgParamData, calcStgResData, calcTime, showIcon, address, searchContent, calcResult, calcCompleted, calcCompletedTime
            , model, modelDesc, modelName, drwaerVisible, loading
        } = this.state;
        return (
            <div className="content calculate-content">
                <div className="params-container">
                    <div className="param">
                        <span className="map-param-label">搜索地址：</span>
                        <Input.Search value={searchContent} id="tipinput" onChange={e => this.placeSearch(e.target.value)} allowClear />
                    </div>
                    <div className="param" style={{ display: "flex" }}>
                        <span className="map-param-label">当前定位地址：</span>
                        <div style={{ width: "calc(100% - 100px)" }}>{address}</div>
                    </div>
                    <div className="param">
                        <span className="param-label">经度：</span>
                        <Tooltip placement="top" title="经度范围-180~180">
                            {viewMode ?
                                <InputNumber value={inputLng ? inputLng.toFixed(6) : inputLng} max={180} min={-180} placeholder="-180~180" onChange={this.handleChangeLngLat.bind(this, "inputLng")} formatter={value => `${value} °`} />
                                :
                                <div className="triple-input">
                                    <InputNumber value={lngDegree} max={lngMinute === 0 && lngSecond === 0 ? 180 : 179} min={lngMinute === 0 && lngSecond === 0 ? -180 : -179} onChange={this.handleChangeDMS.bind(this, "lngDegree")} formatter={value => `${value} °`} />
                                    <InputNumber value={lngMinute} max={59} min={0} onChange={this.handleChangeDMS.bind(this, "lngMinute")} formatter={value => `${value} ′`} />
                                    <InputNumber value={Math.ceil(lngSecond)} max={59} min={0} onChange={this.handleChangeDMS.bind(this, "lngSecond")} formatter={value => `${value} ″`} />
                                </div>
                            }
                        </Tooltip>
                        <SwapOutlined className="icon-info" onClick={this.handleChangeViewMode} />
                    </div>
                    <div className="param">
                        <span className="param-label">纬度：</span>
                        <Tooltip placement="top" title="纬度范围-90~90">
                            {viewMode ?
                                <InputNumber value={inputLat ? inputLat.toFixed(6) : inputLat} max={90} min={-90} placeholder="-90~90" onChange={this.handleChangeLngLat.bind(this, "inputLat")} formatter={value => `${value} °`} />
                                :
                                <div className="triple-input">
                                    <InputNumber value={latDegree} max={latMinute === 0 && latSecond === 0 ? 90 : 89} min={latMinute === 0 && latSecond === 0 ? -90 : -89} onChange={this.handleChangeDMS.bind(this, "latDegree")} formatter={value => `${value} °`} />
                                    <InputNumber value={latMinute} max={59} min={0} onChange={this.handleChangeDMS.bind(this, "latMinute")} formatter={value => `${value} ′`} />
                                    <InputNumber value={Math.ceil(latSecond)} max={59} min={0} onChange={this.handleChangeDMS.bind(this, "latSecond")} formatter={value => `${value} ″`} />
                                </div>
                            }
                        </Tooltip>
                        <SwapOutlined className="icon-info" onClick={this.handleChangeViewMode} />
                    </div>
                    <div className="param">
                        <span className="param-label">高程：</span>
                        <Tooltip placement="top" title="高程范围-10~600">
                            <InputNumber value={altitude} max={600} min={-10} placeholder="-10~600" onChange={this.handleChangeParam.bind(this, "altitude")} />
                        </Tooltip>
                    </div>
                    <div className="param">
                        <span className="param-label">高程单位：</span>
                        <Radio.Group defaultValue={elevUint} options={[{ label: "km", value: "km" }, { label: "m", value: "m" }]} onChange={this.handleChangeElevUnit} />
                    </div>
                    <div className="param">
                        <span className="param-label">日期：</span>
                        <DatePicker defaultValue={moment()} locale={locale} placeholder="请选择日期" disabledDate={disabledDate} onChange={this.handleChangeDate} allowClear={false} />
                    </div>
                    <div className="param">
                        <span className="param-label">时间：</span>
                        <TimePicker defaultValue={moment('12:00', 'HH:mm')} locale={locale} placeholder="请选择时间" format={'HH:mm'} onChange={this.handleChangeTime} allowClear={false} />
                    </div>
                    <div className="param">
                        <span className="param-label">时区：</span>
                        <Tooltip placement="top" title="正数为东时区，负数为西时区">
                            <InputNumber defaultValue={utc} max={12} min={-11} precision={0} placeholder="-11~12" onChange={this.handleChangeParam.bind(this, "utc")} />
                        </Tooltip>
                    </div>
                    <div className="param">
                        <span className="param-label">参数格式：</span>
                        <Radio.Group defaultValue={output} options={[{ label: "FDI", value: "fdi" }, { label: "XYZ", value: "xyz" }]} onChange={this.handleChangeOutput} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Button className="custom-btn calculate-btn" loading={loading} onClick={this.handleSubmit} type="primary">{loading ? "正在计算" : "计算"}</Button>
                    </div>
                    <Modal title="模型计算结果" visible={modalVisible} onOk={this.openResModal} onCancel={this.closeResModal} footer={null} width={800} style={{ maxWidth: "100%" }}>
                        <Result
                            status={calcStatus ? "success" : "error"}
                            title={calcStatus ? "模型计算成功!" : "模型计算失败!"}
                            subTitle={calcStatus ?
                                <div>
                                    <p>{"地址:" + address}</p>
                                    <p>{"时间:" + calcCompletedTime}</p>
                                    <p>{"经度:" + (inputLng ? inputLng.toFixed(6) : inputLng)}</p>
                                    <p>{"纬度:" + (inputLat ? inputLat.toFixed(6) : inputLat)}</p>
                                </div>
                                : resMsg}
                        />
                        {calcCompleted === 3 && calcStatus ?
                            <>
                                <Table dataSource={calcResult} rowKey={record => record.index} columns={output === "fdi" ? columns : columns2} bordered pagination={false} scroll={{ x: 'max-content' }} />
                                <div style={{ padding: "16px 0", textAlign: "center" }}>
                                    <Button className="custom-btn" type="primary" onClick={this.handleResCopy} style={{ height: 44 }}>复制计算结果</Button>
                                </div>
                            </>
                            : null}
                    </Modal>
                </div>
                <div className="map-container">
                    <Map plugins={mapPlugins} viewMode="3D" amapkey="3dabe81a1752997b9089ccb0b1bfcecb" center={[longitude, latitude]} zoom={3} events={this.mapEvents}>
                        <Marker position={[longitude, latitude]} offset={{ x: -8, y: -21 }}>
                            <div className="marker">
                                <div className="circle" />
                                <div className="tran" />
                            </div>
                        </Marker>
                    </Map>
                </div>
                <Button className="custom-btn storage-btn" onClick={this.handleStgDrawerVisible} type="primary">{showIcon ? <SaveOutlined style={{ fontSize: 18 }} /> : "查看计算记录"}</Button>
                <Button className="custom-btn model-btn" onClick={this.handleModeldesDrawerVisible} type="primary">{showIcon ? <InfoCircleOutlined style={{ fontSize: 18 }} /> : "模型介绍"}</Button>
                <Drawer className="calcdrawer" title="计算记录" placement="left" onClose={this.handleStgDrawerVisible} visible={storageVisible} footerStyle={{ textAlign: "right" }}
                    footer={
                        <Button onClick={() => Modal.confirm({
                            title: '确定要清空记录吗?',
                            icon: <QuestionCircleOutlined style={{ color: 'red' }} />,
                            content: "记录清空后将无法恢复。",
                            okText: "确定",
                            okButtonProps: { danger: true, type: "primary" },
                            cancelText: "取消",
                            onOk: this.clearStorage,
                        })}>
                            清空记录
                        </Button>
                    }>
                    <Table className="calc-storage-table" dataSource={calcDataSource} columns={this.calcStorageColumns} bordered pagination={false} />
                    <Drawer className="calcdrawer" title="计算详情" placement="left" visible={detailVisible} onClose={this.closeStgDetailDrawer} footer={null}>
                        <div style={{ textAlign: "right", marginBottom: 10 }}>计算时间：{calcTime}</div>
                        <div className="stg-details-table-container">
                            <Table className="stg-details-table" style={{ width: 250 }} title={() => "计算参数"} dataSource={calcStgParamData} columns={paramColumns} bordered pagination={false} />
                            <Table className="stg-details-table" rowKey={(r, i) => i} scroll={{ x: 'max-content' }} style={{ width: "calc(100% - 266px)" }} title={() => "计算结果"} dataSource={calcStgResData} columns={calcStgResData.length ? calcStgResData[0].hasOwnProperty('x_intensity') ? columns2 : columns : columns} bordered pagination={false} />
                        </div>
                        <div style={{ padding: "16px 0", textAlign: "center" }}>
                            <Button className="custom-btn" type="primary" onClick={this.handleStgCopy} style={{ height: 44 }}>复制计算详情</Button>
                        </div>
                    </Drawer>
                </Drawer>
                <Drawer className="modeldrawer"
                    title={
                        <>模型：
                            <Select options={modelOptions} placeholder="请选择模型" onChange={this.handleChangeModel} />
                        </>
                    }
                    placement="right"
                    onClose={this.handleModeldesDrawerVisible}
                    visible={drwaerVisible}
                    bodyStyle={{ textIndent: "2em" }}
                >
                    {model ?
                        <>
                            <p style={{ textIndent: 0, fontSize: 20 }}>{modelName + "模型介绍"}</p>
                            <p>{modelDesc}</p>
                        </>
                        :
                        "请选择模型"
                    }
                </Drawer>
            </div>
        )
    }
}