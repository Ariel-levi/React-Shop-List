import React, { Component } from "react";
import ShopInput from "./shopInput";
import ShopList from "./shopList";

class AppShopping extends Component {
  state = {
    list_ar: [
      { name: "Bamba", amount: 2, id: 1 },
      { name: "Coffe", amount: 3, id: 2 },
    ],
  };

  addProd = (_itemProd) => {
    // ... - משכפל את המערך לתא חדש בזכרון
    // let temp_ar = [...this.state.list_ar]
    // temp_ar.push(_itemProd)
    // this.setState({list_ar:temp_ar})
    // כמו שכתוב 3 שורות למעלה
    this.setState({ list_ar: [...this.state.list_ar, _itemProd] });

    // this.state.list_ar.push(_itemProd)
  };

  delSingle = (_id) => {
    // יחזיר לטמפ איי אר את כל המוצרים שהאיי די שלהם
    // שונה מהפרמטר שרצינו למחוק
    let temp_ar = this.state.list_ar.filter((item) => item.id != _id);
    this.setState({ list_ar: temp_ar });
  };

  delAll = () => {
    this.setState({ list_ar: [] });
  };

  render() {
    return (
      <div className="container col-md-8">
        <h1 className="text-center">Shopping App</h1>
        <ShopInput delAll={this.delAll} addProd={this.addProd} />
        <ShopList delSingle={this.delSingle} list_ar={this.state.list_ar} />
      </div>
      // בשופ ליסט להציג את הרשימה של המוצרים שנמצאים
      // בסטייט של המערך ליסט
      // וצרו גם באותה שורה כפתור איקס אדום שיופיע
    );
  }
}

export default AppShopping;
