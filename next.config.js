
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  images: {
    unoptimized: true,
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
  assetPrefix: isProd ? '/portfolio' : '',
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
};

export default nextConfig;
