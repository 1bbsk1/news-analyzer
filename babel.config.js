const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "64",
        safari: "11.1",
        esmodules: true,
        ie: "11",
      },
      useBuiltIns: "usage",
      corejs: "3.36.0",
    },
  ],
  "@babel/preset-typescript",
];

const plugins = [
  ["@babel/plugin-transform-class-properties", { loose: true }],
  ["@babel/plugin-transform-private-methods", { loose: true }],
  ["@babel/plugin-transform-private-property-in-object", { loose: true }],
];

module.exports = { presets, plugins };
