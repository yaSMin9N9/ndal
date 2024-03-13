const nextTranslate = require('next-translate-plugin');

module.exports = {
  images: {
    domains: ["daliluna.ltd","daliluna.ltd/storage/yellowpagesimages"],
  },
  env: {
    API_URL: 'https://daliluna.ltd/api',
  },
  reactStrictMode: false,
  ...nextTranslate({
    webpack: (config, { isServer, webpack }) => {
      return config;
    }
  })
};
