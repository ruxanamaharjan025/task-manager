import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: "http://127.0.0.1:5500", // frontend origin
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// Task routes
app.use("/tasks", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
