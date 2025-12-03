import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const sectionBg = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-700";
  const cardBg = theme === "dark" ? "bg-gray-800 border border-gray-700 text-white" : "bg-white text-gray-700";

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section className={`${sectionBg} py-16 px-6 md:px-20 transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 underline ${theme === 'dark' ? 'text-yellow-400' : 'text-primary'}`}>
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className={theme === 'dark' ? 'text-yellow-400 text-2xl' : 'text-primary text-2xl'} />
              <p className={textColor}>123 Toy Street, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className={theme === 'dark' ? 'text-yellow-400 text-2xl' : 'text-primary text-2xl'} />
              <p className={textColor}>toyshop@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className={theme === 'dark' ? 'text-yellow-400 text-2xl' : 'text-primary text-2xl'} />
              <p className={textColor}>+880 1234 567890</p>
            </div>

            <p className={`${textColor} mt-4`}>
              Feel free to reach out to us for inquiries, support, or feedback. We’ll respond as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className={`md:w-1/2 p-8 rounded-xl shadow-lg transition-colors duration-500 ${cardBg}`}>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className={`block mb-1 font-semibold ${textColor}`}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 focus:ring-yellow-400 bg-gray-700 text-white' : 'border-gray-300 focus:ring-primary bg-white text-gray-700'}`}
                />
              </div>

              <div>
                <label className={`block mb-1 font-semibold ${textColor}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 focus:ring-yellow-400 bg-gray-700 text-white' : 'border-gray-300 focus:ring-primary bg-white text-gray-700'}`}
                />
              </div>

              <div>
                <label className={`block mb-1 font-semibold ${textColor}`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-600 focus:ring-yellow-400 bg-gray-700 text-white' : 'border-gray-300 focus:ring-primary bg-white text-gray-700'}`}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full font-bold py-3 rounded-md transition duration-300 ${theme === 'dark' ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-primary text-white hover:bg-primary-dark'}`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
