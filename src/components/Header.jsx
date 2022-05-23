import React, { useContext } from 'react';
import 'styles/Header.scss';
import Menu from'components/Menu';
import AppContext from 'context/AppContext';
import shoppingCart from 'assets/icons/icon_shopping_cart.svg';
import MyOrder from 'containers/MyOrder';
import menu from 'assets/icons/icon_menu.svg';
import logo from 'assets/logos/logo_yard_sale.svg';
const Header = () => {
 
    const { state, toggleOrder, toogleMenu } = useContext(AppContext);
  
    return (
        <nav >
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
                    <li className="navbar-email" onClick = {() => toogleMenu()}>email@example.com</li>
                    <li className="navbar-shopping-cart" onClick = {() => toggleOrder()}>
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