import dotenv from "dotenv";
dotenv.config();

import express from "express";
console.log("🔥 USING MOCK AI ROUTE");
const router = express.Router();

console.log("Mock AI Backend Ready");

router.post("/chat", async (req, res) => {
  try {
    const { message, student } = req.body;

    const department = student?.department || "Student";
    const year = student?.year || "1st Year";

    const q = message.toLowerCase();
    let reply = "";

    if (q.includes("library")) {
      reply =
        "📚 The Central Library is open for studying, book borrowing, and digital resources. Complete this quest to earn your Library Explorer badge!";
    } 
    else if (q.includes("canteen") || q.includes("food")) {
      reply =
        "🍽️ Visit the Main Canteen to discover meal timings, snacks, and popular student hangout spots.";
    } 
    else if (q.includes("lab")) {
      reply =
        `💻 As a ${year} ${department} student, explore your department laboratories and meet the faculty in charge.`;
    } 
    else if (q.includes("class") || q.includes("classroom")) {
      reply =
        "🏫 Use the interactive campus map to locate your classroom. You can search by room number or block.";
    } 
    else if (q.includes("club")) {
      reply =
        "🎯 Explore coding clubs, cultural clubs, NSS, sports teams, and technical societies to unlock the Club Explorer badge.";
    } 
    else if (q.includes("office") || q.includes("principal")) {
      reply =
        "🏢 Visit the Administrative Office for certificates, fee-related queries, and student services.";
    } 
    else if (q.includes("hello") || q.includes("hi")) {
      reply =
        `👋 Hello ${department} Explorer! Welcome to Campus Odyssey. Ask me anything about your campus, departments, events, classrooms, or facilities.`;
    } 
    else {
      reply = `🧭 Hello ${department} Explorer!

I understood your question:

"${message}"

🎯 Recommended Quest:
• Visit your Department Block
• Explore the Central Library
• Locate the Main Office
• Visit the Main Canteen
• Check today's Events
• Earn your Explorer Badge

Happy Exploring! 🚀`;
    }

    res.json({
      success: true,
      reply,
      source: "Campus Odyssey Mock AI"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Unable to generate response."
    });
  }
});

export default router;