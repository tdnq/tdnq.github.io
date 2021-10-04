import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";

function ShaderStage(props) {

    return (
        <Row justify="center" type="flex" style={{ marginTop: "32px" }}>
            <Col xl={{ span: 16 }} lg={{ span: 18 }} sm={{ span: 24 }}>
                {props.children}
            </Col>
        </Row>
    )

}


export default withRouter(ShaderStage);