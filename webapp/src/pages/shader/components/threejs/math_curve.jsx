import React from 'react';
import { Slider, Checkbox, InputNumber, Row, Col, Select } from 'antd';

const { Option } = Select;

export default function (setData) {
    // const [data, setNewData] = React.useState([]);
    const [dimension, setDimension] = React.useState(2);
    const lineOptions_2d = [
        { label: '幂函数', value: 'power', index: 0 },
        { label: '圆', value: 'circle', index: 1 },
        { label: '心型线', value: 'dcrHeart', index: 2 },
        { label: '双曲线', value: 'hyperbola', index: 3 },
    ];
    const lineOptions_3d = [
        { label: '球', value: 'sphere', index: lineOptions_2d.length + 0 },
    ]
    return <>
        <Row>
            <Col>
                <label className="controlLabel"><strong>坐标系维度:</strong></label>
                <Select defaultValue={dimension} style={{ marginLeft: "0.5rem" }} onChange={(value) => {
                    setData((data) => {
                        return [{ position: 'dimension', value }]
                    });
                    setDimension(value);
                }}>
                    <Option value={2}>二维</Option>
                    <Option value={3}>三维</Option>
                </Select>
            </Col>
            {
                dimension === 2 && (
                    <>
                        <Col>
                            <label className="controlLabel"><strong>曲线类型:</strong></label>
                        </Col>
                        <Col>
                            <Checkbox.Group options={lineOptions_2d} defaultValue={['dcrHeart', 'hyperbola']} onChange={(value) => {
                                setData((data) => {
                                    data = Array.isArray(data) ? data : [];
                                    let newUpdateData = [];
                                    lineOptions_2d.forEach((item, index) => {
                                        newUpdateData.push({
                                            position: `lineType.${item.index}.isHidden`, value: true
                                        });
                                    })
                                    value.forEach(item => {
                                        newUpdateData.push({
                                            position: `lineType.${lineOptions_2d.find(option => {
                                                return option.value === item;
                                            }).index}.isHidden`, value: false
                                        });
                                    });
                                    return [...data, ...newUpdateData]
                                });
                            }} />
                        </Col>
                    </>
                )
            }
            {
                dimension === 3 && (
                    <>
                        <Col>
                            <label className="controlLabel"><strong>曲线类型:</strong></label>
                        </Col>
                        <Col>
                            <Checkbox.Group options={lineOptions_3d} defaultValue={['sphere']} onChange={(value) => {
                                setData((data) => {
                                    data = Array.isArray(data) ? data : [];
                                    let newUpdateData = [];
                                    lineOptions_3d.forEach((item, index) => {
                                        newUpdateData.push({
                                            position: `lineType.${item.index}.isHidden`, value: true
                                        });
                                    })
                                    value.forEach(item => {
                                        newUpdateData.push({
                                            position: `lineType.${lineOptions_3d.find(option => {
                                                return option.value === item;
                                            }).index}.isHidden`, value: false
                                        });
                                    });
                                    return [...data, ...newUpdateData]
                                });
                            }} />
                        </Col>
                    </>
                )
            }
        </Row>
    </>
}