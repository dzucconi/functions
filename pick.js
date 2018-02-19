export default (obj, ...keys) => ({
  ...keys.map(key => ({ [key]: obj[key] })),
});
