import { visionClient } from "@/lib/visionClient";

export const visionService = {
  scan: (payload) => visionClient.post("/vision/scan", payload),
};
