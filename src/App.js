import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Food from './components/Food/Food';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/SignIn';
import CompleteOrder from './components/CompleteOrder/CompleteOrder';
import { AuthContextProvider, PrivateForPlaceOrder } from './components/SignUp/useAuth';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/food/:getUrlPath">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path='/cart'>
              <Cart></Cart>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateForPlaceOrder path='/cOrder'>
              <CompleteOrder></CompleteOrder>
            </PrivateForPlaceOrder>
            <Route exact path='/'>
              <Banner />
              <Food />
              <WhyChooseUs />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
