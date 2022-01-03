import React from 'react';
import styles from './index.module.scss';

function Hud(props) {
  return (
    <div className={styles.hudWrapper}>
      <div className={styles.hud}>
        <h2 className="name">{props.info && props.info.name}</h2>
        <div className="describe">
          介绍:
          {props.info && props.info.describe}
        </div>
        <div className="source">
          来源:
          {props.info && props.info.source}
        </div>
        <div className="time">
          时间:
          {props.info && props.info.time}
        </div>
      </div>
    </div>
  );
}

export default Hud;
