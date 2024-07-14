import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

// Config dotenv
dotenv.config();

// Rest Object
const app = express();

// Rest API
app.get("/", (req, res) => {
  res.send('<h1>Welcome to Ecommerce</h1>');
});

// Port
const PORT = process.env.PORT || 8000;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`.bgCyan.white);
});