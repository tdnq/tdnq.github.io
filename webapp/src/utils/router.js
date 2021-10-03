
import React from "react";
import BasicLayout from "../layouts/BasicLayout.jsx";

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