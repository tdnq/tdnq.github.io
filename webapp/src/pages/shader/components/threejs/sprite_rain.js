import React, { useState, useCallback } from "react"
import { Slider, InputNumber, Row, Col } from 'antd';
import lodash from "lodash";

export default function (setData, data) {
    const [inputValue, setInputValue] = useState({ count: 1000, baseScale: 10, speed: 0.5, ...data, });


    const onChange = useCallback(
        lodash.debounce((value, name) => {
            if (isNaN(value)) {
                return;
            }
            setInputValue((inputValue) => {
                return {
                    ...inputValue,
                    [name]: value
                }
            })
            setData((data) => {
                return { ...data, [name]: value }
            });
        }, 100), []
    );

    return (
        <>
            <Row>
                <Col span={6}>
                    <label className="controlLabel"><strong>雨滴数量:</strong></label>
                </Col>
                <Col span={10}>
                    <Slider
                        min={100}
                        max={20000}
                        onChange={(value) => onChange(value, 'count')}
                        value={typeof inputValue.count === 'number' ? inputValue.count : 0}
                        step={10}
                    />
                </Col>
                <Col span={6}>
                    <InputNumber
                        min={10}
                        max={20000}
                        style={{ margin: '0 16px' }}
                        step={10}
                        value={inputValue.count}
                        onChange={(value) => onChange(value, 'count')}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <label className="controlLabel"><strong>下落速度:</strong></label>
                </Col>
                <Col span={10}>
                    <Slider
                        min={0.1}
                        max={2}
                        onChange={(value) => onChange(value, 'speed')}
                        value={inputValue.speed}
                        step={0.2}
                    />
                </Col>
                <Col span={6}>
                    <InputNumber
                        min={0.1}
                        max={2}
                        step={0.2}
                        style={{ margin: '0 16px' }}
                        value={inputValue.speed}
                        onChange={(value) => onChange(value, 'speed')}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <label className="controlLabel"><strong>雨滴大小:</strong></label>
                </Col>
                <Col span={10}>
                    <Slider
                        min={5}
                        max={30}
                        onChange={(value) => onChange(value, 'baseScale')}
                        value={inputValue.baseScale}
                        step={2}
                    />
                </Col>
                <Col span={6}>
                    <InputNumber
                        min={5}
                        max={30}
                        step={2}
                        style={{ margin: '0 16px' }}
                        value={inputValue.baseScale}
                        onChange={(value) => onChange(value, 'baseScale')}
                    />
                </Col>
            </Row>
        </>
    );
}