import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);

  // Background gradient based on theme
  const sectionBg = theme === "dark"
    ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    : "bg-gradient-to-r from-indigo-50 to-pink-50 text-gray-700";

  const cardBg = theme === "dark" ? "bg-gray-900 text-white border border-gray-700" : "bg-white text-gray-700";

  const headingColor = theme === "dark" ? "text-yellow-400" : "text-primary";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section className={`${sectionBg} min-h-screen py-16 px-6 md:px-20 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className={`text-5xl md:text-6xl font-extrabold text-center mb-12 underline ${headingColor}`}>
          About Us
        </h1>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={logo} 
              alt="Toy Shop Team"
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <p className={`text-lg ${textColor}`}>
              Welcome to <span className="font-bold text-primary">Toy Shop</span> – an interactive, fun, and dynamic toy marketplace for kids and parents alike. We are passionate about bringing joy through high-quality toys, games, and educational products.
            </p>
            <p className={`text-lg ${textColor}`}>
              Our mission is to create a secure and enjoyable shopping experience. Users can browse toys, view detailed information, try new features, and manage profiles using Firebase authentication.
            </p>
            <p className={`text-lg ${textColor}`}>
              Our dedicated team ensures that every toy listed promotes creativity, fun, and learning.
            </p>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ${cardBg}`}>
            <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>Secure Auth</h3>
            <p className={textColor}>
              Login, Register, Google Sign-In, and profile management using Firebase.
            </p>
          </div>
          <div className={`rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ${cardBg}`}>
            <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>Kids Play Zone</h3>
            <p className={textColor}>
              A fun mini-game section to keep kids entertained while learning.
            </p>
          </div>
          <div className={`rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ${cardBg}`}>
            <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>Responsive Design</h3>
            <p className={textColor}>
              Fully responsive and visually appealing layout with TailwindCSS and DaisyUI.
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;
