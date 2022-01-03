/* eslint-disable react/display-name */
import React from 'react';
import BasicLayout from '../layouts/BasicLayout.jsx';

export function getRouteComponent(info = {}, loadPage) {
  const Page = loadPage(info.component);
  if (info.layout) {
    return function () {
      return (
        <BasicLayout>
          <Page />
        </BasicLayout>
      );
    };
  }

  return Page;
}
