/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Kuvat optimoidaan moderneihin formaatteihin (AVIF/WebP).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
