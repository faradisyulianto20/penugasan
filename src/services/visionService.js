import { visionClient } from "@/lib/visionClient";

export const visionService = {
  scanBook: (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return visionClient.post("/extract-book-details", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
