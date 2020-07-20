import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './header/LogoBanner'
import NavBar from "./navbar/NavBar"
import Home from './home/Home'
import UserLogin from './home/UserLogIn'
import Chirps from './chirps/Chirps'
import Quests from './quests/Quests'
import Footer from './footer/Footer'


const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/userlogin' component={UserLogin} />
        <Route path='/chirps' component={Chirps} />
        <Route path='/quests' component={Quests} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App
