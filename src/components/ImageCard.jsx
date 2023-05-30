import { useEffect, useRef, useState } from 'react';

const ImageCard = ({ image }) => {
  const imageRef = useRef(null);
  const [spans, setSpans] = useState(0);

  const setNewSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 2);
    setSpans(spans);
  };

  useEffect(() => {
    const imageRefCurrent = imageRef.current;

    imageRefCurrent.addEventListener('load', setNewSpans);
    // Remove the event listener when component unmounts

    return () => imageRefCurrent.removeEventListener('load', setNewSpans);
  }, [image]);

  const { urls, alt_description } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={urls.regular} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
