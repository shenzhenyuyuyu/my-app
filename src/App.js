import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolsMenu from "./ToolsMenu";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
          <div className="navigation-bar">
          <AppBar
              title="Small Tools"
          />
          </div>
          <div className="main-content">
          <div className="side-menu">
          <ToolsMenu />
          </div>
          <div className="content-container">

          </div>
          </div>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
