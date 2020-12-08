import React, { Component } from 'react'
import { Form, Button, InputNumber, Select, Input, Row, Col, message, Upload, Radio, Checkbox, Space } from "antd";
import { UploadOutlined, CloseCircleFilled } from '@ant-design/icons';
import "./index.less";

const { Option } = Select;
const { TextArea } = Input;
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            itemList: [],
            itemNum: 0,
            inputType: ["text", "radio", "checkbox", "select", "textarea", "upload"],
            initCreateValues: {}
        }
        this.Form = React.createRef();
        this.showForm = React.createRef();
    }
    componentDidMount() {
        document.title = "自定义表单";
    }
    //表单名称
    changeFormName = e => {
        this.setState({ formName: e.target.value });
    };
    //控件数量
    changeItemNum = value => {
        let { itemList, itemNum } = this.state;
        value = value ? parseInt(value) : 0;
        //获取当前itemNum与前一个itemNum的差值
        let disValue = value - itemNum;
        if (value < 0 || isNaN(value)) {
            itemList = [];
            value = 0;
        } else {
            if (disValue > 0) {
                for (let i = 0; i < disValue; i++) {
                    itemList.push({ itemName: "", type: "", defaultValue: [], currentValue: "" });
                };
            } else {
                disValue = Math.abs(disValue);
                for (let i = 0; i < disValue; i++) {
                    itemList.pop();
                };
            };
        }
        this.setState({
            itemNum: value,
            itemList
        }, () => {
            if (disValue < 0) { this.Form.current.resetFields() };
        });
    };
    //控件名称
    changeItemName(index, e) {
        let { itemList } = this.state;
        itemList[index].itemName = e.target.value;
        this.setState({ itemList });
    };
    //控件类型
    changeItemType(index, value) {
        let { itemList } = this.state;
        itemList[index].type = value;
        itemList[index].defaultValue = [];
        itemList[index].currentValue = "";
        this.setState({ itemList });
    };
    //控件默认值
    changeItemValue(index, e) {
        let defaultValue = [], value = e.target.value, { itemList } = this.state;
        if (value !== null) {
            //如果没有“,”，则输入的内容就是defaultValue
            if (value.indexOf(",") === -1) {
                defaultValue.push(value);
            } //如果有“,”，则将输入的内容按“,”分隔开
            else if (value.indexOf(",") > -1) {
                defaultValue = value.split(",");
            };
            //删除空值或逗号
            for (let i = 0; i < defaultValue.length; i++) {
                if (defaultValue[i] === "" || defaultValue[i] === null || typeof defaultValue[i] === undefined || defaultValue[i] === "," || defaultValue[i] === "，") {
                    defaultValue.splice(i, 1);
                    i = i - 1;
                }
            };
        }
        itemList[index].defaultValue = defaultValue;
        this.setState({ itemList: itemList });
    };
    handleDelete(index) {
        let { itemList } = this.state;
        itemList.splice(index, 1)
        this.setState({ itemList, itemNum: itemList.length }, () => {
            this.Form.current.resetFields();
        });
    }
    //表单验证
    formNameValidator = (rule, value) => {
        if (!value) {
            return Promise.reject('表单名称不能为空');
        } else {
            return Promise.resolve();
        };
    };
    itemNumValidator = (rule, value) => {
        if (typeof (value) !== "number") {
            return Promise.reject('控件数量必须为数字');
        } else if (value === 0) {
            return Promise.reject('控件个数不能为0');
        } else if (parseInt(value) !== value) {
            return Promise.reject('控件数量必须为整数');
        } else if (!value) {
            return Promise.reject('请输入控件个数');
        } else {
            return Promise.resolve();
        };
    }
    itemNameValidator = (index, rule, value) => {
        if (!value) {
            return Promise.reject(`请输入控件 ${index + 1}的名称`);
        } else {
            let { itemList } = this.state;
            let checkRepeatName = (arr, value, index) => {
                let array = [];
                for (let i = 0; i < arr.length; i++) {
                    if (index !== i) {
                        array.push(arr[i].itemName);
                    }
                };
                if (array.indexOf(value) === -1) {
                    return false;
                } else {
                    return true
                }
            };
            if (!checkRepeatName(itemList, value, index)) {
                return Promise.resolve();
            } else {
                return Promise.reject("控件名重复,请修改");
            }
        };
    };
    itemTypeValidator = (index, rule, value) => {
        if (!value) {
            return Promise.reject(`请选择控件 ${index + 1}的类型`);
        } else {
            return Promise.resolve();
        };
    };
    itemValueValidator = (index, rule, value) => {
        if (!value || value.length === 0) {
            return Promise.reject('默认值不能为空');
        } else {
            let hash = {}, defaultValue = this.state.itemList[index].defaultValue;
            for (let i = 0; i < defaultValue.length; i++) {
                if (hash[defaultValue[i]]) {
                    return Promise.reject("不能有重复的选项，请修改");
                }
                hash[defaultValue[i]] = true;
            }
            return Promise.resolve();
        };
    };
    /**
         * 表单value改变时调用
         * @param {*} index 表单控件序号
         * @param {*} type 表单控件类型
         */
    handleChange(index, type, e) {
        let { itemList } = this.state;
        itemList[index].currentValue = type === "checkbox" || type === "select" ? e : e.target.value;
        this.setState({ itemList });
    }
    changeUpload(index, info) {
        if (info.file.status === "done") {
            let { itemList } = this.state;
            itemList[index].currentValue = info.fileList;
            this.setState({ itemList });
            message.success(`${info.file.name} 上传成功`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} 上传失败`);
        };
    };
    saveItems = () => {
        let { formName, itemList } = this.state;
        const saveFile = (name, itemList) => {
            let makeJson = `{ "formName" :${JSON.stringify(name)}
            ,"itemList" :${JSON.stringify(itemList)}}`;
            //保存到本地
            //虚拟dom实现下载   
            var elementA = document.createElement('a');
            elementA.download = +new Date() + ".json";//文件名
            //隐藏dom点不显示
            elementA.style.display = 'none';
            var blob = new Blob([makeJson]);//二进制
            elementA.href = URL.createObjectURL(blob);
            document.body.appendChild(elementA);
            elementA.click();
            document.body.removeChild(elementA);
        }
        this.Form.current.validateFields()
            .then(() => saveFile(formName, itemList))
            .catch(() => { console.error("表单验证未通过") })
    }
    importItems = e => {
        if (e.target.value) {
            let reader = new FileReader();
            //读取json
            let file = document.getElementById('file').files[0];
            //外层作用域的重新定义
            let _this = this;
            reader.onload = function () {
                let importJson = JSON.parse(this.result);
                let { formName, itemList } = importJson;
                _this.setState({
                    formName,
                    itemList,
                    itemNum: itemList.length,
                }, () => {
                    //表单的initialValues属性只在初始化或重置时生效
                    _this.Form.current.resetFields();
                });
            };
            reader.readAsText(file);
        };
    }
    render() {
        const { formName, itemNum, itemList, inputType } = this.state;
        const uploadProps = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
        };
        let initCreateValues = { formName, itemNum };
        return (
            <div className="customform-container">
                <div className="create block">
                    <div style={{ fontSize: 20, fontWeight: "600" }}>在此处填写要生成的表单内容</div>
                    <br />
                    <Form className="create-form" ref={this.Form} initialValues={initCreateValues}>
                        <Form.Item name="formName" label="表单名称" rules={[{ validator: this.formNameValidator }]} style={{ maxWidth: "300px" }}>
                            <Input placeholder="表单名称" onChange={this.changeFormName} />
                        </Form.Item>
                        <Form.Item name="itemNum" label="表单控件数量" rules={[{ validator: this.itemNumValidator }]}>
                            <InputNumber onChange={this.changeItemNum} min={0} />
                        </Form.Item>
                        {/* 根据itemList数组生成控件列表 */}
                        {itemList.map(({ itemName, type, defaultValue }, index) => {
                            let ifThreeColumns = type === "radio" || type === "checkbox" || type === "select";
                            let props = type ? { initialValue: type } : {};
                            return (
                                <Row gutter={10} key={index} className="item-line">
                                    <Col span={24} xl={ifThreeColumns ? 10 : 12}>
                                        <Form.Item name={`itemName${index}`} label={`控件  ${index + 1}：`} key={`${index}Name`} rules={[{ validator: this.itemNameValidator.bind(this, index) }]} initialValue={itemName}>
                                            <Input placeholder={`控件 ${index + 1}的名称`} onChange={this.changeItemName.bind(this, index)} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} xl={ifThreeColumns ? 7 : 12}>
                                        <Form.Item className="col-nolabel" name={`itemType${index}`} key={`${index}Type`} rules={[{ validator: this.itemTypeValidator.bind(this, index) }]} {...props}>
                                            <Select onChange={this.changeItemType.bind(this, index)} placeholder="--控件类型--">
                                                {inputType.map((type, index) =>
                                                    <Option value={type} key={index}>
                                                        {type === "text" ? "输入框" : (type === "radio" ? "单选框" : (type === "checkbox" ? "复选框" : (type === "select" ? "选择器" : (type === "textarea" ? "文本域" : (type === "upload" ? "上传文件" : null)))))}
                                                    </Option>
                                                )}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    {ifThreeColumns &&
                                        <Col span={24} xl={7}>
                                            <Form.Item className="col-nolabel" name={`itemValue${index}`} key={`${index}Value`} rules={[{ validator: this.itemValueValidator.bind(this, index) }]} getValueFromEvent={e => e.target.value.replace(/\uff0c/g, ",")} initialValue={defaultValue}>
                                                <Input placeholder={`请输入控件的默认值,以“,”隔开`} onChange={this.changeItemValue.bind(this, index)} />
                                            </Form.Item>
                                        </Col>
                                    }
                                    <Col style={{ lineHeight: "30px" }} className="delete-btn">
                                        <CloseCircleFilled onClick={this.handleDelete.bind(this, index)} title="删除控件" />
                                    </Col>
                                </Row>
                            )
                        })}
                        <Form.Item style={{ textAlign: "center", marginTop: "24px" }}>
                            <Space>
                                <Button type="primary" onClick={this.saveItems}>保存表单数据</Button>
                                <Button type="primary" onClick={() => { document.getElementById("file").click() }}>读取表单数据</Button>
                                <input type="file" name="import" id="file" accept=".json" onChange={this.importItems} style={{ display: "none" }} />
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
                <div className="show block">
                    <div style={{ fontSize: 20, fontWeight: "600" }}>预览表单</div>
                    <div style={{ textAlign: "center", fontSize: 20 }}>{formName}</div>
                    <br />
                    <Form ref={this.showForm}>
                        {itemList.map(({ itemName, type, defaultValue, currentValue }, index) => {
                            switch (type) {
                                case "text":
                                    return <Form.Item label={itemName} key={index}>
                                        <Input placeholder={itemName} onChange={this.handleChange.bind(this, index, type)} value={currentValue} defaultValue={currentValue} />
                                    </Form.Item>;
                                case "radio":
                                    return <Form.Item label={itemName} key={index}>
                                        <Radio.Group onChange={this.handleChange.bind(this, index, type)} value={currentValue} defaultValue={currentValue}>
                                            {defaultValue.map((value, index2) => {
                                                return (
                                                    <Radio key={index2} value={value}>
                                                        {value}
                                                    </Radio>
                                                );
                                            })}
                                        </Radio.Group>
                                    </Form.Item>;
                                case "checkbox":
                                    return <Form.Item label={itemName} key={index}>
                                        <Checkbox.Group options={defaultValue} onChange={this.handleChange.bind(this, index, type)} value={currentValue} defaultValue={currentValue} />
                                    </Form.Item>;
                                case "select":
                                    return <Form.Item label={itemName} key={index}>
                                        <Select onChange={this.handleChange.bind(this, index, type)} value={currentValue} defaultValue={currentValue}>
                                            {defaultValue.map((value, index2) => {
                                                return (
                                                    <Option key={index2} value={value}>
                                                        {value}
                                                    </Option>
                                                );
                                            })}
                                        </Select>
                                    </Form.Item>;
                                case "textarea":
                                    return <Form.Item label={itemName} key={index}>
                                        <TextArea autoSize={{ minRows: 4, maxRows: 20 }} cols={10} onChange={this.handleChange.bind(this, index, type)} value={currentValue} defaultValue={currentValue} />
                                    </Form.Item>;
                                case "upload":
                                    return <Form.Item label={itemName} key={index}>
                                        <Upload {...uploadProps} onChange={this.changeUpload.bind(this, index)} defaultFileList={currentValue}>
                                            <Button type="default"><UploadOutlined />上传文件</Button>
                                        </Upload>
                                    </Form.Item>;
                                default:
                                    return null;
                            }
                        })}
                    </Form>
                </div>
            </div >
        )
    }
}