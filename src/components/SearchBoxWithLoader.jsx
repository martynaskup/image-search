import SearchBox from './SearchBox';
import { useState } from 'react';
import unsplash from '../api/unsplash';
import Loader from './Loader';

const SearchBoxWithLoader = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstRequest, setFirstRequest] = useState(true);

  const handleSearch = (term) => {
    setFirstRequest(false);
    setLoading(true);
    unsplash
      .get('/search/photos', {
        params: { query: term },
      })
      .then((response) => setImages(response.data.results))
      .then(setLoading(false));
  };

  return (
    <>
      <SearchBox handleSearch={handleSearch} />
      <Loader images={images} loading={loading} firstRequest={firstRequest} />
    </>
  );
};

export default SearchBoxWithLoader;
