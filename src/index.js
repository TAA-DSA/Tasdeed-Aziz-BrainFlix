import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import UploadPage from "./UploadPage/UploadPage";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/upload" component={UploadPage} />
      <Route path="/videos/:videoId" component={App} />
      {/* <Redirect from ='' */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
