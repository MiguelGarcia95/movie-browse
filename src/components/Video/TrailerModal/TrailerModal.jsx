import React from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player'

import './trailerModal.css';

class TrailerModal extends React.Component {
  state = {
    aspectRatio: 360/640,
    height: '',
    width: ''
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth * 0.8,
      height: window.innerWidth * 0.8 * this.state.aspectRatio
    })
  }

  render () {
    const {width, height} = this.state;
    const {isModalOpen, toggleModal, trailers, isPlaying} = this.props;

    if (isPlaying) {
      return (
        <section className={classnames('movie-modal', {'opened': (isModalOpen)})}>
          <span className="exit">
            <i className="fas fa-times fa-2x" onClick={toggleModal}></i>
          </span>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=BQLEW1c-69c'
            playing={false}
            width={width}
            height={height}
          />
        </section>
      )
    } else {
      return (
        <section className={classnames('movie-modal', {'opened': (isModalOpen)})}>
          <span className="exit">
            <i className="fas fa-times fa-2x" onClick={toggleModal}></i>
          </span>
        </section>
      )
    }

  }
}

export default TrailerModal;
