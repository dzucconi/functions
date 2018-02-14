export default css =>
  Object.keys(css).reduce((memo, key) =>
    `${key}: ${css[key]}; ${memo}`, '');
