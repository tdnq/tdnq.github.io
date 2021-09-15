import React from 'react';
import BasicLayout from "./layouts/BasicLayout.js";
import FrontPage from "./pages/frontPage/index.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <BasicLayout navKey="3">
          <FrontPage />
        </BasicLayout>
      </Route>
    </Router >
  )
}

export default App;
