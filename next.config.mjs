/** @type {import('next').NextConfig} */

import { config } from "dotenv";

config();

const nextConfig = {
  swcMinify: false,
  experimental: {
    swcMinify: false,
    swcLoader: false
  },
  env: {
    DASHBOARD_BASE_URL: process.env.DASHBOARD_BASE_URL
  }
};

export default nextConfig;