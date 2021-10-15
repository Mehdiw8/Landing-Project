import React, { Component } from 'react';
import styles from './Card.module.css';
import downArrow from './images/down.svg';
import upArrow from './images/up.svg';

class Card extends Component {

        constructor(props) {
                super (props);
                this.state = {
                        counter : 0,
                }
        }

        downArrowHandler = () =>{
               if(this.state.counter >= 1){
                this.setState(
                        (prevState) =>(
                                {
                              
                                        counter:prevState.counter-1,
                        })
                )
               }
        } 
        upArrowHandler = ()=>{
                this.setState(
                        (prevState) =>({
                                counter:prevState.counter+1,
                        })
                )
        }


        render() {
                const {picture,name,price} = this.props
                const {counter}=this.state

                return (
                        <div>
                                <div className={styles.cardWrapper}>
                                     <div>
                                     <img src={picture} alt="IphonePic "/>
                                        <div className={styles.cardCaption}>
                                        <h3>{name}</h3>
                                        <p>{price} {counter ? `* ${counter} = ${counter*price.split(' ')[0]} $` : ''}</p>
                                        <div className={styles.numBy}>
                                                <img className={!counter && styles.deactive} src={downArrow}  alt="downArrow" onClick={this.downArrowHandler}  />
                                                <span>{counter}</span>
                                                <img src={upArrow}  alt="upArrow" onClick={this.upArrowHandler} />
                                        </div>
                                        </div>
                                     </div>
                                </div>
                        </div>
                );
        }
}

export default Card;