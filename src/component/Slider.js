import React, { Component } from 'react';
import banner from "./images/banner.jpg";
import styles from "./Slider.module.css";

class Slider extends Component {
        render() {
                return (
                        <>
                            <div className={styles.sliderWrapper}>
                               <img  src={banner} alt=" Banner " />     
                               <div className={styles.caption}>
                               <h3>Mehdi</h3>
                               <p>First Project!</p>
                               </div>
                           </div>
                                 
                        </>
                );
        }
}

export default Slider;