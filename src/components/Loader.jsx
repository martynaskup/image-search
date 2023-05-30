import ImageList from './ImageList';

const Loader = ({ images, loading, firstRequest }) => {
  if (firstRequest) {
    return (
      <div
        className="ui small message"
        style={{ width: '300px', margin: 'auto' }}
      >
        Sooo... Which images are you looking for?
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className="ui icon message"
        style={{ width: '300px', margin: 'auto' }}
      >
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">Just a second...</div>
          <p>I'm searching pictures for you!</p>
        </div>
      </div>
    );
  }
  if (!loading && !firstRequest && !images.length) {
    return (
      <div
        className="ui small message"
        style={{ width: '300px', margin: 'auto' }}
      >
        Sorry, we didn't find any pictures for your request. Please try again!
      </div>
    );
  }

  return <ImageList images={images} />;
};

export default Loader;
