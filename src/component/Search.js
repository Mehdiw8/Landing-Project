import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
        constructor(props) {
                super(props);
                this.state={
                        value:'',
                }
        }

        valueHandler = (e)=>{
                this.setState({value:e.target.value})
        }


        render() {
                return (
                        <div className={styles.sreachFieldWrapper}>
                                     <div className={styles.SearchContent}>
                                             <h1>Serach what you Want</h1>
                                             <input type="text" placeholder="Search" value={this.state.value} onChange={this.valueHandler} />
                                     </div>                           
                                             <span>{this.state.value}</span>
                        </div>
                );
        }
}

export default Search;