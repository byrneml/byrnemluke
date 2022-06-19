module.exports = {
  reactStrictMode: true,
  env: {
    POSTHOG_KEY: process.env.POSTHOG_KEY,
    NODE_ENV: process.env.NODE_ENV,
  },
};
