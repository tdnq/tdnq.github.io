import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { pagesRouterConfig as pagesConfig } from "./config/router";
import { getRouteComponent } from "./utils/router";
import LoadPage from "./componets/loading/index.jsx";
import "./App.module.scss"


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
                getRouteComponent(item, LoadPage)
              }
              key={item.component}
            />
          })
        }
        <Redirect to="/404" />
      </Switch>
    </Router >
  )
}

export default App;
