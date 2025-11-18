import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const DetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const toy = location.state?.toy; 

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

        const { name, email } = formData;

        if (!name || !email) {
            toast.error("Please enter both name and email!");
            return;
        }

        toast.success(`${name}, your trial request for ${toy.toyName} has been submitted! 🎉`, {
            position: "top-right",
            autoClose: 2000,          
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored", 
        });

        setFormData({ name: '', email: '' });
        setShowForm(false);
    };

    if (!toy) {
        return (
            <div className="text-center p-10">
                <Helmet key={location.pathname}>
        <title>Toy Details</title>
      </Helmet>
                <p className="text-xl text-red-600">No toy data found!</p>
                <button 
                    onClick={() => navigate('/')} 
                    className="btn btn-primary mt-4"
                >
                    Go Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <button onClick={() => navigate(-1)} className="btn btn-ghost mb-6">
                &larr; Back to Popular Toys
            </button>

            <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-xl overflow-hidden">
                
                {/* 🔹 Image Zoom Effect */}
                <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden group">
                    <img 
                        src={toy.pictureURL} 
                        alt={toy.toyName} 
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    />
                </div>

                <div className="lg:w-1/2 p-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{toy.toyName}</h1>
                    <p className="text-xl font-black text-primary mb-6">${toy.price.toFixed(2)}</p>
                    
                    <div className="space-y-3 mb-8">
                        <p className="text-lg text-gray-700">
                            <span className="font-semibold">Rating:</span> ⭐ {toy.rating} 
                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-semibold">Quantity:</span> {toy.availableQuantity} units 
                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-semibold">Description:</span> {toy.description}
                        </p>
                    </div>

                    <form onSubmit={handleTryNowClick}>
                        {showForm && (
                            <div className="space-y-3 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>
                        )}

                        <button type="submit" className="btn btn-success btn-lg w-full">
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
