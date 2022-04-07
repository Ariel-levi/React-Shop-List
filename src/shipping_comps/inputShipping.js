import React, { useRef } from "react";

function InputShipping(props) {
  const inputRef = useRef();
  const selectRef = useRef();

  return (
    <div className="mt-4 row mx-auto col-md-6 justify-content-between">
      <div className="search col-md-4 p-0">
        <input
          ref={inputRef}
          onInput={() => {
            props.searchFor(inputRef.current.value);
          }}
          type="search"
          className="form-control"
          placeholder="search..."
        />
      </div>
      <div className="search col-md-3 p-0">
        <select
          onChange={() => {
            props.sortShippingBy(selectRef.current.value);
          }}
          ref={selectRef}
          className="form-select"
        >
          <option value="">Sort by..</option>
          <option value="name">Name</option>
          <option value="description">Info</option>
          <option value="id">Id</option>
        </select>
      </div>
    </div>
  );
}

export default InputShipping;
