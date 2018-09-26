import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className='topNavBar'>
      <h1 className="title"><Link to='/'>Cara Ottmar</Link></h1>
      <p>Cara Ottmar</p>
      </header>
    )
  }
}