import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});


router.post("/chat", async (req, res) => {

  try {

    const { message, student } = req.body;

    const prompt = `
You are Odyssey AI, a friendly senior assistant
for Saranathan College of Engineering.

Student details:
${JSON.stringify(student)}

Question:
${message}

Give helpful campus guidance.
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    res.json({
      reply
    });

  } catch(error) {

    console.log(error);

    res.status(500).json({
      error:error.message
    });

  }

});


export default router;