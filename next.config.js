/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// const nextConfig = {
//   experimental: {
//     forceSwcTransforms: true,
//   },
// }

// module.exports = nextConfig


// const swcCompiler = require('@swc/core');
// const swcLoader = require('@swc/core/loader');

// module.exports = {
//   webpack: (config, { dev, isServer }) => {
//     if (!dev && !isServer) {
//       config.module.rules.push({
//         test: /\.(js|mjs|jsx|ts|tsx)$/,
//         use: [
//           {
//             loader: swcLoader,
//             options: {
//               sync: true,
//               jsc: {
//                 parser: {
//                   syntax: 'typescript',
//                   jsx: true,
//                 },
//               },
//               module: {
//                 type: 'commonjs',
//               },
//             },
//           },
//         ],
//       });
//     }

//     return config;
//   },
// };