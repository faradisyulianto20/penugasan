import { localClient } from "@/lib/localClient";

export const visionService = {
  scanBook: (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return localClient.post("/extract-book-details", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
