import React, { useState } from 'react';
import {
  Slider, InputNumber, Row, Col,
} from 'antd';
import lodash from 'lodash';

export default function BezierCurve(setData) {
  const [inputValue, setInputValue] = useState(0.001);

  const onChange = lodash.debounce((value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);

    setData((data) => ({ ...data, frequence: value }));
  }, 100);

  return (
    <Row>
      <Col span={24}>
        <label><strong>绘制频率:</strong></label>
      </Col>
      <Col span={12}>
        <Slider
          min={0}
          max={0.5}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.0001}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={0.5}
          style={{ margin: '0 16px' }}
          step={0.0001}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
}
