import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
        render() {
                return (
                        <>
                           <footer className={styles.footer}>
                                   <p>&copy; All Right Reserved 2021</p>
                                   </footer>     
                        </>
                );
        }
}

export default Footer;