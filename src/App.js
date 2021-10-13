import React, { Component } from 'react';
import Navigation from "./component/Navigation"
import Slider from "./component/Slider"
import Cards from "./component/Cards"
import Search from "./component/Search"
import Brand from './component/Brand'
import Footer from './component/Footer'
class App extends Component {
        render() {
                return (
                        <div>
                                <Navigation />
                                <Slider />
                                <Cards />
                                <Search />
                                <Brand />
                                <Footer />
                        </div>
                );
        }
}

export default App;