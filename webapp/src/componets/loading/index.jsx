import React from "react";
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const  LoadPage =(path) => Loadable({
    loader: () => import(`../../pages/${path}`),
    loading: () => {
        return <div className="loading">
            <Spin />
        </div>
    }
});
export default LoadPage;