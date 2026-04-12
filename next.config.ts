import type { NextConfig } from "next";
import { withSerwist } from "@serwist/turbopack";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          // In local development, proxy /api requests to the Java service.
          source: "/api/:path*",
          destination: "http://localhost:18080/:path*",
        },
      ];
    }
    return [];
  },
};

export default withSerwist(nextConfig);
