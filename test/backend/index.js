const express = require('express');
const app = express();
const connectDB = require("./db");

// Connect to MongoDB
connectDB();

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use(express.json());
app.use('/api', require("./Routes/CreateUser")); // Assuming CreateUser.js is in the Routes directory

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
