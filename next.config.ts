import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'miro.medium.com',
      'm.media-amazon.com',
      'www.eventact.com'
    ],
  },
}

module.exports = nextConfig