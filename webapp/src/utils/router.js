
import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import { Spin } from 'antd';
import Loadable from 'react-loadable';

export const loadPage = (path) => Loadable({
  loader: () => import(`${path}`),
  loading: () => {
    return <div className="loading">
      <Spin />
    </div>
  }
});
export function getRouteComponent(info = {}, loadPage) {
    let Page = loadPage(info.component);
    if (info.layout) {
      return function () {
        return <BasicLayout>
          <Page />
        </BasicLayout>
      }
    }
    else {
      return Page;
    }
  }