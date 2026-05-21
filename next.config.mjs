/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // 🎯 এখানে রিডাইরেক্ট লজিকটি যোগ করা হয়েছে
  async redirects() {
    return [
      {
        source: '/doctors',
        destination: '/404', // কেও /doctors এ আসলে তাকে ৪MD পেজে পাঠিয়ে দেবে
        permanent: false,    // এটি সাময়িক রিডাইরেক্ট (Status 307)
      },
    ];
  },
};

export default nextConfig;