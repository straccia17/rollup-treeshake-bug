# rollup-treeshake-bug

## Description
This repository shows an error on rollup treeshaking.

I must set `treeshake: false` in rollup config to prevent the error.

The code comes from `core-js` module [https://github.com/zloirock/core-js/blob/v2.6.7/modules/es6.regexp.split.js]

## Build
```bash
# Install dependencies
yarn

# Run build
yarn run build
```