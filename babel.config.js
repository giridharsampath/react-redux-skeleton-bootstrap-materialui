module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "#components": "./src/components",
          "#containers": "./src/containers",
          "#reducers": "./src/reducers",
          "#actionTypes": "./src/actionTypes",
          "#actions": "./src/actions",
          "#constants": "./src/constants",
          "#store": "./src/store",
          "#config": "./src/config",
          "#utils": "./src/utils",
          "#styles": "./src/styles",
          "#config": "./src/config",
          "#assets": "./src/assets",
          "#images": "./src/assets/images",
        },
      },
    ],
  ],
};
