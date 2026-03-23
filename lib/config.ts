export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://api.your-production-domain.com"
      : "http://localhost:18080"),
  endpoints: {
    hello: "/housekeeping", // Assumed path based on method name, adjustable
  },
};
