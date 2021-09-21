import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { pagesRouterConfig as pagesConfig } from "./config/router";
import { getRouteComponent } from "./utils/router";


//lazy load 
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const loadPage = (path) => Loadable({
  loader: () => import(`${path}`),
  loading: () => {
    return <div className="loading">
      <Spin />
    </div>
  }
});
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
                getRouteComponent(item, loadPage)
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
