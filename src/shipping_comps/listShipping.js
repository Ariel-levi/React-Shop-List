import React from "react";

function ListShipping(props) {
  return (
    <div className="row col-6 mx-auto">
      {props.filter_ar.map((item) => {
        return (
          <div key={item.id} className="box col-12 border p-3 my-2">
            <img
              src="https://images.pexels.com/photos/6478794/pexels-photo-6478794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pacakge"
              className="w-25 float-start me-2"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListShipping;
