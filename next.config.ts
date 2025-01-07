import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fsbezimxrqnvxjyhivvn.supabase.co', // 許可するホスト名
        port: '', // ポート番号がない場合は空文字
        // pathname: '/storage/v1/object/public/icon/**', // パスの指定
      },
    ],
  },
};

export default nextConfig;
