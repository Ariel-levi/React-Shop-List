import React,{Component} from 'react';

class ShopItem extends Component{
  render(){
    let item = this.props.item;
    return(
      <div className='shadow-sm my-3 p-2'>
        <button onClick={() => {
          this.props.delSingle(item.id)
        }} className='badge bg-danger float-end mt-1'>X</button>
        <h4>{item.name} - Amount:{item.amount}</h4>
      </div> 
    )
}
}

export default ShopItem