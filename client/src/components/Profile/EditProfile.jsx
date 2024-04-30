import React, { useState } from 'react';
import axios from 'axios'
import { useParams } from "react-router-dom";


function EditProfile() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [userData, setUserData] = useState({
    avatar: '',
    username: '',
    email: '',
    fullname: '',
    bio: '',
    githubLink: '',
    linkedLink: '',
    instagramLink: '',
    twitterLink: '',
  });

  const {userId} = useParams()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(domain)

    await axios.patch(`${domain}/profile/update/${userId}`, userData)
    .then(response => {
      console.log("Promise: ", response.data); 
    })
    .catch(error => {
        console.error("Promise: " ,error); 
    });


  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Picture:
          <input type="text" name="avatar" value={userData.avatar} onChange={handleChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Full Name:
          <input type="text" name="fullname" value={userData.fullname} onChange={handleChange} />
        </label>
        <br />
        <label>
          Bio:
          <textarea name="bio" value={userData.bio} onChange={handleChange} />
        </label>
        <br />
        {/* Add inputs for other fields */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
