import React, { Component } from 'react';
import axios from "axios";

class BitList extends Component {

  componentDidMount(){
    this.doApi()
  }

  doApi = async () => {
    let url = "http://fs1.co.il/bus/bitcoin.php";
    let resp = await axios.get(url);
    console.log(resp.data);
  }

  render() {
    return (
      <div>BitList</div>
    )
  }
}

export default BitList