import React from 'react'
import {connect} from 'react-redux';
import './MovieRowItem.css';

class MovieRowItem extends React.Component {
  isItAMovie = (movie) => movie.release_date ? true : false;

  getMovieDate = (movie) => {
    if (this.isItAMovie(movie)) {
      return new Date(movie.release_date);
    } else {
      return new Date(movie.first_air_date);
    }
  }

  convertIdToGenre = (genre_id, type) => {
    let genre = '';

    if (type === 'movie') {
      for (var i = 0; i < this.props.movieGenres.length; i++) {
        if (this.props.movieGenres[i].id === genre_id) {
          genre = ` ${this.props.movieGenres[i].name}`;
          break;
        }
      }
    } else {
      for (var i = 0; i < this.props.showGenres.length; i++) {
        if (this.props.showGenres[i].id === genre_id) {
          genre = ` ${this.props.showGenres[i].name}`;
          break;
        }
      }
    }
    return genre;
  }

  getMovieGenres = (movie) => {
    let genres = [];
    if (this.isItAMovie(movie)) {
      movie.genre_ids.forEach((genre) => {
        if (genres.length < 2) {
          genres.push(this.convertIdToGenre(genre, 'movie'));
        }
      })
    } else {
      movie.genre_ids.forEach((genre) => {
        if (genres.length < 2) {
          genres.push(this.convertIdToGenre(genre, 'tv'));
        }
      })
    }
    return genres;
  }

  render () {
    const {movie} = this.props;
    const date = this.getMovieDate(movie).getFullYear();
    const posterImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const genres = this.getMovieGenres(movie);
    return(
      <section className="row-item">
        <section className="item-image">
          <img src={posterImage} alt={movie.original_title}/>
          <span className="item-score"><p>{movie.vote_average}</p></span>
        </section>
        <section className="item-details">
          <section className="meta">{date} / {genres.toString()}</section>
          <section className="title">{movie.original_title}</section>
        </section>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  showGenres: state.genres.showGenres,
  movieGenres: state.genres.movieGenres
})

export default connect(mapStateToProps, null)(MovieRowItem);
