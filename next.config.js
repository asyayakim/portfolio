const isProd = process.env.NODE_ENV === 'production' ? '/portfolio': "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};

export default nextConfig;
