const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middlewares/ErrorMiddleWare");
const connectDB = require("./config/db");
const dotEnv = require("dotenv").config();
const port = process.env.port;

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalRoutes"));
app.use("/api/user", require("./routers/userRoutes"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server Started on port ${port}`));
