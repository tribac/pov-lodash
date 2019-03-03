var _get = require('lodash.get');
var _set = require('lodash.set');
var { pov, array } = require('povjs');

function getter(o, path) {
  return _get(o, path);
}

function setter(o, path, v) {
  return _set(o, path, v);
}

exports = module.exports = {
  get: getter,
  set: setter,
  pov: pov(getter, setter),
  array: array(getter, setter)
};
