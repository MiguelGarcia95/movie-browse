import React from 'react';
import MovieSlide from "../Movie/MovieSlide/MovieSlide";
import MovieRow from "../Movie/MovieRow/MovieRow";
import './style/home.css';

class Home extends React.Component {
  state = {
    apiCategory: 'movies'
  }

  render () {
    const {apiCategory} = this.props;
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
              <li>Movies</li>
              <li>Series</li>
            </ul>
          </nav>
          <MovieRow title='On the Air' query="here goes api query data" apiCategory={apiCategory} />
          <MovieRow title='Top Rated' query="here goes api query data" apiCategory={apiCategory} />

        </section>
      </section>
    )
  }
}

export default Home;
