import React, { Component } from 'react';
import BitList from './bitList';
import Colors from './colors';
import TvList from './tvList';

class AppHw extends Component {
  render() {
    return (
      <div className='container'>
        <BitList/>
        <hr />
        <TvList />
        <hr />
        <Colors />
      </div>
    )
  }
}

export default AppHw