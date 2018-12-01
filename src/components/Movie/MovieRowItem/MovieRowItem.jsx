import React from 'react'
import './MovieRowItem.css';

class MovieRowItem extends React.Component {
  render () {
    return(
      <section className="row-item">
        <section className="item-image">
          <img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt=""/>
          <span className="item-score"><p>7.1</p></span>
        </section>
        <section className="item-details">
          <section className="meta">2015 / Fiction, Drama</section>
          <section className="title">Title Here</section>
        </section>
      </section>
    )
  }
}

export default MovieRowItem;
