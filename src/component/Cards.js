import React, { Component } from 'react';

import styles from './Cards.module.css';
import Iphone10 from './images/iphone11.jpg'
import Iphone11 from './images/iphone12.jpg'
import Iphone9 from './images/iphone12.jpg'
import Card from './Card'

class Cards extends Component {

        constructor (props) {
                super(props);
                this.state ={
                        products: [
                            {id:1,name:'Iphone X',price:'500 $',picture:Iphone10},
                            {id:2,name:'Iphone 10',price:'300 $',picture:Iphone11},
                            {id:3,name:'Iphone 11',price:'200 $',picture:Iphone10},
                            {id:4,name:'Iphone 9',price:'700 $',picture:Iphone9}
                        ],
                }
        }



        render() {
                return (
                        <>
                                <section className={styles.cardWrapper}>
                                {this.state.products.map(( product )=> <Card key={product.id} name={product.name} price={product.price} picture={product.picture}  /> )}
                                  </section>                                
                        </>
                );
        }
}

export default Cards;