/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Note: remotePatterns is the recommended way to configure external domains
    // for Next.js 13 and later. If you are on an older version, you might
    // need to use 'domains' instead.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gpu.id", // <-- This is the hostname you need to add
        port: "",
        pathname: "/data-gpu/images/img-book/**", // You can optionally restrict the path
      },
      // You can add more remote patterns for other external hosts here
    ],

    // If you are using an older Next.js version (e.g., < 13.0):
    // domains: ['gpu.id'],
  },
};

export default nextConfig;
