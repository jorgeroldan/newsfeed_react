import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { createGlobalStyle } from 'styled-components'

import Home from '../../pages/Home'
import Header from  '../Header'
import Nav from '../Nav'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0; 
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container maxWidth='md'>
        <Header />
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
