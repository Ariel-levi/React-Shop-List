import React, { useState, useEffect } from "react";
import { sortBy } from "lodash";
import InputShipping from "./inputShipping";
import ListShipping from "./listShipping";
import "../css_sass/shipping.css";

let ship_ar = [];

function AppShipping(props) {
  const [filter_ar, setFilterAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const searchFor = (_search) => {
    let temp_ar = ship_ar.filter((item) => {
      return item.name.includes(_search) || item.description.includes(_search);
    });
    setFilterAr(temp_ar);
  };

  const sortShippingBy = (_sortBy) => {
    ship_ar = sortBy(ship_ar, _sortBy);
    setFilterAr(sortBy(filter_ar, _sortBy));
  };

  const doApi = async () => {
    let url = "http://localhost:3003/api/products/";
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    ship_ar = data;
    setFilterAr(data);
  };

  return (
    <div className="container shipping">
      <h1 className="text-center">Shipping App from api</h1>
      <InputShipping searchFor={searchFor} sortShippingBy={sortShippingBy} />
      <ListShipping filter_ar={filter_ar} />
    </div>
  );
}

export default AppShipping;
