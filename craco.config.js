const path = require("path");

module.exports = {
  webpack: {
    configure: {
      entry: "./src/index.tsx",
    },
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  style: {
    postOptions: {
      plugins: [require("autoprefixer")],
    },
  },
};
