/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
 },
  images: {
    domains: ['avatars.githubusercontent.com', 'img.freepik.com', 'freelancer.com.br', 'media.licdn.com', 'res.cloudinary.com', "utfs.io"],
  },
};

export default nextConfig;
