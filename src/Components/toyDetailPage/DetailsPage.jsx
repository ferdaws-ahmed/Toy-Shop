import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toy = location.state?.toy;

  const { theme } = useContext(ThemeContext); // Get theme from context
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    document.title = "Toy Details";
  }, [location.pathname]);

  const handleTryNowClick = (e) => {
    e.preventDefault();
    if (!showForm) {
      setShowForm(true);
      return;
    }

    if (!formData.name || !formData.email) {
      toast.error("Please enter both name and email!");
      return;
    }

    toast.success(`${formData.name}, your trial request for ${toy.toyName} has been submitted! 🎉`, {
      position: "top-right",
      autoClose: 2000,
      theme: theme === 'dark' ? 'dark' : 'light',
    });

    setFormData({ name: '', email: '' });
    setShowForm(false);
  };

  if (!toy) {
    return (
      <div className={`text-center p-10 ${theme === 'dark' ? 'bg-black text-white' : ''}`}>
        <Helmet>
          <title>Toy Details</title>
        </Helmet>
        <p className="text-xl text-red-600">No toy data found!</p>
        <button onClick={() => navigate('/')} className="btn btn-primary mt-4">
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className={`container mx-auto p-8 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : ''}`}>
      <button onClick={() => navigate(-1)} className={`btn btn-ghost mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>
        &larr; Back to Popular Toys
      </button>

      <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>

        {/* Image */}
        <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden group">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Details */}
        <div className="lg:w-1/2 p-10">
          <h1 className={`text-4xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {toy.toyName}
          </h1>
          <p className={`text-xl font-black mb-6 ${theme === 'dark' ? 'text-yellow-400' : 'text-primary'}`}>
            ${toy.price.toFixed(2)}
          </p>

          <div className="space-y-3 mb-8">
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
              <span className="font-semibold">Rating:</span> ⭐ {toy.rating}
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
              <span className="font-semibold">Quantity:</span> {toy.availableQuantity} units
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
              <span className="font-semibold">Description:</span> {toy.description}
            </p>
          </div>

          <form onSubmit={handleTryNowClick}>
            {showForm && (
              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'input-secondary text-white' : ''}`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`input input-bordered w-full ${theme === 'dark' ? 'input-secondary text-white' : ''}`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            )}
            <button type="submit" className={`btn btn-success btn-lg w-full ${theme === 'dark' ? 'btn-outline' : ''}`}>
              Try Now
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
