import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../Components/ThemeContext/ThemeContext";

const MyProfile = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    document.title = "👤 | My Profile";
  }, [location.pathname]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Logout failed!");
      });
  };

  const handleUpdateProfile = async () => {
    if (!name && !photo) {
      toast.error("Please enter at least one field to update.");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name || user.displayName,
        photoURL: photo || user.photoURL,
      });

      toast.success("Profile updated successfully!");
      setShowUpdateFields(false);
      setName("");
      setPhoto("");

      user.displayName = name || user.displayName;
      user.photoURL = photo || user.photoURL;
    } catch (err) {
      console.error(err);
      toast.error("Profile update failed!");
    }
  };

  if (loading) {
    return (
      <div className={`flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) return null;

  const pageBg = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const cardBg = theme === "dark" ? "bg-gray-800 text-white shadow-gray-700" : "bg-white text-gray-700 shadow-2xl";
  const inputBg = theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-yellow-400" : "bg-white border-gray-300 focus:ring-primary";
  const btnInfo = theme === "dark" ? "btn btn-info bg-yellow-400 text-black hover:bg-yellow-500 w-1/2" : "btn btn-info text-white w-1/2";
  const btnSuccess = theme === "dark" ? "btn btn-success bg-yellow-500 text-black hover:bg-yellow-600 w-full" : "btn btn-success text-white w-full";
  const btnError = theme === "dark" ? "btn btn-error bg-red-600 text-white hover:bg-red-700 w-1/2" : "btn btn-error text-white w-1/2";

  return (
    <>
      <Helmet key={location.pathname}>
        <title>👤 | My Profile</title>
      </Helmet>

      <div className={`flex justify-center items-center min-h-screen px-4 ${pageBg} transition-colors duration-500`}>
        <div className={`card w-full max-w-md rounded-2xl p-6 ${cardBg} transition-colors duration-500`}>
          <h2 className={`text-2xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-700'}`}>
            My Profile
          </h2>

          <div className="flex flex-col items-center space-y-3">
            <img
              src={user.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"}
              alt="User"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 shadow-md"
            />
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-yellow-300' : 'text-gray-800'}`}>
              {user.displayName || "No Name Available"}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{user.email}</p>
          </div>

          <div className="divider mt-4"></div>

          <div className="text-center space-y-1">
            <p className={theme === 'dark' ? 'text-gray-400 text-xs' : 'text-gray-500 text-xs'}>
              Joined: {user.metadata?.creationTime}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mt-6 gap-3">
            <button
              onClick={() => setShowUpdateFields(!showUpdateFields)}
              className={btnInfo}
            >
              {showUpdateFields ? "Cancel Update" : "Update Profile"}
            </button>

            {showUpdateFields && (
              <div className="w-full px-4 mt-3 space-y-2">
                <input
                  type="text"
                  placeholder="Enter new name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`input input-bordered w-full ${inputBg} transition-colors duration-500`}
                />
                <input
                  type="text"
                  placeholder="Enter new photo URL"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className={`input input-bordered w-full ${inputBg} transition-colors duration-500`}
                />
                <button
                  onClick={handleUpdateProfile}
                  className={btnSuccess}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleLogout}
              className={btnError}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
