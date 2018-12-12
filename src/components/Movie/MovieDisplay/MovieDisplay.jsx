import React from 'react';
import TrailerModal from '../../Video/TrailerModal/TrailerModal';

import './movieDisplay.css';

class MovieDisplay extends React.Component {
  state = {
    isModalOpen: false,
    isPlaying: false
  }

  toggleModal = () => {
    let isPlaying = false;
    // if (this.state.isModalOpen) {
    //   this.setState({isPlaying: false})
    // }
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      isPlaying: !this.state.isPlaying
    })
  };

  render () {
    const {movie, trailers} = this.props;
    const {isModalOpen, isPlaying} = this.state;

    if (movie && trailers) {
      const backgroundImage = movie.backdrop_path;
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
              <img src={`https://image.tmdb.org/t/p/original/${backgroundImage}`} alt={movie.title} />
              <section className="trailer-details">
                <small>Watch <br/> Trailer</small>
                <span className="trailer-button">
                  <i className="far fa-play-circle fa-4x" onClick={this.toggleModal}></i>
                </span>
              </section>
            </section>
            <TrailerModal isModalOpen={isModalOpen} toggleModal={this.toggleModal} trailer={trailers[0]} isPlaying={isPlaying}/>
          </section>
        </section>
      )
    } else {
      return (
        <section className="movie-display">
          <section className="image-overlay"></section>
          <section className="movie-details">
            <h2>Movie Name</h2>
            <hr/>
            <p>Stuff here</p>
          </section>
          <section className="trailer-box">
            <section className="trailer">
              <span className="trailer-button"><i className="far fa-play-circle fa-2x"></i></span>
            </section>
            <TrailerModal isModalOpen={isModalOpen} toggleModal={this.toggleModal} trailer={trailers} isPlaying={isPlaying}/>
          </section>
        </section>
      )
    }
  }
}

export default MovieDisplay;
