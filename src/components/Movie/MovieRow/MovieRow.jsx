import React from 'react'
import MovieRowItem from '../MovieRowItem/MovieRowItem';
import './movieRow.css';

class MovieRow extends React.Component {
  // use reducers/action to fetch movie list from api using row query data

  render () {
    const {title} = this.props;
    return(
      <section className="movie-row">
        <section className="movie-row-title"><h2>{title}</h2></section>
        <MovieRowItem />
        <MovieRowItem />
        <MovieRowItem />
        <MovieRowItem />
        <MovieRowItem />
      </section>
    )
  }
}

export default MovieRow;
