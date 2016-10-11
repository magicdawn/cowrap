'use strict';

const cowrap = require('../');

describe('simple', function() {
  it('It works', function*() {
    const fn = cowrap(function* (a) {
      const x = yield Promise.resolve(1);
      return x;
    });
    const x = yield fn();
    x.should.equal(1);
  });
});