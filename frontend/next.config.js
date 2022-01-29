/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET_API_KEY: process.env.SECRET_API_KEY,
    SECRET_AUTH_DOMAIN: process.env.SECRET_AUTH_DOMAIN,
    SECRET_PROJECT_ID: process.env.SECRET_PROJECT_ID,
    SECRET_STORAGE_BUCKET: process.env.SECRET_STORAGE_BUCKET,
    SECRET_MESSAGING_SENDER_ID: process.env.SECRET_MESSAGING_SENDER_ID,
    SECRET_APP_ID: process.env.SECRET_APP_ID,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY
  },
  images: {
    domains: ['i.imgur.com'],
    loader: 'akamai',
    path: ''
  },
  assetPrefix: './'
}

module.exports = nextConfig
