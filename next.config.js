/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  images: {
    domains: ['placeimg*com', 'api*lorem*space'],
  },
  /* basePath: '/dist', */ 
  // Comenta la linea basePath para evitar el error 404
  compress: true,
  async redirects() {
    return [
      {
        source : '/hola',
        destination: 'https://github.com/RudyErnesto', // IMPORTANTE, el link del destino sin / 
        permanent: true,                          // ya que nos dira que no puede encontrar la ruta
      }
    ]
  }
}
module.exports = nextConfig