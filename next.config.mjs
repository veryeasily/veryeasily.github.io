/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This will make sure Next.js exports a static site.
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages doesn't support Next.js image optimization)
  },
  basePath: "/itsliver", // Use this basePath if your site will be hosted under /itsliver
};

export default nextConfig;
