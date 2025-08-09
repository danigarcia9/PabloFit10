import type { NextConfig } from "next";

// Comentario (ES): Permite dominios remotos (Cloudinary/YouTube) para imágenes futuras.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
