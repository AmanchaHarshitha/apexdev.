import React, { useState } from 'react';
import './ImageUpload.css'


function CloudinaryImage(props) {

  // const cloudinaryLink = import.meta.env.CLOUDINARY_LINK;
  const cloudinaryLink = "https://api.cloudinary.com/v1_1/djkjt3zgy/image/upload"


  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'waplgf2w');

    try {
      const response = await fetch(`${cloudinaryLink}`, {
        method: 'POST',
        body: formData,
      });
      console.log("IMAGE CHECK")

      const data = await response.json();
      props.setImageUrl(data.secure_url); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='image-upload-container'>
      <input 
      type="file" 
      onChange={(e) => uploadImage(e.target.files[0])}
       />

      {props.imageUrl ? <img src={props.imageUrl} alt="Uploaded" height="180px" width="260px"/> : 
      <div className='image-upload-text'>Upload Image Here</div>
      }
    </div>
  );
}

export default CloudinaryImage;
