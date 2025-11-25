"use client";

import { useScanCover } from "@/hooks/useScanCover";

export default function ScanCover() {
  const scanCover = useScanCover();

  console.log(scanCover?.data);

  return (
    <div className="p-6 space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) scanCover.mutate(file);
        }}
        className="border p-2 rounded"
      />

      {scanCover.isPending && <p>Scanning...</p>}

      {scanCover.data?.text && <p>Hasil OCR: {scanCover.data.text}</p>}
    </div>
  );
}
