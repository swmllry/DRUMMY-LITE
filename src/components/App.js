import React from 'react'
import GlobalStyle from '../GlobalStyle.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import Header from './Header'
// import Login from './Login'
// import SignUp from './SignUp'
import LandingPage from './LandingPage'
import Kit from './Kit'
import Footer from './Footer'
import CurrentUserProvider from './CurrentUserProvider'

const App = () => {

  return (
    <BrowserRouter>

      <CurrentUserProvider>

        <Header />
        <GlobalStyle />

        <Switch>

          <Route exact path="/">
            <LandingPage />
          </Route>

          {/* <Route exact path="/login">
            <Login />
          </Route> */}

          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}

          <Route exact path="/kit">
            <Kit />
          </Route>

        </Switch>

        <Footer />

      </CurrentUserProvider>

    </BrowserRouter>


  );
}

export default App;
