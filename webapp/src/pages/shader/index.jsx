import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ShaderStage from '../../componets/shaderStage/index.jsx';
import Hud from '../../componets/hud/index.jsx';
import ControlDataHud from '../../componets/controlHud/index.jsx';
import style from './index.module.scss';
import * as DataControl from './components/index'; // change the data of shader
import { useUpdateEffect } from 'ahooks';

function Shader(props) {
  const shaderRef = React.useRef();
  const [info, setInfo] = React.useState(null);
  const [data, setData] = useState([]);
  const [fn, setFn] = useState([]);
  useEffect(() => {
    const { shaderName } = props.match.params;
    const { shaderClass } = props.match.params;
    const targeClass = import(`../../webgl_page/shader/${shaderClass}`);
    let instanse = null;
    targeClass.then((res) => {
      instanse = new res.default();
      setFn((fn) => [...fn, instanse[shaderName].bind(instanse)]);
      setInfo(instanse.get_shader_info(shaderName));
    });
    return () => {
      if (instanse.animationId) {
        [...instanse.animationId.values()].forEach((item) => {
          cancelAnimationFrame(item);
        });
      }
      instanse.leaveCallback?.forEach(fn => fn());
    };
  }, [props.match.params.shaderName, props.match.params.shaderClass]);

  useUpdateEffect(() => {
    fn.forEach((item) => {
      item(shaderRef, data);
    });
  }, [data, fn]);
  return (
    <ShaderStage>
      <Hud info={info} />
      <div className={style.canvasWraper} ref={shaderRef} />
      {DataControl[props.match.params.shaderClass]?.[props.match.params.shaderName] && (
        <ControlDataHud>
          {DataControl[props.match.params.shaderClass]?.[props.match.params.shaderName](setData, data)}
        </ControlDataHud>
      )}
    </ShaderStage>
  );
}
export default withRouter(Shader);
