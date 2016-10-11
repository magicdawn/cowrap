/* eslint strict: off, no-var: off */

/**
 * Module dependencies
 */

var co = require('co');

var cowrap = module.exports = function cowrap(fn){
  var fnname = (fn.name || '__anonymous_generator_function__');

  var len = fn.length;
  var argArr = [];
  for(var i = 0; i < len; i++) {
    argArr.push('$' + (i + 1));
  }
  var args = argArr.join(',');

  var wrapper = '(function '+ fnname +'(' + args + '){\n' +
    'return co.call(this, fn.apply(this, arguments));\n' +
  '})';

  return eval(wrapper);
};