/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'img.freepik.com', 'freelancer.com.br', 'media.licdn.com'],
  },
};

export default nextConfig;
