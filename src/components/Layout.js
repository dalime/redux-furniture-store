import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <Link to='/'>
            <button className='btn btn-sm btn-default'>Home</button>
          </Link>
          <Link to='/fighters'>
            <button className='btn btn-sm btn-default'>Fighters</button>
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
