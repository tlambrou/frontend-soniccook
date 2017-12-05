import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Recipes from "./components/Recipes"
import Search from "./components/Search"
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <Navbar/>
            <Recipes/>
            <Search/>
          </div>

        </MuiThemeProvider>
      );
    }
  }

  export default App;
