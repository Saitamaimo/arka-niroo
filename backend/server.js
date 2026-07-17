import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.send("ARKA NIROO AI Server is Running 🚀");
});

app.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    const response = await client.chat.completions.create({

      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content:
            "You are ARKA NIROO AI Assistant. Answer in Persian unless the user asks otherwise. Focus on electrical engineering, power systems, smart grid and company services."
        },
        {
          role: "user",
          content: message
        }
      ]

    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      reply: "خطا در ارتباط با هوش مصنوعی."
    });

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
