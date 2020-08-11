import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './context/StateContext';
import { auth } from './firebase';


function Header() {
const [{basket, user}] = useStateValue();
console.log("basket", basket)

const login = () => {
    if(user){
        auth.signOut();
    }
}

const inputFocus = (event) => {
    console.log("On Focus====>", event.target)
    event.target.style.border = "1px solid orange"
    event.target.style.boxShadow = "0 0 7px orange"
}
const inputBlur = (event) => {
    console.log("On Focus====>", event.target)
    event.target.style.background = "white";
    event.target.style.border = "1px solid #a6a6a6"
    event.target.style.boxShadow = "0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset"
}

 return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            </Link>
            <div className="header__search">
                <input type="text" onFocus={inputFocus} onBlur={inputBlur} className="header__searchInput"/>
                <div className="header__search__button">
                    <SearchIcon className="header__searchIcon"/>
                </div>
            </div>

            <div className="header__nav">
                <Link to={!user && "/signin"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user && user.email}</span>
                        <span className="header__optionLineTwo"> {user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon fontSize="large"/>
                        <span className="header__optionLineTwo header__basketCount">{basket ? basket.length: ""}</span>
                    </div>
                </Link>
            </div>

            
        </nav>
    )
}

export default Header
