import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Navigation/Footer/Footer';
import Home from './components/Pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
