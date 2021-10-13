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
                console.log(this.state.value)
        }


        render() {
                return (
                        <div className={styles.sreachFieldWrapper}>
                                     <div className={styles.SearchContent}>
                                             <h1>Serach what you Want</h1>
                                             <input type="text" placeholder="Search" value={this.state.value} onChange={this.valueHandler} />
                                     </div>                           
                        </div>
                );
        }
}

export default Search;