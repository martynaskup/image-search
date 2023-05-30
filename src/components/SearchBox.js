import React, { Component } from 'react';

class SearchBox extends Component {
  state = { searchText: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form field">
          <label>Image Search: </label>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search a picture"
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
            <i
              className="circular search link icon"
              onClick={this.onFormSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
