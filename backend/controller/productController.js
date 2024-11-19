const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const validateMongodbId = require("../utils/validateMongodbId");
const slugify = require("slugify");
const { cloudinaryUploadImg } = require("../utils/cloudinary");
const fs = require("fs");

// // create product
// const createProduct = asyncHandler(async (req, res) => {
//   try {
//     if (req.body.title) {
//       req.body.slug = slugify(req.body.title);
//     }
//     const newProduct = await Product.create(req.body);

//     res.json(newProduct);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// Create a new product with image upload
// const createProduct = asyncHandler(async (req, res) => {
//   try {
//     // let image_filename = `${req.file.filename}`;
//     // const { name, description, price, title } = req.fields;
//     // const { images } = req.files;

//     // Generate slug if title is provided
//     // const slug = title ? slugify(title) : "";

//     // Create new product with the provided data and image path if file is uploaded
//     const newProduct = new Product({
//       title: req.body.title,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       brand: req.body.brand,
//       quantity: req.body.quantity,
//       // images: image_filename,
//       // color: req.body.color,
//       // slug: slug,
//     });

//     // if (images) {
//     //   newProduct.images.data = fs.readFileSync(images.path);
//     //   newProduct.images.contentType = images.type;
//     // }
//     await newProduct.save();

//     // Send a success response with the newly created product
//     res.status(201).json({
//       message: "Product created successfully",
//       product: newProduct,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "An error occurred whsddile creating the product",
//     });
//   }
// });

const createProduct = asyncHandler(async (req, res) => {
  try {
    const { title, description, price, category, brand, quantity } = req.body;
    let image_filename = `${req.file.filename}`;

    // const newProduct = new Product({
    //   title: req.body.title,
    //   description: req.body.description,
    //   price: req.body.price,
    //   category: req.body.category,
    //   brand: req.body.brand,
    //   quantity: req.body.quantity,
    //   images: image_filename, // store image path in the database
    // });

    const newProduct = new Product({
      title,
      description,
      price: Number(price),
      category,
      brand,
      quantity: Number(quantity),
      images: image_filename,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while creating the product",
      details: error.message, // Include error details in the response
    });
  }
});

// //Get all products
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exists");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// //get single product
const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongodbId(id); // Validate ID before querying
    const singleproduct = await Product.findById(id);

    if (!singleproduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(singleproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id); // Make sure the id is a valid MongoDB ObjectID
  try {
    const product = await Product.findOneAndDelete({ _id: id }); // Find and delete by _id

    if (product) {
      res.json({
        message: "Product deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "No product found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

// add to wishlist
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user?.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// rating
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(finalproduct);
  } catch (error) {
    throw new Error(error);
  }
});

// // upload images
const uploadImages = asyncHandler(async (req, res) => {
  console.log(req.files);
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      console.log(newpath);
      urls.push(newpath);
      setTimeout(() => {
        fs.unlinkSync(path);
      }, 5000);
    }
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createProduct,
  getSingleProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
  addToWishlist,
  rating,
  uploadImages,
};
