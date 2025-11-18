

import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee'; 
const ImageMarquee = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/imgMarquee.json'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error("Error fetching marquee images:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-8">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-gray-600 mt-2">Loading creative ideas...</p>
            </div>
        );
    }

    if (images.length === 0) {
        return <p className="text-center py-8 text-red-500 font-bold">No images to display in marquee.</p>;
    }

    return (
        <section className="py-8 bg-gradient-to-r from-purple-100 to-blue-100">
            <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                Endless Fun & Inspiration
            </h2>
            <Marquee 
                gradient={true}
                gradientColor={[243, 244, 246]} 
                speed={50} 
                pauseOnHover={true}
            >
                {images.map(image => (
                    <div 
                        key={image.id} 
                        className="mx-4 p-2 bg-white rounded-lg shadow-md flex items-center justify-center"
                        style={{ minWidth: '200px', height: '150px' }} 
                    >
                        <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="h-full w-full object-cover rounded" 
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/200x150?text=Error";
                            }}
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default ImageMarquee;