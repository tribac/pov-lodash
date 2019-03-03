var { get, set, pov } = require('../');
var assert = require('assert');

var o;
var m = { oof: 'foo[0]', rab: 'bar.baz' };

beforeEach(function() {
  o = {};
});

it("can use pre-injected lodash' setter / getter", function() {
  var p = pov(o, m);
  p.oof = 1;
  p.rab = 2;
  assert.equal(p.oof, o.foo[0]);
  assert.equal(p.rab, o.bar.baz);
});

it("can inject lodash's getter / setter", function() {
  var p = pov(o, m);
  p.oof = 0;
  p.rab = 1;
  assert.equal(p.oof, o.foo[0]);
  assert.equal(p.rab, o.bar.baz);
});
