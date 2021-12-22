import React, { Component } from "react";

class ShopInput extends Component {
  prodRef = React.createRef();
  amountRef = React.createRef();

  addNewProdToApp = () => {
    let itemProd = {
      name: this.prodRef.current.value,
      amount: Number(this.amountRef.current.value),
      id: Date.now(),
    };
    this.props.addProd(itemProd);
  };

  render() {
    return (
      <div className="col-md-6 p-3 shadow mx-auto">
        <label>Product name</label>
        <input ref={this.prodRef} type="text" className="form-control" />
        <label>Product amount</label>
        <input
          ref={this.amountRef}
          type="number"
          defaultValue="1"
          className="form-control"
        />
        <button
          onClick={this.addNewProdToApp}
          className="btn btn-success mt-3 mx-3"
        >
          Add prod
        </button>
        <button onClick={this.props.delAll} className="btn btn-danger mt-3">
          Del All
        </button>
      </div>
    );
  }
}

export default ShopInput;
