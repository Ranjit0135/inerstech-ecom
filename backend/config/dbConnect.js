const { default: mongoose } = require("mongoose");
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("database connection successful");
  } catch (error) {
    console.log("database error");
  }
};

module.exports = dbConnect;
