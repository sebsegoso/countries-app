/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
        ],
    },
    sassOptions: {
        includePaths: ['./styles'],
        prependData: `@import "styles/utils/variables.scss";`
    }
}

module.exports = nextConfig
