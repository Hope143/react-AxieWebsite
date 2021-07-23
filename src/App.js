import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs}/>
        <Route path="/testimonials" exact component={Testimonials}/>
        <Route path="/sign-up" exact component={Signup}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
