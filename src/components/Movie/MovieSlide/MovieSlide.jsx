import React from 'react'
import classnames from 'classnames';

import './movieSlide.css';

class MovieSlide extends React.Component {
  state = {
    slideIsOpened: false
  }

  onMovieToggle = e => {
    this.setState({slideIsOpened: !this.state.slideIsOpened})
  }

  render () {
    const {slideIsOpened} = this.state;

    if (slideIsOpened) {
      return(
        <section className="movie-box" >
          <section className="movie-box-image" onClick={this.onMovieToggle}>
            <img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt=""/>
            <span className="watch-button">
              <i className="fas fa-play fa-2x"></i>
              <p>Watch <br/> Trailer</p>
            </span>
          </section>
          <section className="movie-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem est, accusantium aspernatur excepturi harum provident debitis cumque tenetur optio commodi, laborum odio, nulla id a officiis nemo. Minus, earum.</p>
          </section>
        </section>
      )
    } else {
      return(
        <section className="movie-box closed">
          <section className="movie-box-image" onClick={this.onMovieToggle}>
            <img className="closed" src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt=""/>
            <span className="watch-button">
              <i className="fas fa-play fa-2x"></i>
              <p>Watch <br/> Trailer</p>
            </span>
          </section>
          <section className="movie-details closed">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem est, accusantium aspernatur excepturi harum provident debitis cumque tenetur optio commodi, laborum odio, nulla id a officiis nemo. Minus, earum.</p>
          </section>
        </section>
      )
    }
  }
}

export default MovieSlide;
