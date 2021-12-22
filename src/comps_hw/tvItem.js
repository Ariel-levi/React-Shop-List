import React,{Component} from 'react';

class TvItem extends Component{
  // פונקציה שמשמשת לבדיקה אם יש עונות בפריט
  // ומחזיר את הג'יי אס אקס שלו בהתאם
  seasons = (item) => {
    return(
      (item.season) ? <div>Seasons: {item.season}</div> : ""
    )
  }

  infoClick = () => {
    alert(this.props.item.descrption);
  }

  render(){
    let item = this.props.item;
    return(
      <div className='col-lg-6 p-3'>
        <div className="border shadow p-2">
          <h2>{item.name}</h2>
          <div>Genere: {item.genere}</div>
          <div>Views: {item.views}</div>
          {  this.seasons(item) } 
          <button onClick={this.infoClick}>More info</button>
        </div>
      </div> 
    )
}
}

export default TvItem