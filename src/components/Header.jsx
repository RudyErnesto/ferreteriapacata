import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import '@components/Menu';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import Menu from './Menu';
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders ] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () =>{
        setToggle(!toggle); // . ! cambia el estado a su opuesto
    }
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electro</a>
                    </li>
                    <li>
                        <a href="/">Fornituors</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick = {handleToggle}>email@example.com</li>
                    <li className="navbar-shopping-cart" onClick = {() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping-cart" />
                        {state.cart.length > 0 ? <div > {state.cart.length}</div> : null } 
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;