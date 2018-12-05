import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';

import MovieSlide from "../Movie/MovieSlide/MovieSlide";
import SectionNav from '../Navigation/SectionNav/SectionNav';
import MovieRow from "../Movie/MovieRow/MovieRow";
import MovieRows from "../Movie/MovieRows/MovieRows";
import {fetchMovieTrailer} from '../../actions/trailerActions';
import {
  fetchPopularMovies, fetchPopularShows, fetchTopRatedMovies, fetchTopRatedShows,
  fetchUpcomingMovies, fetchPlayingNowMovies
} from '../../actions/movieActions';

import './style/home.css';

class Home extends React.Component {
  state = {
    apiCategory: 'movies'
  }

  componentDidMount() {
    if (this.state.apiCategory === 'movies') {
      this.fetchMovies();
      // this.fetchLatestMovie();
    } else if (this.state.apiCategory === 'series') {
      this.fetchShows();
    }
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.movieTrailers.length === 0 && nextProps.upcomingMovies.length > 0) {
      const {id} = nextProps.upcomingMovies[0];
      nextProps.fetchMovieTrailer(id);
    }
    return null;
  }

  toggleApiCategory = (value) => {
    this.setState({apiCategory: value});

    if (value === 'movies') {
      this.fetchMovies();
    } else if (value === 'series') {
      this.fetchShows();
    }
  };

  fetchLatestMovie = () => this.props.fetchLatestMovie();

  fetchMovies = () => {
    this.props.fetchPopularMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchUpcomingMovies();
    this.props.fetchPlayingNowMovies();
  };

  fetchShows = () => {
    this.props.fetchPopularShows();
    this.props.fetchTopRatedShows();
  };

  getContent = (category) => {
    switch (category) {
      case 'popular':
        if (this.state.apiCategory === 'movies') {
          return this.props.popularMovies
        } else {
          return this.props.popularShows
        }
      case 'top-rated':
        if (this.state.apiCategory === 'movies') {
          return this.props.topRatedMovies
        } else {
          return this.props.topRatedShows
        }
      case 'upcoming':
        return this.props.upcomingMovies
      case 'now-playing':
        if (this.state.apiCategory === 'movies') {
          return this.props.playingNowMovies
        }
    }
  }


  render () {
    const {apiCategory} = this.state;
    const latestMovie = this.getContent('upcoming')[0];
    const latestMovieTrailers = this.props.movieTrailers;
    const movieData = {
      popularContent: this.getContent('popular'),
      topRatedContent: this.getContent('top-rated'),
      upcomingMovies: this.getContent('upcoming'),
      playingNowMovies: this.getContent('now-playing'),
    }
    return(
      <section id="home">
        <section className="fc-section top-section">
          <h2>Start your next weekend binge today.</h2>
          <section className="movie-slider">
            <MovieSlide movie={latestMovie} trailers={latestMovieTrailers.results} />
          </section>
        </section>
        <section className="fc-section home-recommended">
          <SectionNav toggleApiCategory={this.toggleApiCategory} apiCategory={apiCategory} />

          <MovieRows type={apiCategory} data={movieData} />

        </section>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  popularMovies: state.movies.popularMovies,
  popularShows: state.movies.popularShows,
  topRatedMovies: state.movies.topRatedMovies,
  topRatedShows: state.movies.topRatedShows,
  upcomingMovies: state.movies.upcomingMovies,
  playingNowMovies: state.movies.playingNowMovies,
  movieTrailers: state.trailers.topMovieTrailers
});

export default connect(mapStateToProps, {
  fetchPopularMovies, fetchPopularShows, fetchTopRatedMovies, fetchTopRatedShows,
  fetchUpcomingMovies, fetchPlayingNowMovies, fetchMovieTrailer
})(Home);
