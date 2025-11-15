import { execSync } from 'child_process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_COMMIT_HASH: (() => {
      try {
        return execSync('git rev-parse --short HEAD').toString().trim();
      } catch (error) {
        return 'unknown';
      }
    })(),
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000, 
      aggregateTimeout: 300,
    };
    return config;
  },
}

export default nextConfig;
