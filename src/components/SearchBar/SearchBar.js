import React from "react";
import "./SearchBar.css";

// eslint-disable-next-line

class SearchBar extends React.Component {
  constructor(sortByOption) {
    super(sortByOption);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
<<<<<<< HEAD
    this.setState = { sortBy: sortByOption };
  }

  handleTermChange(event) {
    this.setState = {};
  }

  handleLocationChange(event) {
    this.setState = {};
=======
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
>>>>>>> 7f823e0d24ef39565d8c217f02683f1d28af9706
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
<<<<<<< HEAD
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
=======
        <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>
          {" "}
>>>>>>> 7f823e0d24ef39565d8c217f02683f1d28af9706
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input onChange={this.handleTermChange} placeholder='Search Businesses' />
          <input onChange={this.handleLocationChange} placeholder='Where?' />
        </div>
        <div className='SearchBar-submit'>
<<<<<<< HEAD
          <a href='www.baidu.com'>Let's Go</a>
=======
          <a href='' onClick={this.handleSearch}>
            {" "}
            Let's Go
          </a>
>>>>>>> 7f823e0d24ef39565d8c217f02683f1d28af9706
        </div>
      </div>
    );
  }
}

export default SearchBar;
