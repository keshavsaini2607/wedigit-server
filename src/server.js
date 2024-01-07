dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import UserFormRoutes from "./routes/form.route.js";
import { connectDB } from "./db/index.js";

const allowedOrigins = ['http://localhost:5173', 'https://example.com'];

const app = express();
app.use(express.json());

app.use(cors({
  origin: allowedOrigins,
}));
//Database connection
connectDB();

//api routes
app.use("/api/forms", UserFormRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
   console.error(err.stack);

   res.status(500).json({
      error: err?.message,
      message: "Something went wrong!",
   });
});

app.listen(process.env.PORT, () => {
   console.log(`Server is running on port: ${process.env.PORT} `);
});
