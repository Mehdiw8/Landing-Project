import React, { Component } from 'react';
import styles from './Navigation.module.css';
import Logo from "./images/Logo.png";
class Navigation extends Component {
        render() {
                return (
                        <React.Fragment>
                                <header className={styles.headContainer}>
                                        <nav className={styles.listWrapper}>
                                                <ul>
                                                        <li>Home</li>
                                                        <li>Product</li>
                                                        <li>About Us</li>
                                                </ul>
                                        </nav>
                                        <div className={styles.logo}>
                                                <img src={Logo} alt="logo" />
                                        </div>
                                </header>
                        </React.Fragment>
                );
        }
}

export default Navigation;