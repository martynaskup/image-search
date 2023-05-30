import React, { useState } from 'react';

const SearchBox = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');
  function onFormSubmit(e) {
    e.preventDefault();
    console.log(searchText);
    handleSearch(searchText);
  }

  const handleTextInputChange = (e) => setSearchText(e.target.value);
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form field">
        <label>Image Search: </label>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search a picture"
            value={searchText}
            onChange={handleTextInputChange}
          />
          <i className="circular search link icon" onClick={onFormSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
