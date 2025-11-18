import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth"; // 🔹 এখানে firebase import
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, logOut, loading } = useContext(AuthContext);
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
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) return null;

  return (
    
    <>
     <Helmet key={location.pathname}>
        <title>👤 | My Profile</title>
      </Helmet>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          My Profile
        </h2>

        <div className="flex flex-col items-center space-y-3">
          <img
            src={user.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"}
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {user.displayName || "No Name Available"}
          </h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>

        <div className="divider mt-4"></div>

        <div className="text-center space-y-1">
          <p className="text-gray-500 text-xs">
            Joined: {user.metadata?.creationTime}
          </p>
        </div>

       
        <div className="flex flex-col justify-center items-center mt-6 gap-3">
          <button
            onClick={() => setShowUpdateFields(!showUpdateFields)}
            className="btn btn-info text-white w-1/2"
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
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Enter new photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered w-full"
              />
              <button
                onClick={handleUpdateProfile}
                className="btn btn-success text-white w-full"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="btn btn-error text-white w-1/2"
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
