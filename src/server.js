import express from "express";
import dotenv from "dotenv";
import UserFormRoutes from './routes/form.route.js';

dotenv.config();

const app = express();

//api routes
app.use('/api/forms', UserFormRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
   console.error(err.stack);

   res.status(500).json({
      error: "Internal Server Error",
      message: "Something went wrong!",
   });
});

app.listen(process.env.PORT, () => {
   console.log(`Server is running on port: ${process.env.PORT} `);
});
