// import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript:{
    ignoreBuildErrors:true,
  },
  experimental: {
    optimizeCss: true,
    serverMinification: true,
    serverSourceMaps: false,
    optimizeServerReact: true,
    optimisticClientCache: true,
  },
  optimizeFonts: true,
};

export default nextConfig;
