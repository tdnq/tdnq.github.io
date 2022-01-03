import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { pagesRouterConfig as pagesConfig } from './config/router';
import { getRouteComponent } from './utils/router';
import WebglCompatibility from './utils/webglCompatibility';
import LoadPage from './componets/loading/index.jsx';
import './App.module.scss';

function App() {
  if (!WebglCompatibility.isWebGLAvailable()) {
    return <h1 style={{ textAlign: 'center' }}>当前浏览器不支持webgl,请更换到Chrome或当前浏览器高版本</h1>;
  }
  return (
    <Router>
      <Switch>
        {
          pagesConfig.map((item, index) => (
            <Route
              path={item.path}
              exact
              component={
                getRouteComponent(item, LoadPage)
              }
              key={item.component}
            />
          ))
        }
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
