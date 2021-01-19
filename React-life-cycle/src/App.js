import React, { Component } from 'react';
import Announcement from './AnnouncementBar/AnnouncementBar';
import TopBar from './TopBar/TopBar';
import Home from './Home/Home';
import About from './About/About';
import Shop from './Shop/Shop';
import Donate from './Donate/Donate';
import Contact from './Contact/Contact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CovidAlert from './CovidAlert/CovidAlert';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
import CartDetailsSlide from './CartDetailsSlide/CartDetailsSlide';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cartDataDisplay: false
     }
  }

  displayCart = () => {
    this.setState({cartDataDisplay: !this.state.cartDataDisplay})
  }






  render() {
    return ( 
      <BrowserRouter className="main_container">
        {
          this.state.cartDataDisplay ? 
            "" 
            : 
            <div onClick={this.displayCart} className="cart_content_container">
              <CartDetailsSlide close={this.displayCart} />
            </div>
        }
        <div className="top_bar_wrapper">
          <Announcement />
          <TopBar onClick={this.displayCart.bind(this)} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route path="/covid_alert" component={CovidAlert} />
          <Route path="/product_details_page" component={ProductDetailsPage} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;
