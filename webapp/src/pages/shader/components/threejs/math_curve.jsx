import React from 'react';
import { Slider, Checkbox, InputNumber, Row, Col, Select } from 'antd';

const { Option } = Select;

export default function (setData) {
    // const [data, setNewData] = React.useState([]);
    const [dimension, setDimension] = React.useState(2);
    const lineOptions = [
        { label: '幂函数', value: 'power' },
        { label: '圆', value: 'circle' },
        { label: '心型线', value: 'dcrHeart' },
        { label: '双曲线', value: 'hyperbola' },
    ];
    return <>
        <Row>
            <Col>
                <label className="controlLabel"><strong>坐标系维度:</strong></label>
                <Select defaultValue={dimension} style={{ marginLeft: "0.5rem" }} onChange={(value) => {
                    setData((data) => {
                        data = Array.isArray(data) ? data : [];
                        return [...data, { position: 'dimension', value }]
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
                            <Checkbox.Group options={lineOptions} defaultValue={['dcrHeart', 'hyperbola']} onChange={(value) => {
                                setData((data) => {
                                    data = Array.isArray(data) ? data : [];
                                    let newUpdateData = [];
                                    lineOptions.forEach((item, index) => {
                                        newUpdateData.push({
                                            position: `lineType.${index}.isHidden`, value: true
                                        });
                                    })
                                    value.forEach(item => {
                                        newUpdateData.push({
                                            position: `lineType.${lineOptions.findIndex(option => {
                                                return option.value === item;
                                            })}.isHidden`, value: false
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