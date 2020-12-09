import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom';
import './App.scss';
import ChartJS from "./pages/chartjs/Chartjs";
import GoogleChats from "./pages/googleCharts/GoogleCharts";
import chartWithConfig from "./componenets/chartWithConfig";
import AMCHarts from "./pages/amCharts/AMCharts";
import Plotly from "./pages/plotly/Plotly";
import LightningChart from "./pages/lightningchart/LightningChart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="links">
          <Link to="/chartjs">Chartjs</Link>
          <Link to="/google-charts">Google charts</Link>
          <Link to="/am-charts">amCharts</Link>
          <Link to="/plotly-js">Plotly.js</Link>
          <Link to="/lcjs">Lightingchart</Link>
        </div>
        <Switch>
          <Route path="/chartjs">
            {chartWithConfig(ChartJS)}
          </Route>
          <Route path="/google-charts">
            {chartWithConfig(GoogleChats)}
          </Route>
          <Route path="/am-charts">
            {chartWithConfig(AMCHarts)}
          </Route>
          <Route path="/plotly-js">
            {chartWithConfig(Plotly)}
          </Route>
          <Route path="/lcjs">
            {chartWithConfig(LightningChart)}
          </Route>
          <Redirect to="/chartjs"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
