import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoute from "./routes/ai.js";

dotenv.config();

console.log("KEY:", process.env.GEMINI_API_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoute);

app.listen(5000, () => {
  console.log("AI Server running on port 5000");
});