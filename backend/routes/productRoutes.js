const express = require("express");
const {
  createProduct,
  getSingleProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
  addToWishlist,
  rating,
  // uploadImages,
} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middleware/authMiddleware");
// const upload = require("../controller/upload");
// import uploadSingleImage from "../controller/upload"; // Importing upload logic
// const uploadSingleImages = require("../controller/upload");
// const { uploadPhoto, productImgResize } = require("../middleware/uploadImage");
const multer = require("multer");
const router = express.Router();

// router.post("/create-product", createProduct);

// Route for creating a product with image upload
// router.post("/create-product", upload.single("image"), createProduct);

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/create-product", upload.single("images"), createProduct);

// router.put(
//   "/upload/:id",
//   uploadPhoto.array("images", 1),
//   productImgResize,
//   uploadImages
// );

router.get("/:id", getSingleProduct);

router.put("/wishlist", authMiddleware, addToWishlist);

router.put("/rating", authMiddleware, rating);

router.get("/", getAllProduct);

router.put("/:id", authMiddleware, isAdmin, updateProduct);

router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
