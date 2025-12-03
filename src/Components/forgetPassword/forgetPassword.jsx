import React, { useState, useContext } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Components/firebase/firebase.config";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { ThemeContext } from "../../Components/ThemeContext/ThemeContext";

const ForgetPassword = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          `A password reset link has been sent to ${email}. Please check your inbox or spam folder.`
        );
        setEmail("");
      })
      .catch((error) => {
        toast.error(`Failed to send reset email: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const cardBg = theme === "dark" ? "bg-gray-800 text-white shadow-gray-700" : "bg-base-100 text-gray-700 shadow-2xl";
  const pageBg = theme === "dark" ? "bg-gray-900" : "bg-base-200";
  const inputBg = theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-yellow-400" : "bg-white text-gray-700 border-gray-300 focus:ring-primary";
  const linkColor = theme === "dark" ? "text-yellow-300" : "text-blue-600";
  const btnStyle = theme === "dark" ? "btn btn-neutral bg-yellow-400 text-black hover:bg-yellow-500 w-full" : "btn btn-neutral w-full";

  return (
    <div className={`flex justify-center items-center min-h-screen ${pageBg} transition-colors duration-500`}>
      <div className={`card w-full max-w-sm shadow-2xl p-6 ${cardBg} transition-colors duration-500`}>
        <h2 className={`text-center text-2xl font-bold mb-4 ${theme === "dark" ? "text-yellow-400" : "text-gray-700"}`}>
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input input-bordered w-full ${inputBg} transition-colors duration-500`}
          />

          <button
            type="submit"
            disabled={loading}
            className={`${btnStyle} ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className={`text-center mt-4 text-sm ${theme === "dark" ? "text-yellow-300" : ""}`}>
          Remembered your password?{" "}
          <Link to="/login" className={`text-blue-500 font-semibold hover:underline`}>
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
