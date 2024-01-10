/**
 * Title: FlipZone
 * Description: FlipZone app (Server)
 * Author: IntelliFill Tech Private Limited
 */

// Dependencies
const express = require('express');
const db = require("./src/db/db");
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoutes');
const cartRouter = require('./src/routes/cartRoutes');
const { verifyAccessToken } = require('./src/config/tokenGenerator');
const { notFoundMiddleware, defaultErrorHandler } = require('./src/middlewares/error');
const cookieParser = require('cookie-parser');

// Environment variables
const PORT = process.env.PORT || 3001;
const CONNECTION_STRING = "mongodb+srv://flipzone:Admin@cluster0.ag5pidz.mongodb.net/?retryWrites=true&w=majority";

// Connect the database
db.connect(CONNECTION_STRING)
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err.message);
  });

// configure
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user auth routes
app.use("/api/v1/u/", userRouter);

// product routes
app.use("/api/v1/p",productRouter);

// cart routes
app.use("/api/v1/c",cartRouter);

// Protected route
app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello Im a protected route');
})

// // 404 Not Found middleware
app.use(notFoundMiddleware);

// Error Handling Middleware
app.use(defaultErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

