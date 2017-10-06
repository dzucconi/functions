import * as rand from './rand'

export default xs =>
  xs[rand.int(0, xs.length - 1)];
