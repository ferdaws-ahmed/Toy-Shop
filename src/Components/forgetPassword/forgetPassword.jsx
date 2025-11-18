import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Components/firebase/firebase.config";
import { toast } from "react-toastify";
import { Link } from "react-router";

const ForgetPassword = () => {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-700">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className={`btn btn-neutral w-full ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
