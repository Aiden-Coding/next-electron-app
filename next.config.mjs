/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    swcMinify: true,  // 显式启用 SWC 压缩
    compiler: {
        styledComponents: true,  // 示例：启用 styled-components 支持
    },
};

export default nextConfig;
