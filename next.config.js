/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a.storyblok.com"],
  },
  i18n: {
    localeDetection: false,
    locales: ["en", "ja"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
