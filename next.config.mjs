/** @type {import('next').NextConfig} */
 const nextConfig = {
   webpack: (config, { isServer }) => {
     config.watchOptions = {
       poll: 1000, 
       aggregateTimeout: 300,
     };

     return config;
   },
 }

export default nextConfig;
