
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
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
  assetPrefix: isProd ? '/portfolio' : '',
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
};

export default nextConfig;
