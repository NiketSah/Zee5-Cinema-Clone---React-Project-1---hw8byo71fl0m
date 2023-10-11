// UserProfile.js
import React, { useState, useEffect } from 'react';
import { updateUserProfile, updateProfileImage, changePassword } from '../api/user'; // Import your API functions

function UserProfile({ userToken, projectId }) {
  const [userData, setUserData] = useState({
    name: '',
    email: '', // You can include other user information here
  });
  const [newPassword, setNewPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/user/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'projectID': hw8byo71fl0m,
          },
        });
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          // Handle error when fetching user data
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [userToken, hw8byo71fl0m]);

  const handleProfileImageChange = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(imageFile);
  };

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('address', userData.address); // Add other fields as needed

    updateProfileImage(formData, profileImage, userToken, hw8byo71fl0m)
      .then(() => {
        // Handle success, maybe show a success message
      })
      .catch((error) => {
        console.error('Error updating profile image: ', error);
        // Handle the error, show an error message, etc.
      });

    updateUserProfile(formData, userToken, hw8byo71fl0m)
      .then(() => {
        // Handle success, maybe show a success message
      })
      .catch((error) => {
        console.error('Error updating user profile: ', error);
        // Handle the error, show an error message, etc.
      });
  };

  const handleChangePassword = () => {
    changePassword(newPassword, userToken, hw8byo71fl0m)
      .then(() => {
        // Handle success, maybe show a success message
      })
      .catch((error) => {
        console.error('Error changing password: ', error);
        // Handle the error, show an error message, etc.
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Change Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button onClick={handleChangePassword}>Change Password</button>
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleProfileImageChange} />
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    </div>
  );
}

export default UserProfile;

