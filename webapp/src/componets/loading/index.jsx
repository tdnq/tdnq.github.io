import React from "react";
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const loadPage =(path) => Loadable({
    loader: () => import(`${path}`),
    loading: () => {
        return <div className="loading">
            <Spin />
        </div>
    }
});
export default loadPage.toString();