import React, { Component } from 'react';

class Colors extends Component {
  state = {colors_ar:["gold","orange","red","purple"]}

  render() {
    let colors_ar = this.state.colors_ar;
    return (
      <div>
        <h2>List of colors buttons</h2>
        {colors_ar.map((item,i) => {
          return(
            <button style={{background:item}} key={i}>{item}</button>
          )
        })}
      </div>
    )
  }
}

export default Colors;