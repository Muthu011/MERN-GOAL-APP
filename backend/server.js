const express = require("express");
const { errorHandler } = require("./middlewares/ErrorMiddleWare");
const dotEnv = require("dotenv").config();
const port = process.env.port;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalRoutes"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server Started on port ${port}`));
