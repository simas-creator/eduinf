import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  unstable_allowDynamic: [
    '/lib/utilities.js', 
    '**/node_modules/function-bind/**',
    '@lib/mongodb',
    'app/api/login/route.ts',
  ],
};

export default nextConfig;
