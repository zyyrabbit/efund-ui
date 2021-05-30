const path = require('path');
const BASE = process.cwd();
const SRC = path.join(BASE, 'src');
const COMPONENTS = require('../components.json');
const nodeExternals = require('webpack-node-externals');
let externals = {};

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.commonConfig = {
  CONTEXT: SRC,
  SRC,
  ALIAS: {
    '@': SRC
  }
}

exports.buildConfig = {
  ENTRY: path.join(SRC, 'packages/index.ts'),
  SRC,
  OUT_PATH: path.join(BASE, 'lib'),
  externals
}

exports.componentConfig = {
  ENTRY: COMPONENTS,
  SRC,
  OUT_PATH: path.join(BASE, 'lib'),
  externals
}

exports.devConfig = {
  ENTRY: path.join(SRC, 'main.ts'),
  SRC,
  OUT_PATH: path.join(BASE, 'dist'),
  TEMPLATE: path.join(BASE, './public/index.html'),
  FROM: path.join(BASE, 'public'),
  TO: path.join(BASE, 'dist') 
}