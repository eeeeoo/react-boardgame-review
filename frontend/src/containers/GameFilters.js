import React from 'react';
import GenreDropdown from '../components/GenreDropdown';
import NameFilter from '../components/NameFilter';

const GameFilters = (props) => {
  return (
    <div className="filterForm">
      <GenreDropdown
        genres={props.genres}
        currentGenre={props.currentGenre}
        handleDropdown={props.handleGenreFilter}
      />
      <NameFilter
        handleNameFilter={props.handleNameFilter}
        query={props.query}
        handleNameSubmit={props.handleNameSubmit}
      />
    </div>
  )
}

export default GameFilters;
