/** @type {import('next').NextConfig} */
 const nextConfig = {
   webpack: (config, { isServer }) => {
     // Aggiungi le opzioni di watch
     config.watchOptions = {
       poll: 1000, // Intervallo di polling in millisecondi
       aggregateTimeout: 300, // Timeout di aggregazione
     };

     return config;
   },
 }

export default nextConfig;
