import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./views/components/Button/Button";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Halo woerld</h1>
        <h2>Halo Woerld</h2>
        <Button type="outlined">Button</Button>
        <Button type="contained">Tombol</Button>
      </div>
    );
  }
}

export default withRouter(App);
