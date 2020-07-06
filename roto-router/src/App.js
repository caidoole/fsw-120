import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './roto-navigation/Navigation';
import Home from './roto-navigation/Home';
import Services from './roto-navigation/Services';
import ContactUs from './roto-navigation/ContactUs';
import LogoBanner from './logo/LogoBanner';
import FootNote from './footer/FootNote';

function App() {
  return (
    <div className="App">

      <Navigation />

      <LogoBanner />

      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route path='/services' component={Services} />
        <Route path='/contactus' component={ContactUs} />
      </Switch>

      <FootNote />
    </div>
  );
}

export default App;
