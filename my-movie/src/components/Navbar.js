import React, {useEffect, useState}  from 'react';
import Logo from '../img/logo.png';
import {Link} from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { connect } from 'react-redux';


const Navbar = ({cart}) =>  {

const [cartCount, setCartCount] = useState(0);

useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);


        return (
        <div className="navbar-parent">
                <div className="form-row py-2 align-items-center">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-7">
                        <Link to="/">
                            <img src={Logo} className="logo" alt=""/>
                        </Link> 

                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                    <Link to="/cart" className="navbar-cart">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M5.39797 11.0872L4.40462 10.9721H4.40462L5.39797 11.0872ZM4.40639 19.6428L5.39974 19.7579L4.40639 19.6428ZM19.3905 19.6428L18.3971 19.7579V19.7579L19.3905 19.6428ZM18.3989 11.0872L19.3923 10.9721V10.9721L18.3989 11.0872ZM4.40462 10.9721L3.41304 19.5277L5.39974 19.7579L6.39132 11.2024L4.40462 10.9721ZM5.67348 22H18.1234V20H5.67348V22ZM20.3838 19.5277L19.3923 10.9721L17.4056 11.2024L18.3971 19.7579L20.3838 19.5277ZM17.1318 9H6.66506V11H17.1318V9ZM19.3923 10.9721C19.2583 9.81622 18.2557 9 17.1318 9V11C17.3072 11 17.396 11.1203 17.4056 11.2024L19.3923 10.9721ZM18.1234 22C19.4338 22 20.5419 20.8917 20.3838 19.5277L18.3971 19.7579C18.4069 19.842 18.3327 20 18.1234 20V22ZM3.41304 19.5277C3.25495 20.8917 4.36306 22 5.67348 22V20C5.4642 20 5.39 19.842 5.39974 19.7579L3.41304 19.5277ZM6.39132 11.2024C6.40083 11.1203 6.48972 11 6.66506 11V9C5.54116 9 4.53859 9.81623 4.40462 10.9721L6.39132 11.2024Z" fill="#2CA2E3"/>
                                    <path d="M8.39844 7V6.42857C8.39844 4.53502 9.96544 3 11.8984 3C13.8314 3 15.3984 4.53502 15.3984 6.42857V7" stroke="#536FCF" stroke-width="2" stroke-linecap="round"/>
                                </g>
                            </svg>

                            <span className="navbar-cart-span">{cartCount}</span>
                        </Link>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-4">
                        <Popup trigger={<button
                             className="menu-button" 
                             type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                            </button>
                            } position="right center">
                           <div>
                            <Link to="/add"  className="add-button popup-buttons">
                                My Profile
                            </Link>
                            <Link to="/add"  className="add-button popup-buttons">
                                Add Movies
                            </Link>
                            <Link to="/about"  className="add-button popup-buttons">
                                About
                            </Link>
                            <Link to="/add"  className="add-button popup-buttons">
                                Contact
                            </Link>
                            <Link to="/add"  className="add-button popup-buttons">
                                Wishlist
                            </Link>
                            <Link to="/login"  className="add-button popup-buttons">
                                Sign İn
                            </Link>   
                            <Link to="/register"  className="add-button popup-buttons">
                                Sign Up
                            </Link>
                           </div>
                       </Popup>
                    </div>
                </div>
        </div>
        )
}
const mapStateToProps = (state) => {
    return {
        cart : state.cart.cart
    }
}

export default connect(mapStateToProps)(Navbar);