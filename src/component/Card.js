import React, { Component } from 'react';
import styles from './Card.module.css';

class Card extends Component {
        render() {
                return (
                        <div>
                                <div className={styles.cardWrapper}>
                                     <div>
                                     <img src={this.props.picture} alt="IphonePic "/>
                                        <div className={styles.cardCaption}>
                                        <h3>{this.props.name}</h3>
                                        <p>{this.props.price}</p>
                                        </div>
                                     </div>
                                </div>
                        </div>
                );
        }
}

export default Card;