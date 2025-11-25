import { useMutation } from "@tanstack/react-query";
import { visionService } from "@/services/visionService";

export function useScanCover() {
  return useMutation({
    mutationFn: async (file) => {
      const base64 = await fileToBase64(file);

      // Hapus prefix "data:image/png;base64,"
      const pureBase64 = base64.replace(/^data:image\/\w+;base64,/, "");

      const res = await visionService.scan({ imageBase64: pureBase64 });

      return res.data;
    },
  });
}

// helper
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Buang prefix "data:image/...;base64,"
      const rawBase64 = reader.result.split(",")[1];
      resolve(rawBase64);
    };

    reader.onerror = (err) => reject(err);

    reader.readAsDataURL(file);
  });
}
