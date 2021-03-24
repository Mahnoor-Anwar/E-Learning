
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import Home from './components/Home';
import Categories from './components/Web';

import {Route , Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Web from './components/Web';
import Artificial from './components/Artificial';
import Data from './components/Data';
import Digital from './components/Digital';
import Machine from './components/Machine';
import Mobile from './components/Mobile';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
        <NavBar />
           <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/WebDevelopment' component={Categories} />
              {/* <Route path='/contactUs' component={ContactUs} /> */}
              {/* <Link to="#contactUs"></Link> */}
              <Route path='/WebDevelopment' component={Web} />
              <Route path='/MobileAppDevelopment' component={Mobile} />
              <Route path='/DataSceince' component={Data} />
              <Route path='/MachineLearning' component={Machine} />
              <Route path='/DigitalMarketing' component={Digital} />
              <Route path='/AritificialIntelligence' component={Artificial} />
              
            </Switch>
         <Footer />
      
       
    </div>
  );
}

export default App;
