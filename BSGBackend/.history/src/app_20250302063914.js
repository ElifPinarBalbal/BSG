const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const userRoutes = require("./routes/userRoutes");
const fileRoutes = require("./routes/fileRoutes");

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes);

module.exports = app;
