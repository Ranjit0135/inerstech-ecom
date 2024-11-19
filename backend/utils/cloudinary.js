// const cloudinary = require("cloudinary");

// // Configuration
// cloudinary.config({
//   cloud_name: "dzr1cg21o",
//   api_key: "388759252825594",
//   api_secret: "myscrete", // Click 'View API Keys' above to copy your API secret
// });

// // Upload Image
// const cloudinaryUploadImg = async (fileToUploads) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       fileToUploads,
//       { resource_type: "auto" }, // Set resource type inside the options
//       (error, result) => {
//         if (error) reject(error); // Handle errors
//         resolve({
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         });
//       }
//     );
//   });
// };
// // Delete Image
// const cloudinaryDeleteImg = async (fileToDelete) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.destroy(fileToDelete, (error, result) => {
//       if (error) reject(error); // Handle errors
//       resolve(result); // Return deletion result
//     });
//   });
// };

// module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
const cloudinary = require("cloudinary").v2;

// Configuration (move secrets to environment variables for security)
cloudinary.config({
  cloud_name: "dzr1cg21o",
  api_key: "388759252825594",
  api_secret: "eVuPF0ql_FYb6snvkxn8-3ogWgk", // Click 'View API Keys' above to copy your API secret
});

// Upload Image
const cloudinaryUploadImg = async (fileToUploads) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileToUploads,
      { resource_type: "auto" }, // Set resource type inside the options
      (error, result) => {
        if (error) reject(error); // Handle errors
        resolve({
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        });
      }
    );
  });
};

// Delete Image
const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(fileToDelete, (error, result) => {
      if (error) reject(error); // Handle errors
      resolve(result); // Return deletion result
    });
  });
};

module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
