import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import aiRoute from "./routes/ai.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoute);

app.get("/", (req, res) => {
  res.send("Campus Odyssey AI Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AI Server running on port ${PORT}`);
});