import React from 'react';
import styles from './index.module.scss';

function Hud(props) {
  return (
    <div className={styles.hudWrapper}>
      <div className={styles.hud}>
        <h2>try to change something</h2>
        {props?.children}
      </div>
    </div>
  );
}

export default Hud;
