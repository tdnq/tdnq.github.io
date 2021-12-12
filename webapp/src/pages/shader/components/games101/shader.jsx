import React from "react"
import { Select } from 'antd';

const { Option } = Select;

export function Shader(setData) {
    return <>
        <label><strong>shader type:</strong></label>
        <Select defaultValue="phong" style={{ marginLeft: "0.5rem" }} onChange={(value) => {
            setData((data) => {
                return { ...data, path: value }
            })
        }}>
            <Option value="phong">phong model</Option>
            <Option value="bump">bump map</Option>
            <Option value="texture">texture map</Option>
            <Option value="displacement">displacement map</Option>
        </Select>
    </>
}