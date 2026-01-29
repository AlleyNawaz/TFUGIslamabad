/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                pathname: '/u/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/vi/**',
            }
        ],
    },
    async redirects() {
        return [
            {
                source: "/videos",
                destination: "/sessions",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
