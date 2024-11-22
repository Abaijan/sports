/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/main',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '195.133.73.214',
                port: '1337',
                pathname: '/media/**',
            },
        ],
    },
};

export default nextConfig;
