import React, { useContext } from "react";
import { ThemeContext } from "../../Components/ThemeContext/ThemeContext";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen py-16 px-6 md:px-20 transition-colors duration-300 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-200"
      }`}
    >
      <Helmet>
        <title>🔒 | Privacy Policy</title>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 underline text-primary">
          Privacy Policy
        </h1>

        <p className="text-lg">
          At <span className="font-bold text-primary">Toy Shop</span>, your privacy is important to us. This privacy policy outlines how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-lg">
          We may collect personal information such as your name, email address, and profile information when you create an account or interact with our website.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">2. Use of Information</h2>
        <p className="text-lg">
          Your information is used to provide a personalized experience, improve our services, and communicate important updates or offers. We do not sell your information to third parties.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">3. Cookies</h2>
        <p className="text-lg">
          We use cookies to enhance your browsing experience and analyze site traffic. Cookies do not store sensitive personal information.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">4. Data Protection</h2>
        <p className="text-lg">
          We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">5. Third-Party Services</h2>
        <p className="text-lg">
          Our website may include links to third-party services. We are not responsible for their privacy practices. Please review their policies before using their services.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">6. Changes to Policy</h2>
        <p className="text-lg">
          We reserve the right to modify this privacy policy at any time. Updates will be posted on this page, and continued use of our website constitutes acceptance of the updated policy.
        </p>

        <p className="text-lg mt-6">
          By using <span className="font-bold text-primary">Toy Shop</span>, you acknowledge and agree to this Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
