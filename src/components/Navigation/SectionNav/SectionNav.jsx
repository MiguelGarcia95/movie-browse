import React from 'react';
import classnames from 'classnames';
import './sectionNav.css';

class SectionNav extends React.Component {
  render () {
    const {toggleApiCategory, apiCategory} = this.props;
    return (
      <nav className="section-nav">
        <ul>
          <li
            onClick={toggleApiCategory.bind(null, 'movies')}
            className={classnames({'active': (apiCategory === 'movies')})}
          >
            Movies
          </li>
          <li
            onClick={toggleApiCategory.bind(null, 'series')}
            className={classnames({'active': (apiCategory === 'series')})}
          >
            Series
          </li>
        </ul>
      </nav>
    )
  }
}

export default SectionNav;
