module.exports = {
  devIndicators: {
    autoPrerender: true, // set to false to remove that indicator thing
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
