import React from 'react';
// import Webgl_frontPage from "../../webgl_page/frontPage";
import { NavLink } from 'react-router-dom';
import {
  Row, Col, Card, Icon,
} from 'antd';
import * as Shaders from '../../webgl_page/shader/index.js';
import styles from './index.module.scss';

const { Meta } = Card;

export default function FrontPage() {
  const ShadersInfo = getShaderInfo();
  const [refs] = React.useState([]);
  React.useEffect(() => {
    refs.forEach((item) => {
      item.fn(item.ref);
    });
    return () => {
      refs.forEach((item) => {
        if (item.bindInstanse?.animationId) {
          Object.values(item.bindInstanse?.animationId).forEach((id) => {
            cancelAnimationFrame(id);
          });
        }
      });
    };
  }, [refs]);
  return (
    <Row justify="center" type="flex" style={{ paddingTop: '32px', height: '100%' }}>
      <Col className={styles.frontPage} xl={{ span: 16 }} lg={{ span: 18 }} xs={{ span: 24 }}>
        {
                ShadersInfo.map((item) => {
                  const ref = React.createRef();
                  refs.push({ fn: item.draw, ref, bindInstanse: item.bindInstanse });
                  return (
                    <Col
                      key={item.sourceClass + item.drawName}
                      xl={{ span: 6 }}
                      lg={{ span: 8 }}
                      xs={{ span: 24 }}
                    >
                      <Card
                        hoverable
                        style={{ margin: '4px 8px' }}
                        cover={<div ref={ref} style={{ height: '240px' }} />}
                      >
                        <Meta
                          description={(
                            <NavLink to={`/shader/${item.sourceClass}/${item.drawName}`}>
                              go
                              <Icon type="arrow-right" />
                            </NavLink>
)}
                          title={item.info.name}
                        />
                      </Card>
                    </Col>
                  );
                })
            }
      </Col>
    </Row>
  );
}

function getShaderInfo() {
  const info = [];
  for (const key of Object.keys(Shaders)) {
    const instanse = new Shaders[key]();
    const internalInfo = instanse.get_shader_info('*');
    for (const fnName of Object.keys(internalInfo)) {
      // control the show of shader
      if (internalInfo[fnName]?.isHidden) {
        continue;
      }
      if (internalInfo[fnName]?.showPriority === undefined) {
        internalInfo[fnName].showPriority = 0;
      }
      const bindInstanse = new Shaders[key]();
      info.push({
        drawName: fnName,
        sourceClass: key,
        info: internalInfo[fnName],
        draw: instanse[fnName].bind(bindInstanse),
        bindInstanse,
      });
    }
  }
  info.sort((a, b) => b.info.showPriority - a.info.showPriority);
  return info;
}
