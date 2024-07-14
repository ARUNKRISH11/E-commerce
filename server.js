import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';

// Config dotenv
dotenv.config();

// Database Config
connectDB()

// Rest Object
const app = express();

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

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