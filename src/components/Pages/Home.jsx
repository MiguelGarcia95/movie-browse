import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import MovieSlide from "../Movie/MovieSlide/MovieSlide";
import MovieRow from "../Movie/MovieRow/MovieRow";

import {fetchPopularMovies, fetchPopularShows} from '../../actions/movieActions/movieActions';

import './style/home.css';

class Home extends React.Component {
  state = {
    apiCategory: 'movies'
  }

  componentDidMount() {
    if (this.state.apiCategory === 'movies') {
      this.props.fetchPopularMovies();
    } else if (this.state.apiCategory === 'series') {
      this.props.fetchPopularShows();
    }
  }

  componentWillUpdate() {
    if (this.state.apiCategory === 'movies') {
      this.props.fetchPopularMovies();
    } else if (this.state.apiCategory === 'series') {
      this.props.fetchPopularShows();
    }
  }

  toggleApiCategory = (value) => this.setState({apiCategory: value});

  getMovies = (category) => {
    switch (category) {
      case 'popular':
      if (this.state.apiCategory === 'movies') {
        return this.props.popularMovies
      } else if (this.state.apiCategory === 'series') {
        return this.props.popularShows
      }
        break;
      // default:
    }
  }


  render () {
    const {apiCategory} = this.state;
    return(
      <section id="home">
        <section className="fc-section top-section">
          <h2>Start your next weekend binge today.</h2>
          <section className="movie-slider">
            <MovieSlide />
          </section>
        </section>
        <section className="fc-section home-recommended">
          <nav className="section-nav">
            <ul>
              <li
                onClick={this.toggleApiCategory.bind(null, 'movies')}
                className={classnames({'active': (apiCategory === 'movies')})}
              >
                Movies
              </li>
              <li
                onClick={this.toggleApiCategory.bind(null, 'series')}
                className={classnames({'active': (apiCategory === 'series')})}
              >
                Series
              </li>
            </ul>
          </nav>

          <MovieRow title='On the Air' movies={this.getMovies('popular')} />
          {/*<MovieRow title='Top Rated' movies={this.getMovies()} />*/}

        </section>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  popularMovies: state.movies.popularMovies,
  popularShows: state.movies.popularShows
});

export default connect(mapStateToProps, {fetchPopularMovies, fetchPopularShows})(Home);
