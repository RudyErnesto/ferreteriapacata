import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Header.module.scss';
const Header = () => {
    const { state, toggleOrder, toggleMenu } = useContext(AppContext);
    return (
        <nav className={styles.Nav}>
            <Image src={menu} alt="menu" className={styles.menu} />
            <div className={styles['navbar-left']}>
                <Link href="/">
                    <Image src={logo} alt="logo" className={styles['nav-logo']}/>
                </Link>
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
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} onClick = {() => toggleMenu()}>email@example.com</li>
                    <li className={styles['navbar-shopping-cart']} onClick = {() => toggleOrder()}>
                        <Image src={shoppingCart} alt="shopping-cart" />
                        {state.cart.length > 0 ? <div > {state.cart.length}</div> : null } 
                    </li>
                </ul>
            </div>
            {state.menuIsOpen && <Menu />}
            {state.orderIsOpen && <MyOrder />}
        </nav>
    );
}

export default Header;