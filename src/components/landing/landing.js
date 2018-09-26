import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing-page fade-in'>
        <p className='Hero-text'>
        Cara Ottmar <br/>
        Full-Stack Javascript Developer <br/>
        Passionate about user experience, efficiency, and learning.
        </p>
      </div>
    );
  }
}