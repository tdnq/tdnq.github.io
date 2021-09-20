import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {pagesRouterConfig as pagesConfig} from "./config/router";
// import { getRouteComponent } from "./utils/router";


//router util
import { Spin } from 'antd';
import Loadable from 'react-loadable';
import BasicLayout from "./layouts/BasicLayout";

const loadPage = (path) => Loadable({
    loader: () => import(`${path}`),
    loading: () => {
        return <div className="loading">
            <Spin />
        </div>
    }
});
function getRouteComponent(info = {}) {
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
//router util

function App() {
  return (
    <Router>
      <Switch>
        {
          pagesConfig.map((item, index) => {
            return <Route
              path={item.path}
              exact
              component={
                getRouteComponent(item)
              }
              key={item.component}
            />
          })
        }
        {/* <Route path="/" exact component={loadPage("./pages/frontPage/index.js")} /> */}
      </Switch>
    </Router >
  )
}

export default App;
