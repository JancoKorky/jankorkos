/** @type {{redirects(): [{permanent: boolean, destination: string, source: string}|null], reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,

  redirects() {
    return [
      process.env.MAINTENANCE_MODE === '1'
        ? {
            source: '/((?!maintenance).*)',
            destination: '/maintenance',
            permanent: false,
          }
        : null,
    ].filter(Boolean);
  },
};

module.exports = nextConfig;
