const express = require("express");
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const categoryRouter = require("./routes/productCategoryRoute");
const brandRouter = require("./routes/brandRoutes");
// const uploadRouter = require("./routes/uploadRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
// const { default: router } = require("./routes/uploadRoute");
// const path = require("path");
const app = express();

require("dotenv").config();
const PORTS = process.env.PORTES || 5000;
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json()); // Use built-in middleware
// app.use(express.urlencoded({ extended: false })); // Use built-in middleware
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // Use built-
app.use(cookieParser());

// app.use("/images", express.static("uploads"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/user", authRouter);

app.use("/api/product", productRouter);

app.use("/api/category", categoryRouter);

app.use("/api/brand", brandRouter);

// app.use("/api/upload", router);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// if (process.env.NODE_ENV === "production") {
//   const __dirname = path.resolve();
//   app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//   app.use(express.static(path.join(__dirname, "/client/dist")));
//   app.use("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
//   );
// } else {
//   app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//   app.get("/", (req, res) => {
//     res.send("Api is running...");
//   });
// }

app.use(notFound);

app.use(errorHandler);

app.listen(PORTS, () => {
  console.log("Server running on port " + PORTS);
});
