import React from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './comps/home';
import Layout from './comps/layout';

function AppRoutes(props){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes