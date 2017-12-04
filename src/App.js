import React, { Component } from 'react';
import Search from "./components/Search.jsx";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Search />
      </MuiThemeProvider>
    );
  }
}

export default App;
