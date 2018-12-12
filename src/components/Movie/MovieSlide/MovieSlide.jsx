import React from 'react'
import classnames from 'classnames';
import ModalVideo from 'react-modal-video'
import TrailerModal from '../../Video/TrailerModal/TrailerModal';

import './movieSlide.css';

// https://image.tmdb.org/t/p/original/{movie_backdrop}

class MovieSlide extends React.Component {
  state = {
    isModalOpen: false
  }

  toggleModal = () => this.setState({isModalOpen: !this.state.isModalOpen});

  onMovieToggle = e => this.setState({slideIsOpened: !this.state.slideIsOpened});

  render () {
    const {slideIsOpened} = this.state;
    const {movie, trailers} = this.props;
    if (slideIsOpened) {
      return(
        <section className="movie-box" >
          <span className="movie-toggle"><i className={classnames('fas', {'fa-plus' : (!slideIsOpened), 'fa-minus' : (slideIsOpened)})} onClick={this.onMovieToggle}></i></span>
          <section className="movie-box-image">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <span className="watch-button" onClick={this.toggleModal}>
              <i className="fas fa-play fa-2x"></i>
              <p>Watch <br/> Trailer</p>
            </span>
          </section>
          <section className="movie-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem est, accusantium aspernatur excepturi harum provident debitis cumque tenetur optio commodi, laborum odio, nulla id a officiis nemo. Minus, earum.</p>
          </section>
          <TrailerModal />
        </section>
      )
    } else if (!slideIsOpened && movie && trailers) {
      return(
        <section className="movie-box closed">
          <span className="movie-toggle"><i className={classnames('fas', {'fa-plus' : (!slideIsOpened), 'fa-minus' : (slideIsOpened)})} onClick={this.onMovieToggle}></i></span>
          <section className="movie-box-image">
            <img className="closed" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <span className="watch-button" onClick={this.toggleModal}>
              <i className="fas fa-play fa-2x"></i>
              <p>Watch <br/> Trailer</p>
            </span>
          </section>
          <section className="movie-details closed">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem est, accusantium aspernatur excepturi harum provident debitis cumque tenetur optio commodi, laborum odio, nulla id a officiis nemo. Minus, earum.</p>
          </section>
          <TrailerModal />
        </section>
      )
    } else {
      return (
        <section className="movie-box closed">
        </section>
      )
    }
  }
}

export default MovieSlide;
