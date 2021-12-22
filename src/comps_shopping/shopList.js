import React,{Component} from 'react';
import ShopItem from './shopItem';

class ShopList extends Component{
  render(){
    let ar = this.props.list_ar
    return(
      <div className='col-lg-6 mx-auto'>
        {ar.map(item => {
          // חובה להעביר את הפונקציה של הדיל סינגל
          // לשופ אייטם כדי שיכיר אותו
          // ובעצם ככה מעבירים פרופס מהקומפ סבא
          return(
            
            <ShopItem delSingle={this.props.delSingle} key={item.id} item={item}/>
          )
        })}
      </div> 
    )
}
}

export default ShopList