import express from "express";
import cors from "cors";
import vision from "@google-cloud/vision";
import dotenv from "dotenv";

// Load env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// ⬇⬇⬇ TARUH DI SINI ⬇⬇⬇
// Tidak perlu keyFilename jika GOOGLE_APPLICATION_CREDENTIALS sudah diset
const client = new vision.ImageAnnotatorClient();
// ⬆⬆⬆ TARUH DI SINI ⬆⬆⬆

app.post("/api/v1/vision/scan", async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    const [result] = await client.textDetection({
      image: { content: imageBase64 },
    });

    const text = result.fullTextAnnotation?.text || "";
    res.json({ text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Vision API error" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
