/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This will make sure Next.js exports a static site.
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages doesn't support Next.js image optimization)
  },
}

export default nextConfig
