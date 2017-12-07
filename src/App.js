import React, { Component } from 'react'
import Main from "./components/Main"
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Main />
        </MuiThemeProvider>
      </Router>

    )
  }
}

export default App
