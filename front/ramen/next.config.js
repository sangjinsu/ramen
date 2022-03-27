/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// proxy 설정
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://j6c104.p.ssafy.io:3000/v1/:path*",
      },
    ];
  },
};
