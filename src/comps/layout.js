import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(props){
  return(
    <React.Fragment>
      <Outlet />
    </React.Fragment> 
  )
}

export default Layout