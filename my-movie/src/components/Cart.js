import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import CartMovie from './CartMovie';


const Cart = ( { cart } ) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItem] = useState(0);

    useEffect(() => {
      let items = 0;
      let price = 0;

      cart.forEach(item => {
        items += item.qty;
        price += item.qty * item.price
      })

      setTotalPrice(price);
      setTotalItem(items)

    }, [cart, totalItems, totalPrice, setTotalItem, setTotalPrice])

    return (
        <div className="form-container cart-page mt-5">
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                {cart.map((item)=> (
                  <div className="col-xl-4">
                      <CartMovie key={item.id} itemData={item}/>
                  </div>
                ))}
              </div>    
            </div>
            <div className="col-xl-3">
              <div className="cart-page-price">
                  ümumi
                  <span>({totalItems} items)</span>
                  <span>$ {totalPrice}</span>
              </div>
            </div>
          </div>
          <div className="cart-blank">

          </div>
        </div>
    );
}
const mapStateToProps = (state) => {
  return {
      cart : state.cart.cart
  }
}

export default connect(mapStateToProps)(Cart);
