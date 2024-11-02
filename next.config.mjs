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
               protocol:'https',
               hostname: 'i.postimg.cc',
               port: '',
               pathname:'/**'
           },
           {
               protocol:'https',
               hostname: 'fakestoreapi.com',
               port:'',
               pathname:'/**'
           }

       ]
    }
};


export default nextConfig;
