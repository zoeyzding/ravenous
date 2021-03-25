// eslint-disable-next-line
import logo from "../../logo.svg";
import "./App.css";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
