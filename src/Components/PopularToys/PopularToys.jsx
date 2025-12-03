import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext'; 

const PopularToys = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const { theme } = useContext(ThemeContext); 

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch('/toyData.json');

                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }

                const data = await response.json();

                const topSix = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 6);

                setToys(topSix);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchToys();
    }, []);

    if (loading) {
        return <p className="text-center p-8 text-lg font-medium">Loading popular toys...</p>;
    }

    if (toys.length === 0) {
        return <p className="text-center p-8 text-red-500 font-bold">Sorry, no toys found!</p>;
    }

    const handleViewDetails = (toyId) => {
        const selectedToy = toys.find(toy => toy.toyId === toyId);

        if (selectedToy) {
            navigate('/details', {
                state: {
                    toy: selectedToy
                }
            });
        }
    };

    return (
        <div
            className={`
                p-6 rounded-2xl transition-colors duration-500 mt-10
                ${theme === "dark" ? "bg-black text-white" : "bg-gray-200 text-black"}
            `}
        >
            <h2 className="text-3xl font-bold mb-6 text-center underline">Popular Toys</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {toys.map(toy => (
                    <div key={toy.toyId}
                        className={`
                            card shadow-xl border overflow-hidden hover:shadow-2xl transition duration-300
                            ${theme === "dark" ? "bg-gray-800 border-gray-700 " : "bg-base-100 border-gray-100"}
                        `}
                    >
                        <figure className="h-48 w-full overflow-hidden">
                            <img
                                src={toy.pictureURL}
                                alt={toy.toyName}
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        <div className="card-body p-5">
                            <h3 className="card-title text-2xl font-extrabold line-clamp-1">
                                {toy.toyName}
                            </h3>

                            <div className="flex justify-between items-center mt-2">
                                <p className="text-lg font-semibold text-yellow-600">
                                    ⭐ {toy.rating}
                                </p>
                                <p className={`${theme === "dark" ? "text-2xl font-black text-white":"text-2xl font-black text-primary"}`}>
                                    ${toy.price.toFixed(2)}
                                </p>
                            </div>

                            <p className="text-sm opacity-70">
                                Available: {toy.availableQuantity} units
                            </p>

                            <div className="card-actions justify-end mt-4">
                                <button
                                    className="btn btn-primary btn-block font-bold"
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

export default PopularToys;
