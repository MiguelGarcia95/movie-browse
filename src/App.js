import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Navigation/Footer/Footer';
import Home from './components/Pages/Home';

import {fetchMovieGenres, fetchShowGenres} from './actions/genreActions';

import './App.css';



class App extends Component {
  componentDidMount() {
    this.props.fetchShowGenres();
    this.props.fetchMovieGenres();
  }

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

const mapStateToProps = state => ({
  showGenres: state.genres.showGenres,
  movieGenres: state.genres.movieGenres
})

// export default App;
export default connect(mapStateToProps, {fetchMovieGenres, fetchShowGenres})(App);
