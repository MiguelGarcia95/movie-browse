import React from 'react';
import MovieRow from '../MovieRow/MovieRow';

class MovieRows extends React.Component {
  render () {
    const {popularContent, topRatedContent, upcomingMovies, playingNowMovies} = this.props.data;
    const {type} = this.props;
    if (type === 'movies') {
      return(
        <section>
          <MovieRow title='Popular' movies={popularContent} />
          <MovieRow title='Top Rated' movies={topRatedContent} />
          <MovieRow title='Upcoming' movies={upcomingMovies} />
          <MovieRow title='Now Playing' movies={playingNowMovies} />
        </section>
      )
    } else {
      return(
        <section>
          <MovieRow title='Popular' movies={popularContent} />
          <MovieRow title='Top Rated' movies={topRatedContent} />
        </section>
      )
    }
  }
}

export default MovieRows;
