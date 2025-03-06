module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3.0.0" }],
    "@babel/preset-typescript",
  ],
  plugins: ["@babel/plugin-transform-class-properties"],
};
