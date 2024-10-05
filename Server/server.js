import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const PORT = 5050;
const app = express();

// Connect to MongoDB database
mongoose.connect("mongodb+srv://parminder2002ldh:LAh2wbQD0LU7KNq4@cluster.hfunm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define MongoDB schemas

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});