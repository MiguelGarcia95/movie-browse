import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';

import MovieSlide from "../Movie/MovieSlide/MovieSlide";
import SectionNav from '../Navigation/SectionNav/SectionNav';
import MovieRow from "../Movie/MovieRow/MovieRow";
import MovieRows from "../Movie/MovieRows/MovieRows";
import MovieDisplay from "../Movie/MovieDisplay/MovieDisplay";

import {fetchMovieTrailer} from '../../actions/trailerActions';
import {fetchMovieBackgroundImages} from '../../actions/imageActions';
import {
  fetchPopularMovies, fetchPopularShows, fetchTopRatedMovies, fetchTopRatedShows,
  fetchUpcomingMovies, fetchPlayingNowMovies
} from '../../actions/movieActions';

import './style/home.css';

class Home extends React.Component {
  state = {
    apiCategory: 'movies',
    trailersFetched: false
  }

  componentDidMount() {
    if (this.state.apiCategory === 'movies') {
      this.fetchMovies();
    } else if (this.state.apiCategory === 'series') {
      this.fetchShows();
    }
  }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   if (nextProps.movieTrailers.length === 0 && nextProps.upcomingMovies.length > 0) {
  //     console.log(nextProps.upcomingMovies.length)
  //     console.log(nextProps.movieTrailers.length)
  //     const {id} = nextProps.upcomingMovies[0];
  //     nextProps.fetchMovieTrailer(id);
  //   }
  //   return null;
  // }

  // componentDidUpdate(nextProps) {
  //   if (nextProps.movieTrailers.length === 0 && nextProps.upcomingMovies.length > 0) {
  //     console.log(nextProps.upcomingMovies.length)
  //     console.log(nextProps.movieTrailers.length)
  //     const {id} = nextProps.upcomingMovies[0];
  //     nextProps.fetchMovieTrailer(id);
  //   }
  //   return null;
  // }

  toggleTrailerFetched = () => this.setState({trailersFetched: true});

  toggleApiCategory = (value) => {
    this.setState({apiCategory: value});
    (value === 'movies') ? this.fetchMovies() : this.fetchShows();
  };

  fetchMovies = () => {
    if (this.props.popularMovies.length === 0) {
      this.props.fetchPopularMovies();
    }
    if (this.props.topRatedMovies.length === 0) {
      this.props.fetchTopRatedMovies();
    }
    if (this.props.upcomingMovies.length === 0) {
      this.props.fetchUpcomingMovies();
    }
    if (this.props.playingNowMovies.length === 0) {
      this.props.fetchPlayingNowMovies();
    }
  };

  fetchShows = () => {
    if (this.props.popularShows.length === 0) {
      this.props.fetchPopularShows();
    }
    if (this.props.topRatedShows.length === 0) {
      this.props.fetchTopRatedShows();
    }
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
    if (this.props.movieTrailers.length === 0 && this.props.upcomingMovies.length > 0 && !this.state.trailersFetched) {
      const {id} = this.props.upcomingMovies[0];
      this.props.fetchMovieTrailer(id);
      this.toggleTrailerFetched();
    }
    const latestMovie = this.getContent('upcoming')[0];
    const latestMovieTrailers = this.props.movieTrailers;
    // const backgroundImages = this.props.backgroundMovieImages;
    const movieData = {
      popularContent: this.getContent('popular'),
      topRatedContent: this.getContent('top-rated'),
      upcomingMovies: this.getContent('upcoming'),
      playingNowMovies: this.getContent('now-playing'),
    }

    return(
      <section id="home">
        <section className="fc-section movie-section">
          <MovieDisplay movie={latestMovie} trailers={latestMovieTrailers} />
        </section>
        <section className="fc-section top-section">
          <h2>Start your next weekend binge today.</h2>
          <section className="movie-slider">
            <MovieSlide movie={latestMovie} trailers={latestMovieTrailers} />
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
  movieTrailers: state.trailers.topMovieTrailers,
  backgroundMovieImages: state.images.backgroundImages
});

export default connect(mapStateToProps, {
  fetchPopularMovies, fetchPopularShows, fetchTopRatedMovies, fetchTopRatedShows,
  fetchUpcomingMovies, fetchPlayingNowMovies, fetchMovieTrailer, fetchMovieBackgroundImages
})(Home);
