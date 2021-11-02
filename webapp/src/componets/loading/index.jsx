import React from "react";
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const LoadPage = (path) => Loadable({
    loader: () => import(`../../pages/${path}`),
    loading: () => {
        return <div className="loading" style={{ display: "flex", height: "100%" }}>
            <Spin style={{ margin: "auto",transform:"translateY(-200%)" }} />
        </div>
    }
});
export default LoadPage;