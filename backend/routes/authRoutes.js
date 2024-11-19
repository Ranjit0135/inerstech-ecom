const express = require("express");
const {
  createUser,
  loginUserCntrl,
  getAllUsers,
  getSingleUsers,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getwishlist,
  userCart,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/register", createUser);

router.post("/login", loginUserCntrl);

router.post("/admin-login", loginAdmin);

router.post("/cart", authMiddleware, userCart);

router.post("/forgot-password-token", forgotPasswordToken);

router.get("/all-users", getAllUsers);

router.get("/refresh", handleRefreshToken);

router.put("/password", authMiddleware, updatePassword);

router.get("/logout", logout);

router.get("/wishlist", authMiddleware, getwishlist);

router.get("/:id", authMiddleware, getSingleUsers);

router.delete("/:id", deleteUser);

router.put("/edit-user", authMiddleware, updateUser);
router.put("/reset-password/:token", resetPassword);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
