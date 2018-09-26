import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Header } from '../header/header';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Helmet>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
          <meta property="og:title" content="Cara Ottmar : Portfolio"/>
        </Helmet>
      <Header/>
      </BrowserRouter>
    );
  }
}