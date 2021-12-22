import React,{Component} from 'react';
import TvItem from './tvItem';

class TvList extends Component{
  state = {ar:[]}

  componentDidMount(){
    this.doApi()  
  }

  doApi = async()=> {
    let url = "http://fs1.co.il/bus/tv.php";
    let resp = await fetch(url);
    let data = await resp.json();
    this.setState({ar:data})
  }

  render(){
    let ar = this.state.ar;
    return(
      <div>
        <h1>List of tv show:</h1>
        <div className="row">
          {ar.map(item => {
            return (
              <TvItem key={item.name} item={item}/>
            )
          })}
        </div>  
      </div> 
    )
}
}

export default TvList