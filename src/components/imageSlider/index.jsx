import React, { useState, useEffect } from 'react';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url, limit, page]);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) setImages(data);
      setLoading(false);
    } catch (e) {
      console.error('Error fetching images:', e);
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred! {errorMsg}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <div className="relative w-[70vw] h-[70vh]">
        {images.length > 0 ? (
          <>
            <img
              src={`https://picsum.photos/id/${images[currentSlide].id}/1000/600`}
              alt={`Image by ${images[currentSlide].author}`}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
              <button
                onClick={handlePrevious}
                className="w-24 bg-black text-white p-2 rounded-md opacity-50 hover:opacity-100 transition"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="w-24 bg-black text-white p-2 rounded-md opacity-50 hover:opacity-100 transition"
              >
                Next
              </button>
            </div>
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full mx-1 ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <div className="absolute bottom-20 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2">
              Photo by: {images[currentSlide].author}
            </div>
          </>
        ) : (
          <div>No images to display</div>
        )}
      </div>
    </div>
  );
}
