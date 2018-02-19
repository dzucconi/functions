export default (obj, ...props) =>
  Object.assign({}, ...props.map(prop => ({ [prop]: o[prop] })));
