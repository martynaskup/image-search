import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBox from './SearchBox';
import Loader from './Loader';

class App extends Component {
  state = { images: [], loading: false, firstRequest: true };

  onSearchSubmit = async (term) => {
    this.setState({ firstRequest: false });
    this.setState({ loading: true });
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    this.setState({ loading: false });
    console.log(this.state.firstRequest);
  };

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: '10px', textAlign: 'center' }}
      >
        <SearchBox onSubmit={this.onSearchSubmit} />
        <Loader
          images={this.state.images}
          loading={this.state.loading}
          firstRequest={this.state.firstRequest}
        />
      </div>
    );
  }
}

export default App;
