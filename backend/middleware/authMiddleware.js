const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// const authMiddleware = asyncHandler(async (req, res, next) => {
//   console.log("Auth Middleware Triggered"); // Debug log
//   console.log(req.headers, "Request Headers"); // Log headers
//   let token;
//   if (req?.headers?.authorization?.startsWith("Bearer")) {
//     token = req?.headers?.authorization.split(" ")[1];
//     console.log(req.headers, "Request Headers");

//     console.log(token, "Extracted Token");
//     if (token) {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//       const user = await User.findById(decoded?._id);

//       req.user = user;
//       next();
//     }
//     console.log(decoded, "Extracted decoded");
//   } else {
//     throw new Error("there was no token attached to header");
//   }
// });

const authMiddleware = asyncHandler(async (req, res, next) => {
  console.log("Auth Middleware Triggered");
  console.log(req.headers, "Request Headers");

  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req?.headers?.authorization.split(" ")[1];
    console.log(token, "Extracted Token");

    try {
      if (token) {
        // Decode the token without verification to debug issues
        const decoded = jwt.decode(token);
        console.log(decoded, "Decoded Token Without Verification");

        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(verified, "Verified Token");

        const user = await User.findById(verified?._id);
        req.user = user;

        next();
      }
    } catch (error) {
      console.error("Token Verification Error:", error.message);

      // Handle specific error types
      if (error.name === "JsonWebTokenError") {
        throw new Error("Invalid token");
      } else if (error.name === "TokenExpiredError") {
        throw new Error("Token expired. Please log in again.");
      } else {
        throw new Error("Token verification failed");
      }
    }
  } else {
    throw new Error("No token attached to header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });

  if (adminUser.role !== "admin") {
    throw new Error("You are not admin");
  } else {
    next();
  }
});

module.exports = { authMiddleware, isAdmin };
