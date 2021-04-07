import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match ": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed ": "review_count",
};

function renderSortByOptions() {
  return Object.keys(sortByOptions).map((sortByOption) => {
    let sortByOptionValue = sortByOptions[sortByOption];
    return <li key={sortByOptionValue}>{sortByOption}</li>;
  });
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  state = {};

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input placeholder='Search Businesses' />
          <input placeholder='Where?' />
        </div>
        <div className='SearchBar-submit'>
          {/* eslint-disable-next-line */}
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
