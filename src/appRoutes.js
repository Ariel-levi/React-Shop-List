import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graph from "./comps/graph";
import HeaderLay from "./comps/headerLay";
import Home from "./comps/home";
import AppShipping from "./shipping_comps/appShipping";

function AppRoutes(props) {
  return (
    <BrowserRouter>
      {/* header */}
      <HeaderLay />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shipping" element={<AppShipping />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default AppRoutes;
