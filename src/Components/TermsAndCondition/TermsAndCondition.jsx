import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen py-16 px-6 md:px-20 transition-colors duration-300 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-200"
      }`}
    >
      <Helmet>
        <title>📄 | Terms and Conditions</title>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 underline text-primary">
          Terms and Conditions
        </h1>

        <p className="text-lg">
          Welcome to <span className="font-bold text-primary">Toy Shop</span>. By using our website, you agree to comply with the following terms and conditions.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">1. Use of Website</h2>
        <p className="text-lg">
          You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">2. Account Responsibilities</h2>
        <p className="text-lg">
          Users are responsible for maintaining the confidentiality of their account information. You agree to notify us immediately of any unauthorized use.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">3. Product Information</h2>
        <p className="text-lg">
          While we strive to provide accurate information about products, we do not guarantee that all details, descriptions, or images are completely accurate.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="text-lg">
          Toy Shop is not liable for any damages arising from the use or inability to use this website, including loss of data, revenue, or products.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="text-lg">
          We reserve the right to update or modify these terms at any time. Changes will be reflected on this page and effective immediately.
        </p>

        <p className="text-lg mt-6">
          By continuing to use <span className="font-bold text-primary">Toy Shop</span>, you acknowledge and accept these terms and conditions.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
