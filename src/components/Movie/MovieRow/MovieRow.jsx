import React from 'react'
import MovieRowItem from '../MovieRowItem/MovieRowItem';
import './movieRow.css';

class MovieRow extends React.Component {

  loadMovieItems = () => {
    const {movies} = this.props;
    return movies.slice(0, 5).map((movie, index) => <MovieRowItem movie={movie} key={index} />)
  }

  render () {
    const {title, movies} = this.props;
    return(
      <section className="movie-row">
        <section className="movie-row-title"><h2>{title}</h2></section>
        {this.loadMovieItems()}
      </section>
    )
  }
}

export default MovieRow;
