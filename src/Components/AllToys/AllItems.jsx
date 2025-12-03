import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const AllItems = () => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("none"); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/toyData.json");
        if (!response.ok) throw new Error("Failed to load data");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return (
      <p className={`text-center p-8 text-lg font-medium ${theme === 'dark' ? 'text-white' : ''}`}>
        Loading all products...
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <p className={`text-center p-8 font-bold ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`}>
        No products found!
      </p>
    );
  }

  // Filtered & sorted items
  const sortedItems = [...items];
  if (sortOrder === "high") {
    sortedItems.sort((a, b) => b.price - a.price); 
  } else if (sortOrder === "low") {
    sortedItems.sort((a, b) => a.price - b.price); 
  }

  const handleViewDetails = (toyId) => {
    const selectedToy = items.find((toy) => toy.toyId === toyId);
    if (selectedToy) navigate("/details", { state: { toy: selectedToy } });
  };

  return (
    <div className={`p-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : ''}`}>
      <h2 className="text-3xl font-bold mb-6 text-center underline">All Items</h2>

      {/* Price Filter */}
      <div className="flex justify-end items-center mb-4">
        <label className="mr-2 font-semibold" htmlFor="priceSort">Sort by Price:</label>
        <select
          id="priceSort"
          className={`select select-bordered w-40 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-600' : ''}`}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Default</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedItems.map((toy) => (
          <div
            key={toy.toyId}
            className={`card overflow-hidden shadow-xl transition duration-300 hover:shadow-2xl border
              ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-base-100 border-gray-100'}
            `}
          >
            <figure className="h-48 w-full overflow-hidden">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
                }}
              />
            </figure>

            <div className={`card-body p-5 ${theme === 'dark' ? 'text-white' : ''}`}>
              <h3 className="card-title text-2xl font-extrabold line-clamp-1">{toy.toyName}</h3>

              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold text-yellow-400">⭐ {toy.rating}</p>
                <p className={`text-2xl font-black ${theme === 'dark' ? 'text-yellow-300' : 'text-primary'}`}>
                  ${toy.price.toFixed(2)}
                </p>
              </div>

              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm`}>
                Available: {toy.availableQuantity} units
              </p>

              <div className="card-actions justify-end mt-4">
                <button
                  className={`btn btn-primary btn-block font-bold ${theme === 'dark' ? 'btn-outline' : ''}`}
                  onClick={() => handleViewDetails(toy.toyId)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
