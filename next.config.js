/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['skypalss.online', 'www.skypalss.online'],
    // Production ortamında kullanılacak domain'leri ekleyin
    // Örnek: domains: ['assets.example.com']
  },
}

module.exports = nextConfig
