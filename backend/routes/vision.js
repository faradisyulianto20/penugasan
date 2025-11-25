import express from "express";
import vision from "@google-cloud/vision";

const router = express.Router();

router.post("/vision/scan", async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: "imageBase64 is required" });
    }

    const credentials = JSON.parse(
      process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
    );

    const client = new vision.ImageAnnotatorClient({
      credentials,
    });

    const [result] = await client.textDetection({
      image: { content: imageBase64 },
    });

    res.json({
      text: result?.fullTextAnnotation?.text || "",
    });
  } catch (error) {
    console.error("Vision Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
