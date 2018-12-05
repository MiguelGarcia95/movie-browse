import React from 'react'
import classnames from 'classnames';
import ModalVideo from 'react-modal-video'

import './movieSlide.css';

class MovieSlide extends React.Component {
  state = {
    slideIsOpened: false,
    isModalOpen: true
  }

  toggleModal = () => this.setState({isModalOpen: !this.state.isModalOpen});

  onMovieToggle = e => this.setState({slideIsOpened: !this.state.slideIsOpened});

  render () {
    const {slideIsOpened, isModalOpen} = this.state;
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
          <section className={classnames('movie-modal', {'opened': (isModalOpen)})}>
            <span className="exit">
              <i className="fas fa-times fa-2x" onClick={this.toggleModal}></i>
            </span>
          </section>
        </section>
      )
    } else if (!slideIsOpened && movie && trailers) {
      return(
        <section className="movie-box closed">
          <span className="movie-toggle"><i className={classnames('fas', {'fa-plus' : (!slideIsOpened), 'fa-minus' : (slideIsOpened)})} onClick={this.onMovieToggle}></i></span>
          <section className="movie-box-image">
            <img className="closed" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            {/*<ModalVideo className='modal-video-body' channel='youtube' isOpen={isModalOpen} videoId={trailers[0].key} onClose={this.toggleModal}/>*/}
            <span className="watch-button" onClick={this.toggleModal}>
              <i className="fas fa-play fa-2x"></i>
              <p>Watch <br/> Trailer</p>
            </span>
          </section>
          <section className="movie-details closed">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem est, accusantium aspernatur excepturi harum provident debitis cumque tenetur optio commodi, laborum odio, nulla id a officiis nemo. Minus, earum.</p>
          </section>
          <section className={classnames('movie-modal', {'opened': (isModalOpen)})}>
            <span className="exit">
              <i className="fas fa-times fa-2x" onClick={this.toggleModal}></i>
            </span>
          </section>
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
