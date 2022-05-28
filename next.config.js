/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },

};
module.exports = nextConfig;
