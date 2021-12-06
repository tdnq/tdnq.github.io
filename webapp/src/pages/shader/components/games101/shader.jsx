import React from "react"
import { Select } from 'antd';

const { Option } = Select;

export function Shader(setData) {
    return <>
        <label><strong>shader type:</strong></label>
        <Select defaultValue="phong" style={{ width: 120 }} onChange={(value) => {
            setData((data) => {
                return { ...data, path: value }
            })
        }}>
            <Option value="phong">phong</Option>
            <Option value="bump">bump</Option>
            <Option value="texture">texture</Option>
            <Option value="displacement">displacement</Option>
        </Select>
    </>
}