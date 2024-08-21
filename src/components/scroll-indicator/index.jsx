import React, { useState, useEffect } from 'react';

const url = 'https://fakestoreapi.com/products'; // Example API for products

export default function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (errorMessage)
    return <div className="text-center py-10 text-red-500">{errorMessage}</div>;

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div
          className="h-full bg-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Product List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-gray-800 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
