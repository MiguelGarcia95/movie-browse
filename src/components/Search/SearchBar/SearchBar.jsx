import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  state = {
    isSearchOpen: false
  }
  render () {
    const {isSearchOpen} = this.state;
    return (
      <section className="search-bar">
        <span className="search-icon">
        </span>
        <section className={classnames('search-section '{'search-opened': isSearchOpen})}>
        </section>
      </section>
    )
  }
}

export default SearchBar;
