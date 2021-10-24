import React from "react";
import Webgl_frontPage from "../../webgl_page/frontPage";
import { NavLink } from "react-router-dom";
import { Row, Col, Card ,Icon} from "antd";
import Shaders from "../../webgl_page/shader/index.js";

const { Meta } = Card;

export default function FrontPage() {
    const logoRef = React.createRef();
    const ShadersInfo = getShaderInfo();
    const refs = [];
    React.useEffect(()=>{
        refs.forEach((item)=>{
            item.fn(item.ref);
        });
    },[])
    return <Row justify="center" type="flex" style={{ paddingTop: "32px", height: "100%" }}>
        <Col xl={{ span: 16 }} lg={{ span: 18 }} xs={{ span: 24 }}>
            {
                ShadersInfo.map((item, index) => {
                    let ref = React.createRef();
                    refs.push({ fn: item.draw, ref });
                    return <Card
                        hoverable
                        style={{ width: 320 }}
                        cover={<div ref={ref} style={{ height: "240px"}}></div>}
                        key = {item.sourceClass+item.drawName}
                    >
                        <Meta 
                        description={<NavLink to={`/shader/${item.sourceClass}/${item.drawName}`}>
                            go<Icon type="arrow-right" />
                        </NavLink>} 
                        title={item.info.name} />
                    </Card>
                })
            }
        </Col>
    </Row>
}

function getShaderInfo() {
    let info = [];
    for (let key of Object.keys(Shaders)) {
        let instanse = new Shaders[key];
        let internalInfo = instanse.get_shader_info('*');
        for (let fnName of Object.keys(internalInfo)) {
            info.push({
                drawName: fnName,
                sourceClass: key,
                info: internalInfo[fnName],
                draw: instanse[fnName].bind(instanse)
            })
        }
    }
    return info;
}