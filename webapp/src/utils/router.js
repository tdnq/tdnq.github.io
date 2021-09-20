
import React from "react";
import { Spin } from 'antd';
import Loadable from 'react-loadable';
import BasicLayout from "../layouts/BasicLayout";

const loadPage = (path) => Loadable({
    loader: () => import(`${path}`),
    loading: () => {
        return <div className="loading">
            <Spin />
        </div>
    }
});

export function getRouteComponent(info = {}) {
    let Page = loadPage(info.component);
    if (info.layout) {
        return function () {
            return <BasicLayout>
              <Page/>
            </BasicLayout>
        }
    }
    else {
        return Page;
    }
}