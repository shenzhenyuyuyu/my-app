import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import ToolsMenu from "./ToolsMenu";
const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div className="App">
          <div className="navigation-bar">
              <AppBar className="navigation-bar-fix">
                  <Toolbar>
                      <Typography type="title" color="inherit">
                          small tools
                      </Typography>
                  </Toolbar>
              </AppBar>
          </div>
          <div className="side-menu">
              <ToolsMenu/>
          </div>
          <div className="content-container">
          </div>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
