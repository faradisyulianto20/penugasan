import { NextResponse } from "next/server";
import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient({
  keyFilename: "./src/config/book-scan-479020-6581f2b73403.json",
});

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const [result] = await client.textDetection(buffer);
  const detections = result.textAnnotations;

  return NextResponse.json({
    text: detections[0]?.description || "",
  });
}
