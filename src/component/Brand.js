import React, { Component } from 'react';
import styles from './Brand.module.css'
import sumsong from './images/samsung.jpg'
import apple from './images/apple.jpg'
import xiaomi from './images/xiaomi.png'

class Brand extends Component {
        render() {
                return (
                        <div className={styles.brand}>
                                <h1>Who Support Us</h1>
                                <div className={styles.logos}>
                                        <img src={sumsong} alt="logo"></img>
                                        <img src={apple} alt="logo"></img>
                                        <img src={xiaomi} alt="logo"></img>
                                </div>
                        </div>
                );
        }
}

export default Brand;