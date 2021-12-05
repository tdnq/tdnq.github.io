import React from "react";
import Webgl_frontPage from "../../webgl_page/frontPage";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Icon } from "antd";
import Shaders from "../../webgl_page/shader/index.js";
import styles from "./index.module.scss";

const { Meta } = Card;

export default function FrontPage() {
    const ShadersInfo = getShaderInfo();
    const [refs, setRefs] = React.useState([]);
    React.useEffect(() => {
        refs.forEach((item) => {
            item.fn(item.ref);
        });
    }, [refs])
    return <Row justify="center" type="flex" style={{ paddingTop: "32px", height: "100%" }}>
        <Col className={styles.frontPage} xl={{ span: 16 }} lg={{ span: 18 }} xs={{ span: 24 }}>
            {
                ShadersInfo.map((item, index) => {
                    let ref = React.createRef();
                    refs.push({ fn: item.draw, ref });
                    return <Col
                        key={item.sourceClass + item.drawName}
                        xl={{ span: 6 }}
                        lg={{ span: 8 }}
                        xs={{ span: 24 }}>
                        <Card
                            hoverable
                            style={{ margin: "4px 8px" }}
                            cover={<div ref={ref} style={{ height: "240px" }}></div>}
                        >
                            <Meta
                                description={<NavLink to={`/shader/${item.sourceClass}/${item.drawName}`}>
                                    go<Icon type="arrow-right" />
                                </NavLink>}
                                title={item.info.name} />
                        </Card>
                    </Col>
                })
            }
        </Col>
    </Row>
}

function getShaderInfo() {
    let info = [];
    for (let key of Object.keys(Shaders)) {
        let instanse = new Shaders[key]();
        let internalInfo = instanse.get_shader_info('*');
        for (let fnName of Object.keys(internalInfo)) {
            // control the show of shader
            if (internalInfo[fnName]?.isHidden) {
                continue;
            }
            info.push({
                drawName: fnName,
                sourceClass: key,
                info: internalInfo[fnName],
                draw: instanse[fnName].bind(new Shaders[key]())
            })
        }
    }
    return info;
}