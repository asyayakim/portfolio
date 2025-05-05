import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  images: {
    domains: [
      "pixeljoint.com",
      "lospec.com",
      "opengameart.org",
      "artstation.com",
      "cdn.pixabay.com",
      "i.redd.it",
      "pinterest.com",
      "i.pinimg.com",
      "media.discordapp.net",
      "cdn.discordapp.com",
      "i.pinimg.com",
    ],
  },
  /* config options here */
};

export default nextConfig;
