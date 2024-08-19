import React, { useState, useEffect } from 'react';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setHasMore(result.total > (count + 1) * 20);
      }
      setLoading(false);
    } catch (e) {
      console.error('Error fetching products:', e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500">
                {product.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {!loading && hasMore && (
        <button
          onClick={handleLoadMore}
          className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 mx-auto block"
        >
          Load More
        </button>
      )}
      {!hasMore && (
        <p className="text-center mt-4">No more products to load.</p>
      )}
    </div>
  );
};

export default LoadMoreData;
