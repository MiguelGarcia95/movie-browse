import React from 'react';

import './movieDisplay.css';

class MovieDisplay extends React.Component {
  render () {
    const {movie, trailers} = this.props;

    if (movie && trailers) {
      const backgroundImage = movie.backdrop_path;
      // console.log(movie)
      return (
        <section className="movie-display">
          <img src={`https://image.tmdb.org/t/p/original/${backgroundImage}`} alt={movie.title} />
          <section className="image-overlay"></section>
          <section className="movie-details">
            <h2>{movie.title}</h2>
            <hr/>
            <p>Stuff here</p>
          </section>
          <section className="trailer-box">
            <section className="trailer">
              {/*button here*/}
            </section>
          </section>
        </section>
      )
    } else {
      return (
        <section className="movie-display">
          {/*<img src="https://image.tmdb.org/t/p/original/zSJT1sKGRKcmP4I9b8dIOuepw6I.jpg" alt="" />*/}
          <section className="image-overlay"></section>
          <section className="movie-details">
            <h2>Movie Name</h2>
            <hr/>
            <p>Stuff here</p>
          </section>
          <section className="trailer-box">
            <section className="trailer">
              {/*button here*/}
            </section>
          </section>
        </section>
      )
    }
  }
}

export default MovieDisplay;
